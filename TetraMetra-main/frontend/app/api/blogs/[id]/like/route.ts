// app/api/blogs/[id]/like/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function POST(
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

    blog.likes += 1;
    await blog.save();

    return NextResponse.json({
      success: true,
      message: 'Blog liked successfully',
      likes: blog.likes
    });
  } catch (error) {
    console.error('Error liking blog:', error);
    return NextResponse.json(
      { success: false, message: 'Error liking blog' },
      { status: 500 }
    );
  }
}
