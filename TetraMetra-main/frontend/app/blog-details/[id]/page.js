"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ContactFormModal from "@/components/ContactFormModal";

export default function BlogDetailsPage() {
    const params = useParams();
    const id = params?.id;
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalButtonText, setModalButtonText] = useState("");

    useEffect(() => {
        if (!id) return;

        const fetchBlog = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
                if (!response.ok) {
                    throw new Error('Blog not found');
                }
                const data = await response.json();
                setBlog(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setBlog(null);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const formatDate = (dateString) => {
        if (!dateString) return 'No date';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const openModal = (buttonText) => {
        setModalButtonText(buttonText);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalButtonText("");
    };

    if (loading) {
        return (
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Blog Details">
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                                <div className="text-center">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <p className="mt-3">Loading blog...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }

    if (error || !blog) {
        return (
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Blog Details">
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                                <div className="alert alert-danger">
                                    <h4>Error</h4>
                                    <p>{error || 'Blog not found'}</p>
                                    <Link href="/blog" className="thm-btn">Back to Blogs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }

    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Blog Details">
                {/*Blog Details Start*/}
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                                <div className="blog-details__left">
                                    <div className="blog-details__img-box">
                                        <div className="blog-details__img">
                                            <img 
                                                src={blog.image || '/assets/images/blog/default-blog.jpg'} 
                                                alt={blog.title}
                                                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <ul className="blog-details__meta list-unstyled">
                                            <li>
                                                <Link href="#"><span className="icon-calender"></span>{formatDate(blog.date || blog.createdAt)}</Link>
                                            </li>
                                            <li>
                                                <Link href="#"><span className="icon-user"></span>By Admin</Link>
                                            </li>
                                            <li>
                                                <Link href="#"><span className="icon-folder"></span>Blog</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog-details__content">
                                        <h3 className="blog-details__title-1">{blog.title}</h3>
                                        <div 
                                            className="blog-details__text-1"
                                            dangerouslySetInnerHTML={{ __html: blog.description }}
                                            style={{
                                                fontSize: "17px",
                                                lineHeight: "1.8",
                                                color: "#666"
                                            }}
                                        />
                                        
                                        <div className="blog-details__icon-and-content-box">
                                            <div className="blog-details__content-icon">
                                                <span className="icon-settings"></span>
                                            </div>
                                            <div className="blog-details__content-box">
                                                <h3>Blog Details</h3>
                                                <div 
                                                    dangerouslySetInnerHTML={{ __html: blog.description }}
                                                    style={{
                                                        fontSize: "16px",
                                                        lineHeight: "1.8",
                                                        color: "#666"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-details__bottom">
                                        <div className="blog-details__social-list">
                                            <Link href="#"><i className="icon-facebook"></i></Link>
                                            <Link href="#"><i className="icon-instagram"></i></Link>
                                            <Link href="#"><i className="icon-twitter"></i></Link>
                                            <Link href="#"><i className="icon-link-in"></i></Link>
                                        </div>
                                    </div>
                                    <div className="blog-details__pagenation-box">
                                        <ul className="list-unstyled blog-details__pagenation">
                                            <li>
                                                <div className="icon">
                                                    <Link href="/blog"><span className="icon-arrow-left"></span></Link>
                                                </div>
                                                <p>Back to<br/> Blogs</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="sidebar">
                                    <div className="sidebar__single sidebar__search">
                                        <h3 className="sidebar__title">Search</h3>
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Search blogs..."/>
                                            <button type="submit"><i className="icon-search"></i></button>
                                        </form>
                                    </div>
                                    <div className="sidebar__single sidebar__post">
                                        <h3 className="sidebar__title">Blog Info</h3>
                                        <ul className="sidebar__post-list list-unstyled">
                                            <li>
                                                <div className="sidebar__post-content">
                                                    <h3>Title</h3>
                                                    <p>{blog.title}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-content">
                                                    <h3>Published Date</h3>
                                                    <p className="sidebar__post-date"><i className="icon-calender-2"></i>{formatDate(blog.date || blog.createdAt)}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Blog Details End*/}

                {/*CTA One Start*/}
                <section
                    className="cta-one"
                    style={{ height: "auto", padding: "60px 0", boxSizing: "border-box", width: "100%" }}
                >
                    <div
                        className="container"
                        style={{
                            margin: "0 auto",
                            gap: "32px",
                            width: "100%",
                            maxWidth: "1200px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                        }}
                    >
                        {/* Left Side: Text and Form */}
                        <div
                            style={{
                                flex: 1,
                                boxSizing: "border-box",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                height: "100%",
                                minHeight: "400px",
                                padding: "0 0 0 24px",
                            }}
                        >
                            <h3
                                className=""
                                style={{
                                    marginBottom: "20px",
                                    fontSize: "36px",
                                    fontWeight: 700,
                                    width: "200%",
                                    color: "white"
                                }}
                            >
                                Want to Share Your Story?
                            </h3>
                            <div className="cta-one__from-box">
                                <form className="cta-one__form">
                                    <div className="cta-one__input-box">
                                        <input type="email" placeholder="Your E-mail" name="email" />
                                    </div>
                                    <button
                                        type="button"
                                        className="cta-one__btn thm-btn"
                                        style={{ width: "60%" }}
                                        onClick={() => openModal("Contact Us")}
                                    >
                                        Contact Us
                                    </button>
                                </form>
                            </div>
                        </div>
                        {/* Right Side: Images */}
                        <div
                            style={{
                                flex: 1,
                                boxSizing: "border-box",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                justifyContent: "center",
                                height: "80%",
                                gap: "16px",
                                paddingRight: "24px",
                            }}
                        >
                            <img
                                src="/assets/images/case-studies/CS2.jpg"
                                alt="Blog"
                                style={{
                                    marginBottom: "8px",
                                    zIndex: 2,
                                    maxWidth: "350px",
                                    width: "90%",
                                    minHeight: "150px",
                                    maxHeight: "40%",
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                    background: "none",
                                }}
                            />
                        </div>
                    </div>
                </section>
                {/*CTA One End*/}

                <ContactFormModal
                    open={isModalOpen}
                    onClose={closeModal}
                    buttonText={modalButtonText}
                />
            </Layout>
        </>
    );
}
