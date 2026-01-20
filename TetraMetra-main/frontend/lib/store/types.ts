// lib/store/types.ts
export interface IBlogSection {
    _id?: string;
    heading: string;
    content: string[];
    image?: {
      url: string;
      publicId: string;
      alt: string;
    };
  }
  
  export interface IBlog {
    _id?: string;
    id?: number;
    title: string;
    slug?: string;
    image?: {
      url: string;
      publicId: string;
      alt: string;
    };
    sections: IBlogSection[];
    cta?: {
      buttonText?: string;
      text?: string;
    };
    status: 'draft' | 'published' | 'archived';
    featured: boolean;
    tags: string[];
    category?: string;
    metaDescription?: string;
    readingTime?: number;
    views: number;
    likes: number;
    createdAt?: string;
    updatedAt?: string;
    excerpt?: string;
  }
  
  export interface BlogFilters {
    search: string;
    status: string;
    category: string;
    featured: boolean | null;
    tags: string[];
  }
  
  export interface BlogPagination {
    currentPage: number;
    totalPages: number;
    totalBlogs: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
  }
  
  export interface BlogState {
    blogs: IBlog[];
    currentBlog: IBlog | null;
    loading: boolean;
    error: string | null;
    filters: BlogFilters;
    pagination: BlogPagination;
    stats: {
      totalBlogs: number;
      publishedBlogs: number;
      draftBlogs: number;
      totalViews: number;
    };
  }