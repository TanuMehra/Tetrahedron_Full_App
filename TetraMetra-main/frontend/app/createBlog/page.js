'use client'
import Layout from "@/components/layout/Layout";

export default function CreateBlog() {
    return (
        <Layout breadcrumbTitle="Create Blog">
            <section className="create-blog-section" style={{ padding: '60px 20px' }}>
                <div className="container">
                    <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Create a New Blog Post</h1>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
                        Use the Create Blog button in the navbar to open the form and add a new blog post to our website.
                    </p>
                </div>
            </section>
        </Layout>
    );
}
