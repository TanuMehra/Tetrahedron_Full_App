// app/api/blogs/[id]/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import cloudinary from '@/lib/cloudinary';

// GET blog by id or slug
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    // Check if id is MongoDB ObjectId or slug
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(id);
    const query = isObjectId ? { _id: id } : { slug: id };

    const blog = await Blog.findOne(query);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: 'Blog not found' },
        { status: 404 }
      );
    }

    // Increment view count
    blog.views += 1;
    await blog.save();

    return NextResponse.json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { success: false, message: 'Error fetching blog' },
      { status: 500 }
    );
  }
}

// PUT update blog by id
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const formData = await req.formData();
    const blogData = JSON.parse(formData.get('blogData') as string) || JSON.parse(formData.get('json') as string);

    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json(
        { success: false, message: 'Blog not found' },
        { status: 404 }
      );
    }

    // Handle main image update (file or string)
    const mainImage = formData.get('mainImage');
    if (mainImage) {
      // Delete old image if exists
      if (blog.image?.publicId) {
        await cloudinary.uploader.destroy(blog.image.publicId);
      }

      if (typeof mainImage === 'string') {
        // If it's a string, assume it's a URL or already uploaded image
        blogData.image = {
          url: mainImage,
          publicId: '', // You may want to handle publicId if available
          alt: blogData.title
        };
      } else if (mainImage instanceof File) {
        const bytes = await mainImage.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            {
              folder: 'blog_uploads',
              transformation: [{ width: 1200, height: 800, crop: 'limit', quality: 'auto' }]
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          ).end(buffer);
        });

        blogData.image = {
          url: (uploadResult as any).secure_url,
          publicId: (uploadResult as any).public_id,
          alt: blogData.title
        };
      }
    }

    // Handle section images (file or string) for each section, similar to POST in /api/blogs/route.ts
    if (Array.isArray(blogData.sections)) {
      for (let i = 0; i < blogData.sections.length; i++) {
        const sectionImage = formData.get(`sectionImage_${i}`);
        if (sectionImage) {
          // Delete old section image if exists
          if (
            blog.sections &&
            blog.sections[i] &&
            blog.sections[i].image &&
            blog.sections[i].image.publicId
          ) {
            await cloudinary.uploader.destroy(blog.sections[i].image.publicId);
          }

          if (typeof sectionImage === 'string') {
            // If it's a string, assume it's a URL or already uploaded image
            blogData.sections[i].image = {
              url: sectionImage,
              publicId: '', // You may want to handle publicId if available
              alt: blogData.sections[i].heading
            };
          } else if (sectionImage instanceof File) {
            const bytes = await sectionImage.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const uploadResult = await new Promise((resolve, reject) => {
              cloudinary.uploader.upload_stream(
                {
                  folder: 'blog_uploads/sections',
                  transformation: [{ width: 800, height: 600, crop: 'limit', quality: 'auto' }]
                },
                (error, result) => {
                  if (error) reject(error);
                  else resolve(result);
                }
              ).end(buffer);
            });

            blogData.sections[i].image = {
              url: (uploadResult as any).secure_url,
              publicId: (uploadResult as any).public_id,
              alt: blogData.sections[i].heading
            };
          }
        }
      }
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      blogData,
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      message: 'Blog updated successfully',
      data: updatedBlog
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { success: false, message: 'Error updating blog' },
      { status: 500 }
    );
  }
}

// DELETE blog by id
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: 'Blog not found' },
        { status: 404 }
      );
    }

    // Delete images from Cloudinary
    const imagesToDelete = [];

    if (blog.image?.publicId) {
      imagesToDelete.push(blog.image.publicId);
    }

    if (Array.isArray(blog.sections)) {
      blog.sections.forEach((section: any) => {
        if (section.image?.publicId) {
          imagesToDelete.push(section.image.publicId);
        }
      });
    }

    if (imagesToDelete.length > 0) {
      await Promise.all(
        imagesToDelete.map(publicId => cloudinary.uploader.destroy(publicId))
      );
    }

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { success: false, message: 'Error deleting blog' },
      { status: 500 }
    );
  }
}
