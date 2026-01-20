import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

// GET blog by slug
export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;

    // Find blog by slug
    const blog = await Blog.findOne({ slug });

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
    console.error('Error fetching blog by slug:', error);
    return NextResponse.json(
      { success: false, message: 'Error fetching blog' },
      { status: 500 }
    );
  }
}
