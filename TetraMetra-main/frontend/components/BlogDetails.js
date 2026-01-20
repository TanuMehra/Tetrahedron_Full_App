
// components/BlogDetails.js
import React, { useRef, useState } from "react";
import ContactFormModal from "./ContactFormModal";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function BlogDetails({ blog, recentBlogs }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);

  if (!blog) return null;

  // Helper to render section headings with ref
  const renderHeading = (text, level = 2, key) => {
    const Tag = `h${level}`;
    const ref = useRef(null);
    return (
      <Tag
        key={key}
        ref={node => {
          if (node) {
            node.style.setProperty("font-family", "var(--font-poppins)", "important");
            const resizeHeading = () => {
              if (window.innerWidth < 600) {
                node.style.fontSize = "22px";
                node.style.margin = "24px 0 12px 0";
              } else {
                node.style.fontSize = "28px";
                node.style.margin = "32px 0 16px 0";
              }
            };
            resizeHeading();
            window.addEventListener('resize', resizeHeading);
          }
        }}
        style={{ 
          fontWeight: 700, 
          margin: "32px 0 16px 0",
          color: "#1a1a2e",
          lineHeight: "1.3"
        }}
      >
        {text}
      </Tag>
    );
  };

  // Helper to render paragraphs with ref
  const renderParagraph = (text, key) => (
    <p
      key={key}
      ref={node => {
        if (node) {
          node.style.setProperty("font-family", "var(--font-poppins)", "important");
          const resizePara = () => {
            if (window.innerWidth < 600) {
              node.style.fontSize = "15px";
              node.style.marginBottom = "14px";
              node.style.lineHeight = "1.6";
            } else {
              node.style.fontSize = "17px";
              node.style.marginBottom = "18px";
              node.style.lineHeight = "1.8";
            }
          };
          resizePara();
          window.addEventListener('resize', resizePara);
        }
      }}
      style={{ 
        fontSize: "17px", 
        marginBottom: "18px",
        color: "#4a4a4a",
        lineHeight: "1.8"
      }}
    >
      {text}
    </p>
  );

  let imageFloatDirection = 0;
  const renderImage = (src, alt = "Blog Image", isMain = false, floatDir = "left") => (
    <img
      src={src}
      alt={alt}
      ref={node => {
        if (node) {
          const resizeImg = () => {
            if (window.innerWidth < 600) {
              node.style.width = isMain ? "100%" : "90vw";
              node.style.maxWidth = isMain ? "98vw" : "95vw";
              node.style.margin = isMain ? "20px 0" : "0 0 16px 0";
              node.style.float = undefined;
              node.style.display = "block";
            } else {
              node.style.width = isMain ? "100%" : "280px";
              node.style.maxWidth = isMain ? "100%" : "350px";
              node.style.margin = isMain
                ? "24px 0"
                : floatDir === "left"
                  ? "0 28px 20px 0"
                  : "0 0 20px 28px";
              node.style.float = isMain ? undefined : floatDir;
              node.style.display = isMain ? "block" : "inline-block";
            }
          };
          resizeImg();
          window.addEventListener('resize', resizeImg);
        }
      }}
      style={{
        width: isMain ? "100%" : 280,
        maxWidth: isMain ? "100%" : 350,
        borderRadius: 12,
        margin: isMain
          ? "24px 0"
          : floatDir === "left"
            ? "0 28px 20px 0"
            : "0 0 20px 28px",
        float: isMain ? undefined : floatDir,
        display: isMain ? "block" : "inline-block",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
      }}
    />
  );

  let headingCount = 0;
  const mainContainerRef = useRef(null);
  const sidebarRef = useRef(null);
  const outerContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleBannerResize = () => {
      if (titleRef.current) {
        if (window.innerWidth < 600) {
          titleRef.current.style.fontSize = "32px";
        } else {
          titleRef.current.style.fontSize = "48px";
        }
      }
    };
    handleBannerResize();
    window.addEventListener('resize', handleBannerResize);
    return () => window.removeEventListener('resize', handleBannerResize);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      if (outerContainerRef.current) {
        if (window.innerWidth < 1200) {
          outerContainerRef.current.style.padding = "0 16px";
        } else {
          outerContainerRef.current.style.padding = "0";
        }
      }
      if (mainContainerRef.current) {
        if (window.innerWidth < 1200) {
          mainContainerRef.current.style.flexDirection = "column";
          mainContainerRef.current.style.gap = "0";
          mainContainerRef.current.style.padding = "0 12px";
        } else {
          mainContainerRef.current.style.flexDirection = "row";
          mainContainerRef.current.style.gap = "40px";
          mainContainerRef.current.style.padding = "0";
        }
      }
      if (sidebarRef.current) {
        if (window.innerWidth < 1200) {
          sidebarRef.current.style.maxWidth = "100%";
          sidebarRef.current.style.minWidth = "0";
          sidebarRef.current.style.marginTop = "40px";
        } else {
          sidebarRef.current.style.maxWidth = "380px";
          sidebarRef.current.style.minWidth = "280px";
          sidebarRef.current.style.marginTop = "0";
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="blog-details-page" ref={outerContainerRef} style={{ background: "#f8f9fa" }}>
      {/* Enhanced Banner with Gradient */}
      <div
        style={{
          background: "linear-gradient(135deg, #0a2c5e 0%, #1e5a8e 100%)",
          color: "#fff",
          minHeight: 320,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 20px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          opacity: 0.4
        }}></div>
        <div style={{ maxWidth: 1000, margin: "0 auto", width: "100%", padding: "0 12px", position: "relative", zIndex: 1 }}>
          {blog.title && (
            <h1
              ref={titleRef}
              style={{ 
                fontFamily: "var(--font-poppins)", 
                fontWeight: 800, 
                fontSize: 48, 
                margin: 0, 
                color: "#fff",
                textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                lineHeight: "1.2"
              }}
            >
              {blog.title}
            </h1>
          )}
        </div>
      </div>

      {/* Main Content with improved spacing */}
      <div
        className="container"
        ref={mainContainerRef}
        style={{ 
          display: "flex", 
          flexDirection: "row", 
          gap: 40, 
          maxWidth: 1280, 
          margin: "48px auto",
          padding: "0 20px"
        }}
      >
        {/* Blog Content with enhanced card design */}
        <div style={{ 
          flex: 3, 
          minWidth: 0,
          background: "#fff",
          borderRadius: 16,
          padding: "40px",
          boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
          marginBottom: "40px"
        }}>
          {blog.image && renderImage(blog.image.url || blog.image, blog.title, true)}
          
          {blog.sections && blog.sections.map((section, idx) => {
            let ctaToRender = null;
            let content = [];
            
            if (section.heading) {
              headingCount++;
              content.push(renderHeading(section.heading, 2, `heading-${idx}`));
            }
            
            if (section.image) {
              const floatDir = imageFloatDirection % 2 === 0 ? "left" : "right";
              imageFloatDirection++;
              if (isMobile) {
                content.push(
                  <div key={`img-content-${idx}`} style={{ width: "100%", marginBottom: 16 }}>
                    {renderImage(section.image.url || section.image, undefined, false, undefined)}
                  </div>
                );
              } else {
                content.push(
                  <div key={`img-content-${idx}`} style={{ overflow: "auto", minHeight: 140 }}>
                    {renderImage(section.image.url || section.image, undefined, false, floatDir)}
                    <div style={{ overflow: "hidden" }}></div>
                  </div>
                );
              }
            }
            
            if (section.content) {
              if (section.image) {
                if (isMobile) {
                  section.content.forEach((para, i) => content.push(renderParagraph(para, `para-${idx}-${i}`)));
                } else {
                  content[content.length - 1] = (
                    <div key={`img-content-${idx}`} style={{ overflow: "auto", minHeight: 140 }}>
                      {renderImage(section.image.url || section.image, undefined, false, imageFloatDirection % 2 === 1 ? "left" : "right")}
                      <div style={{ overflow: "hidden" }}>
                        {section.content.map((para, i) => renderParagraph(para, `para-${idx}-${i}`))}
                      </div>
                    </div>
                  );
                }
              } else {
                section.content.forEach((para, i) => content.push(renderParagraph(para, `para-${idx}-${i}`)));
              }
            }
            
            if (blog.cta && headingCount > 0 && headingCount % 2 === 0) {
              ctaToRender = (
                <div key={`cta-${idx}`} style={{ 
                  margin: "48px 0", 
                  background: "linear-gradient(135deg, #ff5722 0%, #ff7043 100%)", 
                  padding: 32, 
                  borderRadius: 16, 
                  textAlign: "center",
                  boxShadow: "0 8px 24px rgba(255, 87, 34, 0.25)"
                }}>
                  {blog.cta.text && (
                    <h3
                      ref={ctaRef}
                      style={{ 
                        fontFamily: "var(--font-poppins)", 
                        fontWeight: 700, 
                        fontSize: 26, 
                        marginBottom: 20,
                        color: "#fff"
                      }}
                    >
                      {blog.cta.text}
                    </h3>
                  )}
                  <button
                    type="button"
                    className="thm-btn"
                    style={{ 
                      fontSize: 18, 
                      padding: "14px 40px", 
                      borderRadius: 50, 
                      background: "#fff", 
                      color: "#ff5722", 
                      border: "none", 
                      fontWeight: 700, 
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                    }}
                    onClick={() => setIsModalOpen(true)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                    }}
                  >
                    {blog.cta.buttonText || "Contact Us"}
                  </button>
                </div>
              );
            }
            
            return (
              <React.Fragment key={`section-frag-${idx}`}>
                {content}
                {ctaToRender}
              </React.Fragment>
            );
          })}
          
          {/* Final CTA with enhanced design */}
          {blog.cta && (
            <div style={{ 
              margin: "48px 0 0 0", 
              background: "linear-gradient(135deg, #ff5722 0%, #ff7043 100%)", 
              padding: 32, 
              borderRadius: 16, 
              textAlign: "center",
              boxShadow: "0 8px 24px rgba(255, 87, 34, 0.25)"
            }}>
              {blog.cta.text && (
                <h3
                  style={{ 
                    fontFamily: "var(--font-poppins)", 
                    fontWeight: 700, 
                    fontSize: 26, 
                    marginBottom: 20,
                    color: "#fff"
                  }}
                >
                  {blog.cta.text}
                </h3>
              )}
              <button
                type="button"
                className="thm-btn"
                style={{ 
                  fontSize: 18, 
                  padding: "14px 40px", 
                  borderRadius: 50, 
                  background: "#fff", 
                  color: "#ff5722", 
                  border: "none", 
                  fontWeight: 700, 
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
                onClick={() => setIsModalOpen(true)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                }}
              >
                {blog.cta.buttonText || "Contact Us"}
              </button>
            </div>
          )}
        </div>

        {/* Enhanced Sidebar */}
        <aside
          ref={sidebarRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            flex: 1,
            minWidth: 280,
            maxWidth: 380,
            position: "sticky",
            top: 24,
            alignSelf: "flex-start",
            zIndex: 3,
            height: "fit-content"
          }}
        >
          {/* Contact Form Card */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: 28,
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.05)"
          }}>
            <h3 style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: 24,
              marginBottom: 24,
              textAlign: "center",
              color: "#1a1a2e"
            }}>
              Get In Touch
            </h3>
            <ContactForm />
          </div>

          {/* Recent Blogs Card */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: 28,
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.05)"
          }}>
            <h3 style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: 22,
              marginBottom: 24,
              color: "#1a1a2e"
            }}>
              Recent Articles
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {recentBlogs && recentBlogs.slice(0, 4).map((b, i) => (
                <li key={b.slug} style={{ 
                  marginBottom: 20, 
                  display: "flex", 
                  alignItems: "center",
                  padding: "12px",
                  borderRadius: 12,
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#f8f9fa";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
                >
                  {b.image && (
                    <img 
                      src={b.image.url || b.image} 
                      alt={b.title} 
                      style={{ 
                        width: 64, 
                        height: 64, 
                        objectFit: "cover", 
                        borderRadius: 10, 
                        marginRight: 14,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                      }} 
                    />
                  )}
                  <div style={{ flex: 1 }}>
                    <Link 
                      href={`/${b.slug}`} 
                      style={{ 
                        color: "#1a1a2e", 
                        fontWeight: 600, 
                        textDecoration: "none", 
                        fontSize: 15,
                        lineHeight: "1.4",
                        display: "block",
                        transition: "color 0.3s ease"
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = "#ff5722"}
                      onMouseOut={(e) => e.currentTarget.style.color = "#1a1a2e"}
                    >
                      {b.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <ContactFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        buttonText={blog.cta?.buttonText || "Contact Us"}
      />
    </div>
  );
}