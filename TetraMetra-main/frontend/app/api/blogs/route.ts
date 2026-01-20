// app/api/blogs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import cloudinary from '@/lib/cloudinary';
import { blogValidationSchema } from '@/lib/validations';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // If you want to keep filtering, you can keep this logic, but ignore pagination
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');

    // Build filter object
    const filter: any = {};
    if (status) filter.status = status;
    if (category) filter.category = new RegExp(category, 'i');
    if (featured !== null) filter.featured = featured === 'true';

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { 'sections.heading': { $regex: search, $options: 'i' } }
      ];
    }

    // Fetch all blogs at once (no pagination)
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: blogs,
      totalBlogs: blogs.length
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { success: false, message: 'Error fetching blogs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();
    const blogData = JSON.parse(formData.get('blogData') as string) || JSON.parse(formData.get('json') as string);

    // Validate blog data
    const { error, value } = blogValidationSchema.validate(blogData);
    if (error) {
      return NextResponse.json(
        { success: false, message: error.details[0].message },
        { status: 400 }
      );
    }

    // Handle main image upload or string
    const mainImage = formData.get('mainImage');
    if (mainImage) {
      if (typeof mainImage === 'string') {
        // If it's a string, assume it's a URL or already uploaded image
        value.image = {
          url: mainImage,
          publicId: '', // You may want to handle publicId if available
          alt: value.title
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

        value.image = {
          url: (uploadResult as any).secure_url,
          publicId: (uploadResult as any).public_id,
          alt: value.title
        };
      }
    }

    // Handle section images (File or string)
    for (let i = 0; i < value.sections.length; i++) {
      const sectionImage = formData.get(`sectionImage_${i}`);
      if (sectionImage) {
        if (typeof sectionImage === 'string') {
          // If it's a string, assume it's a URL or already uploaded image
          value.sections[i].image = {
            url: sectionImage,
            publicId: '', // You may want to handle publicId if available
            alt: value.sections[i].heading
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

          value.sections[i].image = {
            url: (uploadResult as any).secure_url,
            publicId: (uploadResult as any).public_id,
            alt: value.sections[i].heading
          };
        }
      }
    }

    const blog = await Blog.create(value);

    return NextResponse.json({
      success: true,
      message: 'Blog created successfully',
      data: blog
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { success: false, message: 'Error creating blog', error },
      { status: 500 }
    );
  }
}
