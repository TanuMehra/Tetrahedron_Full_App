// lib/store/hooks.ts
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { clearCurrentBlog, clearError, createBlog, deleteBlog, fetchBlogBySlug, fetchBlogs, fetchBlogStats, likeBlog, resetFilters, setCategoryFilter, setCurrentPage, setFeaturedFilter, setFilters, setLimit, setSearchFilter, setStatusFilter, setTagsFilter, updateBlog } from './blogSlice';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Custom hooks for blog operations
export const useBlogOperations = () => {
  const dispatch = useAppDispatch();
  
  return {
    // Fetch operations
    fetchBlogs: (params?: any) => dispatch(fetchBlogs(params)),
    fetchBlogBySlug: (slug: string) => dispatch(fetchBlogBySlug(slug)),
    fetchBlogStats: () => dispatch(fetchBlogStats()),
    
    // CRUD operations
    createBlog: (formData: FormData) => dispatch(createBlog(formData)),
    updateBlog: (id: string, formData: FormData) => dispatch(updateBlog({ id, formData })),
    deleteBlog: (id: string) => dispatch(deleteBlog(id)),
    likeBlog: (id: string) => dispatch(likeBlog(id)),
    
    // Filter operations
    setSearchFilter: (search: string) => dispatch(setSearchFilter(search)),
    setStatusFilter: (status: string) => dispatch(setStatusFilter(status)),
    setCategoryFilter: (category: string) => dispatch(setCategoryFilter(category)),
    setFeaturedFilter: (featured: boolean | null) => dispatch(setFeaturedFilter(featured)),
    setTagsFilter: (tags: string[]) => dispatch(setTagsFilter(tags)),
    setFilters: (filters: any) => dispatch(setFilters(filters)),
    resetFilters: () => dispatch(resetFilters()),
    
    // Pagination operations
    setCurrentPage: (page: number) => dispatch(setCurrentPage(page)),
    setLimit: (limit: number) => dispatch(setLimit(limit)),
    
    // UI operations
    clearError: () => dispatch(clearError()),
    clearCurrentBlog: () => dispatch(clearCurrentBlog()),
  };
};

export const useBlogSelectors = () => {
  const blogs = useAppSelector((state) => state.blogs.blogs);
  const currentBlog = useAppSelector((state) => state.blogs.currentBlog);
  const loading = useAppSelector((state) => state.blogs.loading);
  const error = useAppSelector((state) => state.blogs.error);
  const filters = useAppSelector((state) => state.blogs.filters);
  const pagination = useAppSelector((state) => state.blogs.pagination);
  const stats = useAppSelector((state) => state.blogs.stats);
  
  // Computed selectors
  const publishedBlogs = blogs.filter(blog => blog.status === 'published');
  const draftBlogs = blogs.filter(blog => blog.status === 'draft');
  const featuredBlogs = blogs.filter(blog => blog.featured);
  const popularBlogs = blogs.slice().sort((a, b) => b.views - a.views).slice(0, 5);
  const recentBlogs = blogs.slice().sort((a, b) => 
    new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
  ).slice(0, 5);
  
  return {
    blogs,
    currentBlog,
    loading,
    error,
    filters,
    pagination,
    stats,
    publishedBlogs,
    draftBlogs,
    featuredBlogs,
    popularBlogs,
    recentBlogs,
  };
};
