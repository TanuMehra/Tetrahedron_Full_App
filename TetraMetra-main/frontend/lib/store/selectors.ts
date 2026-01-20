// lib/store/selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

// Basic selectors
export const selectBlogs = (state: RootState) => state.blogs.blogs;
export const selectCurrentBlog = (state: RootState) => state.blogs.currentBlog;
export const selectBlogLoading = (state: RootState) => state.blogs.loading;
export const selectBlogError = (state: RootState) => state.blogs.error;
export const selectBlogFilters = (state: RootState) => state.blogs.filters;
export const selectBlogPagination = (state: RootState) => state.blogs.pagination;
export const selectBlogStats = (state: RootState) => state.blogs.stats;

// Memoized selectors
export const selectPublishedBlogs = createSelector(
  [selectBlogs],
  (blogs) => blogs.filter(blog => blog.status === 'published')
);

export const selectDraftBlogs = createSelector(
  [selectBlogs],
  (blogs) => blogs.filter(blog => blog.status === 'draft')
);

export const selectFeaturedBlogs = createSelector(
  [selectBlogs],
  (blogs) => blogs.filter(blog => blog.featured)
);

export const selectBlogsByCategory = createSelector(
  [selectBlogs, (state: RootState, category: string) => category],
  (blogs, category) => blogs.filter(blog => blog.category === category)
);

export const selectBlogsByTag = createSelector(
  [selectBlogs, (state: RootState, tag: string) => tag],
  (blogs, tag) => blogs.filter(blog => blog.tags.includes(tag))
);

export const selectPopularBlogs = createSelector(
  [selectBlogs],
  (blogs) => [...blogs].sort((a, b) => b.views - a.views).slice(0, 10)
);

export const selectRecentBlogs = createSelector(
  [selectBlogs],
  (blogs) => [...blogs].sort((a, b) => 
    new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
  ).slice(0, 10)
);

export const selectFilteredBlogs = createSelector(
  [selectBlogs, selectBlogFilters],
  (blogs, filters) => {
    return blogs.filter(blog => {
      if (filters.search && !blog.title.toLowerCase().includes(filters.search.toLowerCase()) &&
          !blog.sections.some(section => 
            section.heading.toLowerCase().includes(filters.search.toLowerCase()) ||
            section.content.some(content => content.toLowerCase().includes(filters.search.toLowerCase()))
          )) {
        return false;
      }
      
      if (filters.status && blog.status !== filters.status) {
        return false;
      }
      
      if (filters.category && blog.category !== filters.category) {
        return false;
      }
      
      if (filters.featured !== null && blog.featured !== filters.featured) {
        return false;
      }
      
      if (filters.tags.length > 0 && !filters.tags.some(tag => blog.tags.includes(tag))) {
        return false;
      }
      
      return true;
    });
  }
);

export const selectUniqueCategories = createSelector(
  [selectBlogs],
  (blogs) => {
    const categories = blogs
      .map(blog => blog.category)
      .filter((category): category is string => Boolean(category));
    // Use Array.from to ensure compatibility with older targets
    return Array.from(new Set(categories));
  }
);

export const selectUniqueTags = createSelector(
  [selectBlogs],
  (blogs) => {
    const allTags = blogs.flatMap(blog => blog.tags);
    return Array.from(new Set(allTags));
  }
);
