// lib/store/blogSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IBlog, BlogState, BlogFilters, BlogPagination } from './types';

// Initial state
const initialState: BlogState = {
  blogs: [],
  currentBlog: null,
  loading: false,
  error: null,
  filters: {
    search: '',
    status: '',
    category: '',
    featured: null,
    tags: []
  },
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalBlogs: 0,
    hasNextPage: false,
    hasPrevPage: false,
    limit: 12
  },
  stats: {
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalViews: 0
  }
};

// Async Thunks
export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    category?: string;
    featured?: boolean;
    tags?: string[];
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => {
    const searchParams = new URLSearchParams();
    
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.search) searchParams.set('search', params.search);
    if (params?.status) searchParams.set('status', params.status);
    if (params?.category) searchParams.set('category', params.category);
    if (params?.featured !== undefined) searchParams.set('featured', params.featured.toString());
    if (params?.tags?.length) searchParams.set('tags', params.tags.join(','));
    if (params?.sortBy) searchParams.set('sortBy', params.sortBy);
    if (params?.sortOrder) searchParams.set('sortOrder', params.sortOrder);

    const response = await fetch(`http://localhost:5000/api/blogs?${searchParams}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    const data = await response.json();
    
    // Backend returns array directly, normalize to match expected format
    const blogs = Array.isArray(data) ? data : (data.data || []);
    return {
      data: blogs,
      pagination: {
        currentPage: params?.page || 1,
        totalPages: Math.ceil(blogs.length / (params?.limit || 20)),
        totalBlogs: blogs.length,
        hasNextPage: false,
        hasPrevPage: false,
        limit: params?.limit || 20
      }
    };
  }
);

export const fetchBlogBySlug = createAsyncThunk(
  'blogs/fetchBlogBySlug',
  async (slug: string) => {
    const response = await fetch(`http://localhost:5000/api/blogs/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }
    return response.json();
  }
);

export const createBlog = createAsyncThunk(
  'blogs/createBlog',
  async (formData: FormData) => {
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create blog');
    }
    return response.json();
  }
);

export const updateBlog = createAsyncThunk(
  'blogs/updateBlog',
  async ({ id, formData }: { id: string; formData: FormData }) => {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: formData,
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update blog');
    }
    return response.json();
  }
);

export const deleteBlog = createAsyncThunk(
  'blogs/deleteBlog',
  async (id: string) => {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to delete blog');
    }
    return { id };
  }
);

export const likeBlog = createAsyncThunk(
  'blogs/likeBlog',
  async (id: string) => {
    const response = await fetch(`/api/blogs/${id}/like`, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error('Failed to like blog');
    }
    return response.json();
  }
);

export const fetchBlogStats = createAsyncThunk(
  'blogs/fetchBlogStats',
  async () => {
    const response = await fetch('/api/blogs/stats/dashboard');
    if (!response.ok) {
      throw new Error('Failed to fetch blog stats');
    }
    return response.json();
  }
);

