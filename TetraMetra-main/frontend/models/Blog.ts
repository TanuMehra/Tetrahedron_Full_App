// models/Blog.ts
import mongoose, { Schema, Document, Model } from "mongoose";
import slugify from "slugify";
import { IBlog, IBlogSection } from "@/lib/types";

// Extend the Model interface for Blog
interface BlogModel extends Model<IBlog> {}

const sectionSchema = new Schema<IBlogSection>({
  heading: {
    type: String,
    trim: true,
  },
  content: [{
    type: String,
    trim: true
  }],
  image: {
    url: String,
    publicId: String,
    alt: String
  }
}, { _id: true });

const blogSchema = new Schema<IBlog, BlogModel>({
  id: {
    type: Number,
    unique: true,
    sparse: true
  },
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
  },
  image: {
    url: String,
    publicId: String,
    alt: String
  },
  sections: [sectionSchema],
  cta: {
    buttonText: {
      type: String,
      trim: true,
    },
    text: {
      type: String,
      trim: true
    }
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  featured: {
    type: Boolean,
    default: false
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  category: {
    type: String,
    trim: true
  },
  metaDescription: {
    type: String,
    trim: true,
  },
  readingTime: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});




// Calculate reading time before saving
blogSchema.pre('save', function(next) {
  if (!this.isModified('sections')) return next();

  const totalWords = this.sections.reduce((total, section) => {
    const sectionWords = section.content.reduce((sectionTotal, content) => {
      return sectionTotal + content.split(' ').length;
    }, 0);
    return total + sectionWords;
  }, 0);

  // Average reading speed: 200 words per minute
  this.readingTime = Math.ceil(totalWords / 200);

  next();
});

// Auto-increment ID
blogSchema.pre('save', async function(next) {
  if (!this.isNew) return next();

  try {
    // Use the model's static method to find the last blog
    const lastBlog = await (this.constructor as BlogModel).findOne({}, {}, { sort: { 'id': -1 } });
    this.id = lastBlog ? (lastBlog as any).id + 1 : 1;
    next();
  } catch (error) {
    next(error as any);
  }
});

// Virtual for excerpt
blogSchema.virtual('excerpt').get(function() {
  if (
    this.sections &&
    this.sections.length > 0 &&
    Array.isArray(this.sections[0].content) &&
    this.sections[0].content.length > 0
  ) {
    const firstParagraph = this.sections[0].content[0];
    return firstParagraph.length > 150
      ? firstParagraph.substring(0, 150) + '...'
      : firstParagraph;
  }
  return '';
});


// Indexes for better performance
blogSchema.index({ status: 1 });
blogSchema.index({ featured: 1 });
blogSchema.index({ createdAt: -1 });

const Blog = mongoose.models.Blog as BlogModel || mongoose.model<IBlog, BlogModel>('Blog', blogSchema);

export default Blog;