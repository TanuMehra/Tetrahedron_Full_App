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
    createdAt?: Date;
    updatedAt?: Date;
    excerpt?: string;
  }
  
  export interface BlogFormData {
    title: string;
    sections: {
      heading: string;
      content: string[];
      image?: File | null;
    }[];
    mainImage?: File | null;
    cta?: {
      buttonText?: string;
      text?: string;
    };
    status: 'draft' | 'published' | 'archived';
    featured: boolean;
    tags: string[];
    category?: string;
    metaDescription?: string;
  }
  