// Blog Slice
const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    // Filter actions
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<string>) => {
      state.filters.status = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.filters.category = action.payload;
    },
    setFeaturedFilter: (state, action: PayloadAction<boolean | null>) => {
      state.filters.featured = action.payload;
    },
    setTagsFilter: (state, action: PayloadAction<string[]>) => {
      state.filters.tags = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<BlogFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },

    // Pagination actions
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pagination.currentPage = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.pagination.limit = action.payload;
    },

    // UI actions
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentBlog: (state) => {
      state.currentBlog = null;
    },

    // Local state updates
    incrementViews: (state, action: PayloadAction<string>) => {
      if (state.currentBlog && state.currentBlog._id === action.payload) {
        state.currentBlog.views += 1;
      }
      const blog = state.blogs.find(b => b._id === action.payload);
      if (blog) {
        blog.views += 1;
      }
    },
    incrementLikes: (state, action: PayloadAction<{ id: string; likes: number }>) => {
      if (state.currentBlog && state.currentBlog._id === action.payload.id) {
        state.currentBlog.likes = action.payload.likes;
      }
      const blog = state.blogs.find(b => b._id === action.payload.id);
      if (blog) {
        blog.likes = action.payload.likes;
      }
    }
  },
  extraReducers: (builder) => {
    // Fetch Blogs
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload.data;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch blogs';
      })

    // Fetch Blog by Slug
    builder
      .addCase(fetchBlogBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBlog = action.payload.data;
      })
      .addCase(fetchBlogBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch blog';
        state.currentBlog  = null;

      })

    // Create Blog
    builder
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs.unshift(action.payload.data);
        state.stats.totalBlogs += 1;
        if (action.payload.data.status === 'published') {
          state.stats.publishedBlogs += 1;
        } else if (action.payload.data.status === 'draft') {
          state.stats.draftBlogs += 1;
        }
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create blog';
      })

    // Update Blog
    builder
      .addCase(updateBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBlog = action.payload.data;
        const index = state.blogs.findIndex(blog => blog._id === updatedBlog._id);
        if (index !== -1) {
          state.blogs[index] = updatedBlog;
        }
        if (state.currentBlog && state.currentBlog._id === updatedBlog._id) {
          state.currentBlog = updatedBlog;
        }
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update blog';
      })

    // Delete Blog
    builder
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.blogs.filter(blog => blog._id !== action.payload.id);
        state.stats.totalBlogs -= 1;
        if (state.currentBlog && state.currentBlog._id === action.payload.id) {
          state.currentBlog = null;
        }
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete blog';
      })

    // Like Blog
    builder
      .addCase(likeBlog.fulfilled, (state, action) => {
        const { id, likes } = action.payload;
        if (state.currentBlog && state.currentBlog._id === id) {
          state.currentBlog.likes = likes;
        }
        const blog = state.blogs.find(b => b._id === id);
        if (blog) {
          blog.likes = likes;
        }
      })

    // Fetch Blog Stats
    builder
      .addCase(fetchBlogStats.fulfilled, (state, action) => {
        state.stats = action.payload.data;
      });
  },
});

export const {
  setSearchFilter,
  setStatusFilter,
  setCategoryFilter,
  setFeaturedFilter,
  setTagsFilter,
  setFilters,
  resetFilters,
  setCurrentPage,
  setLimit,
  clearError,
  clearCurrentBlog,
  incrementViews,
  incrementLikes
} = blogSlice.actions;

export default blogSlice.reducer;

// Blog selectors (in addition to those in selectors.ts)
// These are for convenience if you want to import directly from the slice file.
// For a more scalable approach, keep selectors in a separate file (as in selectors.ts).

import type { RootState } from './store';

// Select all blogs
export const selectBlogs = (state: RootState) => state.blogs.blogs;

// Select loading state for blogs
export const selectBlogsLoading = (state: RootState) => state.blogs.loading;

// Select error state for blogs
export const selectBlogsError = (state: RootState) => state.blogs.error;

// Select current blog
export const selectCurrentBlog = (state: RootState) => state.blogs.currentBlog;

// Select filters
export const selectBlogFilters = (state: RootState) => state.blogs.filters;

// Select pagination
export const selectBlogPagination = (state: RootState) => state.blogs.pagination;

// Select blog stats
export const selectBlogStats = (state: RootState) => state.blogs.stats;

// Select a blog by id
export const selectBlogById = (state: RootState, id: string) =>
  state.blogs.blogs.find(blog => blog._id === id);

// Select blogs by status
export const selectBlogsByStatus = (state: RootState, status: string) =>
  state.blogs.blogs.filter(blog => blog.status === status);

// Select blogs by category
export const selectBlogsByCategory = (state: RootState, category: string) =>
  state.blogs.blogs.filter(blog => blog.category === category);

// Select featured blogs
export const selectFeaturedBlogs = (state: RootState) =>
  state.blogs.blogs.filter(blog => blog.featured);

// Select blogs by tag
export const selectBlogsByTag = (state: RootState, tag: string) =>
  state.blogs.blogs.filter(blog => blog.tags.includes(tag));
