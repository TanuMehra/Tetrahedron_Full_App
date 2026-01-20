'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/components/layout/Layout";
import { fetchBlogs, selectBlogs, selectBlogsLoading, selectBlogsError, selectBlogPagination } from "@/lib/store/blogSlice";
import { stripHtmlTags } from "@/lib/utils";

const poppinsFont = {
  fontFamily: "Poppins, sans-serif !important"
};
const mainHeading = {
  fontFamily: "Poppins, sans-serif !important",
  fontSize: "32px !important"
};
const blogTitle = {
  fontFamily: "Poppins, sans-serif !important",
  fontSize: "26px !important"
};
const bodyText = {
  fontFamily: "Poppins, sans-serif !important",
  fontSize: "18px !important"
};
const smallText = {
  fontFamily: "Poppins, sans-serif !important",
  fontSize: "16px !important"
};

export default function Home(){
    const [visiblePosts, setVisiblePosts] = useState(6);
    const dispatch = useDispatch();
    
    const blogs = useSelector(selectBlogs);
    const loading = useSelector(selectBlogsLoading);
    const error = useSelector(selectBlogsError);
    const pagination = useSelector(selectBlogPagination);

    useEffect(() => {
        // Fetch blogs when component mounts
        dispatch(fetchBlogs({ 
            page: 1, 
            limit: 20
        }));
    }, [dispatch]);

    const loadMorePosts = () => {
        setVisiblePosts((prev) => prev + 6);    
    };

    // Show first visiblePosts blogs
    const visibleBlogs = blogs.slice(0, visiblePosts);

    // Format date helper
    const formatDate = (dateString) => {
        if (!dateString) return 'No date';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Generate blog link
    const getBlogLink = (blog) => {
        return `/blog-details/${blog._id}`;
    };

    // Get excerpt from description
    const getBlogExcerpt = (blog) => {
        if (blog.description) {
            const plainText = stripHtmlTags(blog.description);
            const text = plainText.length > 150 
                ? plainText.substring(0, 150) + '...' 
                : plainText;
            return text;
        }
        return 'No description available.';
    };

    if (loading && blogs.length === 0) {
        return (
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Blog">
                <section className="blog-one" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
                    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <p className="mt-3">Loading blogs...</p>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Blog">
                <section className="blog-one">
                    <div className="container">
                        <div className="text-center">
                            <div className="alert alert-danger">
                                <h4>Error loading blogs</h4>
                                <p>{error}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }

    return (
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Blog">
            <section className="blog-one">
                <div className="container">
                    <div className="row">
                        {visibleBlogs.map((blog) => (
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" key={blog._id} data-wow-delay="300ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img 
                                                src={blog.image || '/assets/images/blog/default-blog.jpg'} 
                                                alt={blog.title} 
                                                className="main-img" 
                                                style={{ width: "100%", height: "250px", objectFit: "cover" }}
                                            />
                                            <img 
                                                src={blog.image || '/assets/images/blog/default-blog.jpg'} 
                                                alt={blog.title} 
                                                className="hover-img" 
                                                style={{ width: "100%", height: "250px", objectFit: "cover" }}
                                            />
                                            <Link href={getBlogLink(blog)} className="blog-one__link">
                                                <span className="sr-only"></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <Link 
                                        href={getBlogLink(blog)} 
                                        ref={el => {
                                            if (el) {
                                                el.style.setProperty("font-size", "17px", "important");
                                            }
                                        }}
                                    >
                                        <span className="icon-calender"></span> 
                                        <span 
                                            ref={el => {
                                                if (el) {
                                                    el.style.setProperty("font-size", "17px", "important");
                                                }
                                            }}
                                        >
                                            {formatDate(blog.date || blog.createdAt)}
                                        </span>
                                    </Link>
                                    <div className="blog-one__content">
                                        <h3 
                                            className="blog-one__title"
                                            ref={el => {
                                                if (el) {
                                                    el.style.setProperty("font-size", "24px", "important");
                                                }
                                            }}
                                        >
                                            <Link 
                                                href={getBlogLink(blog)}
                                                ref={el => {
                                                    if (el) {
                                                        el.style.setProperty("font-size", "24px", "important");
                                                    }
                                                }}
                                            >
                                                {blog.title}
                                            </Link>
                                        </h3>
                                        <p 
                                            ref={el => {
                                                if (el) {
                                                    el.style.setProperty("font-size", "18px", "important");
                                                }
                                            }}
                                        >
                                            {getBlogExcerpt(blog)}
                                        </p>
                                        <div className="blog-one__read-more">
                                            <Link 
                                                href={getBlogLink(blog)}
                                                ref={el => {
                                                    if (el) {
                                                        el.style.setProperty("font-size", "17px", "important");
                                                    }
                                                }}
                                            >
                                                Read more<span className="icon-dabble-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {visiblePosts < blogs.length && (
                        <div className="text-center mt-4">
                            <button 
                                className="btn" 
                                style={{
                                    backgroundColor: "#eb7434", 
                                    color: "white", 
                                    padding: "12px 24px", 
                                    borderRadius: "5px", 
                                    border: "none",
                                    cursor: "pointer"
                                }}
                                ref={el => {
                                    if (el) {
                                        el.style.setProperty("font-size", "18px", "important");
                                    }
                                }}
                                onClick={loadMorePosts}
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Load More'}
                            </button>
                        </div>
                    )}

                    {blogs.length === 0 && !loading && (
                        <div className="text-center">
                            <div className="alert alert-info">
                                <h4>No blogs available</h4>
                                <p>There are no blogs to display at the moment.</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}