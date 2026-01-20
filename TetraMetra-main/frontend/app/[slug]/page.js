"use client";

import { consultingPages, skillTrainingData } from "@/lib/servicesData"; // Add skillTrainingData
import { blogPages, recentBlogs } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import BlogDetails from "@/components/BlogDetails";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlogBySlug,
  fetchBlogs,
  selectCurrentBlog,
  selectBlogs,
  selectBlogsLoading,
  selectBlogsError,
} from "@/lib/store/blogSlice";
import * as Icons from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";
import ContactForm from "@/components/ContactForm";

// Internal CSS styles (keep the styles object as it is)
const styles = {
  banner: {
    position: "relative",
    minHeight: "100vh", // Use minHeight for flexibility
    height: "auto", // Allow height to adjust
    overflow: "hidden",
    // backgroundColor: "#002244", // Dark blue fallback
    display: "flex", // Use flex for centering
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    padding: "60px 20px", // Add padding for smaller screens / less content
    marginBottom: "50px",
  },
  bannerImage: {
    position: "absolute", // Position absolutely to be behind content
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: "0.9", // Slightly adjust opacity maybe
    zIndex: 1, // Behind content
  },
  bannerContent: {
    position: "relative", // Relative to allow z-index stacking
    zIndex: 2, // Above image
    textAlign: "center",
    color: "white",
    width: "90%", // Adjust width
    maxWidth: "1100px", // Increase max width
    padding: "20px", // Consistent padding
    backgroundColor: "rgba(5, 6, 6, 0.28)", // Optional: slight dark background for readability
    borderRadius: "8px", // Optional: rounded corners for content box
  },
  sectionTitle: {
    fontWeight: "700",
    marginBottom: "2.5rem",
    position: "relative",
    display: "inline-block",
    paddingBottom: "10px",
    color: "#002244", // Dark blue title color for sections
  },
  sectionTitleAfter: {
    content: "''",
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "3px",
    backgroundColor: "#ff5722", // Accent color
  },
  featureCard: {
    transition: "all 0.3s ease",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    height: "100%",
    padding: "1.5rem",
    border: "1px solid #e9ecef",
    display: "flex", // Use flex for alignment within card
    flexDirection: "column", // Stack content vertically
  },
  featureCardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  featureCardContent: {
    // New style for text content alignment
    paddingLeft: "40px", // Indent text relative to icon
    textAlign: "left",
  },
  pillarsTab: {
    backgroundColor: "#f8f9fa",
    border: "1px solid #dee2e6",
    borderRadius: "0.25rem",
    padding: "1rem",
    height: "100%",
    textAlign: "left",
    fontWeight: "500",
    borderBottom: "none", // Remove individual bottom borders initially
    borderBottomRightRadius: 0, // Ensure square corners for stacking
    borderBottomLeftRadius: 0,
  },
  pillarsTabActive: {
    backgroundColor: "#002244",
    color: "white",
    borderColor: "#002244",
    borderBottomRightRadius: 0, // Ensure square corners for stacking
    borderBottomLeftRadius: 0,
  },
  pillarsTabContainer: {
    // Style for the container holding the tabs
    borderBottom: "1px solid #dee2e6", // Add a bottom border to the whole container
  },
  pillarsContent: {
    backgroundColor: "#ffffff",
    border: "1px solid #dee2e6",
    borderTop: "none", // Remove top border as it connects to tabs
    borderRadius: "0 0 0.25rem 0.25rem", // Round bottom corners only
    padding: "1.5rem",
    height: "100%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  ctaButton: {
    backgroundColor: "#ff5722",
    border: "none",
    padding: "0.75rem 2rem",
    borderRadius: "50px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    display: "inline-block", // Ensure it behaves like a button
    textDecoration: "none", // Remove underline if used as link
  },
  ctaButtonHover: {
    backgroundColor: "#e64a19",
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(230, 74, 25, 0.4)",
  },
  industryImageContainer: {
    overflow: "hidden",
    borderRadius: "8px",
    position: "relative", // For potential caption overlay later
    backgroundColor: "#eee", // Placeholder bg
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    height: "180px", // Ensure container respects height
  },
  industryImage: {
    width: "100%",
    height: "100%", // Make image fill container height
    objectFit: "cover",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  },
  industryImageHover: {
    // Apply hover to container for shadow
    transform: "scale(1.03)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  },
  certificationSection: {
    backgroundColor: "#eef4f8", // Light blue background
    padding: "3rem 1rem",
    borderRadius: "8px",
    marginBottom: "3rem",
  },
  caseStudySection: {
    backgroundColor: "#fff",
    padding: "3rem 1rem",
    borderRadius: "8px",
    marginBottom: "3rem",
    border: "1px solid #e9ecef",
    boxShadow: "0 6px 12px rgba(0,0,0,0.05)",
  },
  stepItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "1.5rem", // Increased spacing
    fontSize: "1.05rem", // Slightly larger font
  },
  stepNumber: {
    backgroundColor: "#002244",
    color: "white",
    minWidth: "35px", // Slightly larger circle
    height: "35px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1rem",
    flexShrink: "0",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  simpleContent: {
    padding: "50px", // Increased padding
    backgroundColor: "#f8f9fa",
    borderRadius: "12px", // More rounded
    marginBottom: "40px",
    border: "1px solid #e0e0e0", // Lighter border
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },
  faqContainer: { maxWidth: "800px", margin: "auto", padding: "0 15px" },
  faqItem: {
    borderBottom: "1px solid #eee",
    marginBottom: "15px",
    paddingBottom: "15px",
  },
  faqQuestion: {
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#333",
  },
  faqAnswer: {
    marginTop: "12px",
    color: "#555",
    paddingLeft: "25px",
    lineHeight: "1.6",
  },
  faqToggle: { fontSize: "1.2em", marginRight: "10px", color: "#002244" },
  comparisonTable: {
    width: "100%",
    borderCollapse: "separate", // Use separate for border-radius potentially
    borderSpacing: 0, // Remove spacing
    marginBottom: "1.5rem",
    fontSize: "0.9rem",
    borderRadius: "8px", // Rounded corners for table
    overflow: "hidden", // Clip content to rounded corners
    border: "1px solid #dee2e6",
  },
  comparisonTableThTd: {
    borderBottom: "1px solid #dee2e6", // Horizontal lines only
    padding: "0.85rem 1rem", // Adjust padding
    textAlign: "left",
    verticalAlign: "top",
  },
  comparisonTableTh: {
    backgroundColor: "#e9ecef",
    fontWeight: "600",
    color: "#333", // Darker header text
    borderBottomWidth: "2px", // Thicker bottom border for header
  },
  comparisonTableTrOdd: {
    backgroundColor: "#f8f9fa",
  },
  comparisonTableTrLastTd: {
    // Remove bottom border for last row cells
    borderBottom: "none",
  },
  comparisonTableTdFirst: {
    // Add left border for first cell (optional)
    borderLeft: "none", // Or '1px solid #dee2e6' if needed
  },
  comparisonTableTdLast: {
    // Add right border for last cell (optional)
    borderRight: "none", // Or '1px solid #dee2e6' if needed
  },
  infoCard: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    border: "1px solid #e9ecef",
    height: "100%",
    textAlign: "center",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center items horizontally
  },
  infoCardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  infoCardImage: {
    maxWidth: "100%",
    height: "150px",
    width: "auto", // Let width adjust based on height
    objectFit: "contain", // Use contain or cover based on image type
    borderRadius: "4px",
    marginBottom: "1rem",
  },
  infoCardTitle: {
    fontWeight: "600",
    marginBottom: "0.5rem",
    fontSize: "1.1rem",
    color: "#002244",
    flexGrow: 1, // Allow title to take space if text is short
  },
  infoCardText: {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: 1.5,
  },
  iconWrapper: {
    // Wrapper for icons in cards/features
    backgroundColor: "rgba(0, 34, 68, 0.1)", // Light blue background for icon
    borderRadius: "50%",
    padding: "12px",
    display: "inline-flex",
    marginBottom: "1rem",
    color: "#002244", // Icon color
  },
  // Styles for dynamically generated sections
  dynamicSection: {
    marginBottom: "4rem", // Consistent spacing between sections
    padding: "2.5rem 0", // Add vertical padding
  },
  dynamicSectionBgLight: {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    padding: "3rem 1.5rem", // Adjust padding for background sections
    boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
  },
  dynamicSectionBgAccent: {
    // Example for a different background
    backgroundColor: "#eef4f8", // Light blue
    borderRadius: "8px",
    padding: "3rem 1.5rem",
  },
  listGroupIcon: {
    // Style for icons in lists (e.g., case study challenges/results)
    marginRight: "0.75rem",
    marginTop: "0.2rem", // Align icon better with text line
    flexShrink: 0,
  },
  // Add styles for specific dynamic sections if needed
  toolsList: {
    listStyle: "none",
    paddingLeft: 0,
    textAlign: "center",
    maxWidth: "600px",
    margin: "auto",
  },
  toolItem: {
    backgroundColor: "#fff",
    border: "1px solid #eee",
    padding: "0.75rem 1.5rem",
    borderRadius: "50px",
    marginBottom: "0.75rem",
    display: "inline-block", // Make them flow inline if space allows
    marginRight: "0.5rem", // Space between items
    fontWeight: 500,
    color: "#333",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  },
  comparisonPointsTable: {
    // For Dojo 1 vs 2 table
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "1.5rem",
    fontSize: "0.9rem",
  },
  comparisonPointsTh: {
    border: "1px solid #dee2e6",
    padding: "0.75rem",
    textAlign: "left",
    backgroundColor: "#e9ecef",
    fontWeight: "600",
    width: "25%", // Approx width for Feature column
  },
  comparisonPointsTd: {
    border: "1px solid #dee2e6",
    padding: "0.75rem",
    textAlign: "left",
    verticalAlign: "top",
    width: "37.5%", // Approx width for Dojo columns
  },
  introSectionFlexContainer: {
    // New style for the flex container
    display: "flex",
    flexDirection: "row", // Default to row for larger screens
    gap: "30px", // Space between columns
    alignItems: "center", // Align items to the top
    marginBottom: "4rem",
    flexWrap: "wrap", // Allow wrapping on smaller screens
  },
  introSectionContent: {
    flex: "2", // Takes more space
    minWidth: "300px", // Minimum width before wrapping
    maxWidth: "70%", // Max width for content
    width: "100%",
  },
  contactFormSide: {
    flex: "1", // Takes less space
    minWidth: "280px", // Minimum width for form
    paddingTop: "0", // Adjust top padding to align with intro text
    width: "100%",
  },
  // Media queries for responsiveness
  "@media (max-width: 768px)": {
    introSectionFlexContainer: {
      flexDirection: "column", // Stack vertically on small screens
      alignItems: "center",
      gap: "20px",
    },
    introSectionContent: {
      maxWidth: "100%",
      width: "100%",
    },
    contactFormSide: {
      maxWidth: "100%",
      width: "100%",
      paddingTop: "0", // Less padding when stacked
    },
  },
};

export default function ServiceOrBlogPage({ params }) {
  // console.log("🚀 Component mounted with slug:", params.slug);

  // const dispatch = useDispatch();
  // const currentBlog = useSelector(selectCurrentBlog);
  // const allBlogs = useSelector(selectBlogs);
  // const blogsLoading = useSelector(selectBlogsLoading);
  // const blogsError = useSelector(selectBlogsError);

  // const [blogNotFound, setBlogNotFound] = useState(false);
  // const [debugInfo, setDebugInfo] = useState(null);
  // const [fallbackType, setFallbackType] = useState(null);

  // // Initialize all hooks at the top level - CRITICAL for preventing hook order issues
  // const [activeTab, setActiveTab] = useState(0);
  // const [hoveredFeature, setHoveredFeature] = useState(null);
  // const [hoveredIndustry, setHoveredIndustry] = useState(null);
  // const [hoveredCard, setHoveredCard] = useState(null);
  // const [openFAQs, setOpenFAQs] = useState({});
  // const [modalOpen, setModalOpen] = useState(false);
  // const [modalButtonText, setModalButtonText] = useState("");

  // // Determine data source consistently
  // const data = useMemo(() => {
  //   // If blogNotFound and fallbackType is set, use the correct fallback
  //   if (blogNotFound) {
  //     if (fallbackType === "consultingPages" && consultingPages[params.slug]) {
  //       return consultingPages[params.slug];
  //     }
  //     if (fallbackType === "skillTrainingData" && skillTrainingData[params.slug]) {
  //       return skillTrainingData[params.slug];
  //     }
  //   }
  //   // Default: try consultingPages, then skillTrainingData
  //   let d = consultingPages[params.slug];
  //   if (!d) d = skillTrainingData[params.slug];
  //   return d;
  // }, [params.slug, blogNotFound, fallbackType]);

  // // Determine if this is a detailed page
  // const simpleKeys = ['title', 'img', 'bannerTitle', 'bannerSubtitle', 'bannerDescription', 'content'];
  // const dataKeys = data ? Object.keys(data) : [];
  // const isDetailedPage = useMemo(() =>
  //   data && dataKeys.some(key => !simpleKeys.includes(key) && data[key] !== null && data[key] !== undefined && (typeof data[key] !== 'object' || Object.keys(data[key]).length > 0))
  // , [data, dataKeys.join(",")]);

  // useEffect(() => {
  //   console.log("🔄 useEffect triggered for slug:", params.slug);

  //   setFallbackType(null);

  //   const fetchBlogData = async () => {
  //     console.log("📡 Dispatching fetchBlogBySlug for:", params.slug);
  //     console.log("📡 API endpoint will be:", `/api/blogs/slug/${params.slug}`);

  //     try {
  //       setBlogNotFound(false);
  //       setDebugInfo(null);

  //       // Test the API endpoint directly first
  //       const directFetch = await fetch(`/api/blogs/slug/${params.slug}`);
  //       console.log("🔍 Direct fetch response status:", directFetch.status);
  //       console.log("🔍 Direct fetch response ok:", directFetch.ok);

  //       if (!directFetch.ok) {
  //         const errorText = await directFetch.text();
  //         console.error("❌ Direct fetch error response:", errorText);
  //         setDebugInfo({
  //           type: 'API_ERROR',
  //           status: directFetch.status,
  //           statusText: directFetch.statusText,
  //           errorText
  //         });
  //       } else {
  //         const directResult = await directFetch.json();
  //         console.log("✅ Direct fetch success:", directResult);
  //         setDebugInfo({
  //           type: 'API_SUCCESS',
  //           data: directResult
  //         });
  //       }

  //       // Now try the Redux dispatch
  //       const result = await dispatch(fetchBlogBySlug(params.slug)).unwrap();
  //       console.log("✅ Redux fetchBlogBySlug success:", result);
  //       setBlogNotFound(false);

  //     } catch (error) {
  //       console.error("❌ Error in fetchBlogData:", error);
  //       console.error("❌ Error details:", {
  //         message: error.message,
  //         name: error.name,
  //         stack: error.stack
  //       });
  //       setBlogNotFound(true);
  //       setDebugInfo(prev => ({
  //         ...prev,
  //         reduxError: {
  //           message: error.message,
  //           name: error.name
  //         }
  //       }));

  //       // Fallback logic: set fallbackType for rendering
  //       if (typeof blogPages !== 'undefined' && blogPages[params.slug]) {
  //         setFallbackType("blogPages");
  //       } else if (consultingPages[params.slug]) {
  //         setFallbackType("consultingPages");
  //       } else if (skillTrainingData[params.slug]) {
  //         setFallbackType("skillTrainingData");
  //       } else {
  //         setFallbackType("notFound");
  //       }
  //     }
  //   };

  //   // Fetch recent blogs for sidebar
  //   console.log("📡 Dispatching fetchBlogs for recent blogs");
  //   dispatch(fetchBlogs({ limit: 10, status: 'published' }));

  //   fetchBlogData();
  // }, [dispatch, params.slug]);

  // // Debug: log all relevant state
  // console.log("📊 Redux State Debug:");
  // console.log("  - currentBlog:", currentBlog);
  // console.log("  - allBlogs count:", allBlogs?.length || 0);
  // console.log("  - blogsLoading:", blogsLoading);
  // console.log("  - blogsError:", blogsError);
  // console.log("  - blogNotFound:", blogNotFound);
  // console.log("  - debugInfo:", debugInfo);
  // console.log("  - fallbackType:", fallbackType);

  // const toggleFAQ = (index) => {
  //   setOpenFAQs((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };

  console.log("🚀 Component mounted with slug:", params.slug);

  const dispatch = useDispatch();
  const currentBlog = useSelector(selectCurrentBlog);
  const allBlogs = useSelector(selectBlogs);
  const blogsLoading = useSelector(selectBlogsLoading);
  const blogsError = useSelector(selectBlogsError);

  const [blogNotFound, setBlogNotFound] = useState(false);
  const [debugInfo, setDebugInfo] = useState(null);
  const [fallbackType, setFallbackType] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize all hooks at the top level - CRITICAL for preventing hook order issues
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [openFAQs, setOpenFAQs] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalButtonText, setModalButtonText] = useState("");

  // Improved fallback logic
  const getFallbackData = (slug) => {
    console.log("🔍 Checking fallback data for slug:", slug);

    // Check blogPages first
    if (typeof blogPages !== "undefined" && blogPages[slug]) {
      console.log("✅ Found in blogPages");
      return { data: blogPages[slug], type: "blogPages" };
    }

    // Then consultingPages
    if (consultingPages && consultingPages[slug]) {
      console.log("✅ Found in consultingPages");
      return { data: consultingPages[slug], type: "consultingPages" };
    }

    // Then skillTrainingData
    if (skillTrainingData && skillTrainingData[slug]) {
      console.log("✅ Found in skillTrainingData");
      return { data: skillTrainingData[slug], type: "skillTrainingData" };
    }

    console.log("❌ Not found in any fallback data");
    return { data: null, type: "notFound" };
  };

  // Determine data source consistently
  const data = useMemo(() => {
    console.log("🔄 Recalculating data with:", {
      blogNotFound,
      fallbackType,
      slug: params.slug,
    });

    // If we have a current blog from Redux and no error, use it
    if (currentBlog && !blogNotFound && currentBlog.slug === params.slug) {
      console.log("✅ Using currentBlog from Redux");
      return currentBlog;
    }

    // Otherwise, check fallback data
    const fallback = getFallbackData(params.slug);
    return fallback.data;
  }, [params.slug, currentBlog, blogNotFound, fallbackType]);

  // Determine if this is a detailed page
  const simpleKeys = [
    "title",
    "img",
    "bannerTitle",
    "bannerSubtitle",
    "bannerDescription",
    "content",
  ];
  const dataKeys = data ? Object.keys(data) : [];
  const isDetailedPage = useMemo(() => {
    if (!data) return false;
    return dataKeys.some(
      (key) =>
        !simpleKeys.includes(key) &&
        data[key] !== null &&
        data[key] !== undefined &&
        (typeof data[key] !== "object" ||
          (data[key] && Object.keys(data[key]).length > 0))
    );
  }, [data, dataKeys]);

  // Main useEffect for fetching blog data
  useEffect(() => {
    console.log("🔄 useEffect triggered for slug:", params.slug);
    console.log("🔄 Current isInitialized:", isInitialized);

    // Reset states for new slug
    setBlogNotFound(false);
    setDebugInfo(null);
    setFallbackType(null);

    const fetchBlogData = async () => {
      console.log("📡 Starting fetchBlogData for:", params.slug);

      try {
        // Test the API endpoint directly first
        console.log("🔍 Testing direct API call...");
        const directFetch = await fetch(`/api/blogs/slug/${params.slug}`);
        console.log("🔍 Direct fetch response status:", directFetch.status);

        if (!directFetch.ok) {
          const errorText = await directFetch.text();
          console.error("❌ Direct fetch error:", errorText);
          throw new Error(`API returned ${directFetch.status}: ${errorText}`);
        }

        const directResult = await directFetch.json();
        console.log("✅ Direct fetch success:", directResult);

        // Now try the Redux dispatch
        console.log("📡 Dispatching Redux action...");
        const result = await dispatch(fetchBlogBySlug(params.slug)).unwrap();
        console.log("✅ Redux fetchBlogBySlug success:", result);

        setBlogNotFound(false);
        setDebugInfo({
          type: "SUCCESS",
          data: result,
          timestamp: new Date().toISOString(),
        });
      } catch (error) {
        console.error("❌ Error in fetchBlogData:", error);
        setBlogNotFound(true);

        // Check fallback data and set appropriate type
        const fallback = getFallbackData(params.slug);
        setFallbackType(fallback.type);

        setDebugInfo({
          type: "ERROR",
          error: {
            message: error.message,
            name: error.name,
          },
          fallbackType: fallback.type,
          timestamp: new Date().toISOString(),
        });

        // If no fallback data found, trigger 404
        if (fallback.type === "notFound") {
          console.log("❌ No fallback data found, will show 404");
        }
      } finally {
        setIsInitialized(true);
      }
    };

    // Always fetch recent blogs for sidebar
    console.log("📡 Dispatching fetchBlogs for recent blogs");
    dispatch(fetchBlogs({ limit: 10, status: "published" }));

    // Execute the main fetch
    fetchBlogData();
  }, [dispatch, params.slug]); // Only depend on dispatch and params.slug

  // Separate useEffect for debugging
  useEffect(() => {
    console.log("📊 Redux State Debug:");
    console.log("  - currentBlog:", currentBlog);
    console.log("  - allBlogs count:", allBlogs?.length || 0);
    console.log("  - blogsLoading:", blogsLoading);
    console.log("  - blogsError:", blogsError);
    console.log("  - blogNotFound:", blogNotFound);
    console.log("  - debugInfo:", debugInfo);
    console.log("  - fallbackType:", fallbackType);
    console.log("  - isInitialized:", isInitialized);
    console.log("  - data:", data ? "Found" : "Not found");
  }, [
    currentBlog,
    allBlogs,
    blogsLoading,
    blogsError,
    blogNotFound,
    debugInfo,
    fallbackType,
    isInitialized,
    data,
  ]);

  const toggleFAQ = (index) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Show loading state while initializing
  if (!isInitialized) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Show 404 if no data found anywhere
  if (!data && fallbackType === "notFound") {
    console.log("❌ Triggering 404 - no data found");
    notFound();
    return null;
  }

  // Enhanced getIcon to handle styling within wrapper
  const getIcon = (iconName, size = 28) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? (
      <span style={styles.iconWrapper}>
        <IconComponent size={size} />
      </span>
    ) : null;
  };

  // Centralized Title Rendering
  const renderSectionTitle = (title) => (
    <h2 className="text-center" style={styles.sectionTitle}>
      {title}
      <span style={styles.sectionTitleAfter}></span>
    </h2>
  );

  // Helper to render paragraphs from text with newlines
  const renderParagraphs = (text, style = {}) => {
    if (!text || typeof text !== "string") return null;
    return text.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-3" style={style}>
        {paragraph.trim()}
      </p>
    ));
  };

  // Helper to render a standard CTA button with modal functionality
  const renderCtaButton = (text, href = "#") => (
    <a
      href={href}
      className="btn"
      style={styles.ctaButton}
      onMouseEnter={(e) =>
        Object.assign(
          e.currentTarget.style,
          styles.ctaButton,
          styles.ctaButtonHover
        )
      }
      onMouseLeave={(e) =>
        Object.assign(e.currentTarget.style, styles.ctaButton)
      }
      onClick={(e) => {
        e.preventDefault();
        setModalButtonText(text || "Learn More");
        setModalOpen(true);
      }}
    >
      {text || "Learn More"}
    </a>
  );

  // Helper to check if an array is non-empty
  const isNonEmptyArray = (arr) => Array.isArray(arr) && arr.length > 0;

  // Helper to check if a string is non-empty
  const isNonEmptyString = (str) =>
    typeof str === "string" && str.trim() !== "";

  // Loading state
  if (blogsLoading && !blogNotFound) {
    console.log("🔄 Rendering loading state");
    return (
      <Layout>
        <div
          className="container py-5"
          style={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-3">Loading blog...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Success: Found blog from Redux
  if (currentBlog && !blogNotFound) {
    const recentBlogsData = allBlogs
      .filter(
        (blog) => blog._id !== currentBlog._id && blog.status === "published"
      )
      .slice(0, 4)
      .map((blog) => ({
        slug: blog.slug || blog._id,
        title: blog.title,
        image: blog.image?.url,
      }));

    console.log("✅ Rendering BlogDetails with currentBlog");
    return (
      <Layout>
        <BlogDetails blog={currentBlog} recentBlogs={recentBlogsData} />
      </Layout>
    );
  }

  // Fallback to static blog data (if available)
  if (
    blogNotFound &&
    fallbackType === "blogPages" &&
    typeof blogPages !== "undefined" &&
    blogPages[params.slug]
  ) {
    console.log("📝 Using static fallback for:", params.slug);
    return (
      <Layout>
        <BlogDetails blog={blogPages[params.slug]} recentBlogs={recentBlogs} />
      </Layout>
    );
  }

  // If loading blogs, show loading state
  if (blogsLoading && !blogNotFound) {
    return (
      <Layout>
        <div className="container py-5">
          <div className="text-center">
            <h2>Blog Not Found</h2>
            <p>
              Sorry, we couldn't find a blog post for{" "}
              <strong>{params.slug}</strong>.
            </p>
            {blogsError && (
              <div className="alert alert-danger mt-3">{blogsError}</div>
            )}
          </div>
        </div>
      </Layout>
    );
  }

  // If blogNotFound and fallbackType is notFound, show notFound
  if (blogNotFound && fallbackType === "notFound") {
    return notFound();
  }

  // If no data found at all, return not found
  if (!data) return notFound();

  console.log(data.img, "this is new data");

  return (
    <Layout>
      <ContactFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        buttonText={modalButtonText}
      />
      {/* Banner Section */}
      <div style={styles.banner}>
  {(data.img || data.image) && (() => {
    const mediaSrc = data.img || data.image;
    const isVideo = mediaSrc.endsWith(".mp4") || mediaSrc.endsWith(".webm");

    return isVideo ? (
      <video
        src={mediaSrc}
        autoPlay
        muted
        loop
        playsInline
        style={{
          ...styles.bannerImage,
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    ) : (
      <img
        src={mediaSrc}
        alt={data.title || "Service Banner"}
        style={styles.bannerImage}
      />
    );
  })()}

  <div style={styles.bannerContent}>
    <h1 className="display-4 fw-bold mb-3" style={{ color: "white" }}>
      {data.bannerTitle || data.title}
    </h1>
    {data.bannerSubtitle && (
      <p className="lead mb-3 fs-5">{data.bannerSubtitle}</p>
    )}
    {data.bannerDescription && (
      <p className="mb-4 fs-5">{data.bannerDescription}</p>
    )}

    {isNonEmptyArray(data.heroFeatures) && (
      <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3 mb-4 fs-5">
        {data.heroFeatures.map((feature, idx) => (
          <li key={idx} className="d-flex align-items-center">
            <Icons.CheckCircle size={20} className="me-2 text-success" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    )}

    {renderCtaButton("Start Your Journey")}
  </div>
</div>

      {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px", width: "100%" }}>
        <div style={{ width: "100%", maxWidth: "500px" }}>
          <ContactForm />
        </div>
      </div> */}
      <div
        className="container"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <div style={styles.introSectionFlexContainer}>
          {/* Intro Text Section (Common for detailed pages) - Left Side */}
          {isDetailedPage && isNonEmptyString(data.introText) && (
            <section style={styles.introSectionContent}>
              <div className="fs-5">{renderParagraphs(data.introText)}</div>
            </section>
          )}

          {/* Contact Form - Right Side */}
          <div style={styles.contactFormSide}>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="container py-5">
        {/* Main container for content */}

        {/* Intro Text Section (Common for detailed pages) */}
        {/* {isDetailedPage && isNonEmptyString(data.introText) && (
          <section style={styles.dynamicSection} className="text-center">
            <div className="fs-5 mx-auto" style={{ maxWidth: "900px" }}>
                {renderParagraphs(data.introText)}
            </div>
          </section>
        )} */}

        {/* Conditional Rendering based on Page Type */}
        {isDetailedPage ? (
          // ===========================================
          // DETAILED PAGE CONTENT (Dynamically Rendered)
          // ===========================================
          <>
            {/* Why Choose Us Section */}
            {data.whyChoose &&
              (isNonEmptyString(data.whyChoose.content) ||
                isNonEmptyString(data.whyChoose.subText) ||
                data.whyChoose.buttonText) && (
                <section
                  style={{
                    ...styles.dynamicSection,
                    ...styles.dynamicSectionBgLight,
                  }}
                  className="text-center"
                >
                  {/* --- MODIFIED: Conditional Title --- */}
                  {(isNonEmptyString(data.whyChoose.content) ||
                    isNonEmptyString(data.whyChoose.subText) ||
                    data.whyChoose.buttonText) &&
                    renderSectionTitle(
                      data.whyChoose.title || "Why Choose Us?"
                    )}
                  <div
                    className="fs-5 mx-auto mb-4"
                    style={{ maxWidth: "900px" }}
                  >
                    {renderParagraphs(data.whyChoose.content)}
                  </div>
                  {data.whyChoose.subTitle && (
                    <h4 className="fw-semibold mt-4 mb-2">
                      {data.whyChoose.subTitle}
                    </h4>
                  )}
                  <div
                    className="fs-5 mx-auto mb-4"
                    style={{ maxWidth: "900px" }}
                  >
                    {renderParagraphs(data.whyChoose.subText)}
                  </div>
                  {renderCtaButton(
                    data.whyChoose.buttonText || "Book a Consultation"
                  )}
                </section>
              )}

            {/* Improvement Areas Section (Generic Info Cards) */}
            {isNonEmptyArray(data.improvementAreas) && (
              <section style={styles.dynamicSection} className="text-center">
                {/* --- MODIFIED: Conditional Title --- */}
                {isNonEmptyArray(data.improvementAreas) &&
                  renderSectionTitle(
                    data.improvementAreas.title || "Key Improvement Areas"
                  )}
                <div className="row g-4 justify-content-center">
                  {data.improvementAreas.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                      <div
                        style={{
                          ...styles.infoCard,
                          ...(hoveredCard === `improve-${index}`
                            ? styles.infoCardHover
                            : {}),
                        }}
                        onMouseEnter={() => setHoveredCard(`improve-${index}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {item.icon && getIcon(item.icon)}
                        {item.img && (
                          <img
                            src={item.img}
                            alt={item.title || `Improvement Area ${index + 1}`}
                            style={styles.infoCardImage}
                          />
                        )}
                        <h5 style={styles.infoCardTitle}>
                          {typeof item === "string" ? item : item.title}
                        </h5>
                        {item.desc && (
                          <p style={styles.infoCardText}>{item.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* About Section with Image */}
            {data.aboutSection &&
              (isNonEmptyString(data.aboutSection.text) ||
                data.aboutSection.image) && (
                <section style={styles.dynamicSection}>
                  {/* --- MODIFIED: Conditional Title --- */}
                  {(isNonEmptyString(data.aboutSection.text) ||
                    data.aboutSection.image) &&
                    data.aboutSection.title &&
                    renderSectionTitle(data.aboutSection.title)}
                  <div className="row g-4 align-items-center">
                    {data.aboutSection.image && (
                      <div className="col-md-6">
                        <img
                          src={data.aboutSection.image}
                          alt={data.aboutSection.title || "About Section Image"}
                          className="img-fluid rounded shadow"
                        />
                      </div>
                    )}
                    {isNonEmptyString(data.aboutSection.text) && (
                      <div
                        className={
                          data.aboutSection.image ? "col-md-6" : "col-12"
                        }
                      >
                        <div className="fs-5">
                          {renderParagraphs(data.aboutSection.text)}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

            {/* Objectives Section (Generic Info Cards with Images) */}
            {data.objectives && isNonEmptyArray(data.objectives.items) && (
              <section style={styles.dynamicSection} className="text-center">
                {/* --- MODIFIED: Conditional Title --- */}
                {isNonEmptyArray(data.objectives.items) &&
                  renderSectionTitle(data.objectives.title || "Our Objectives")}
                <div className="row g-4 justify-content-center">
                  {data.objectives.items.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                      <div
                        style={{
                          ...styles.infoCard,
                          ...(hoveredCard === `obj-${index}`
                            ? styles.infoCardHover
                            : {}),
                        }}
                        onMouseEnter={() => setHoveredCard(`obj-${index}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {item.img && (
                          <img
                            src={item.img}
                            alt={item.title}
                            style={styles.infoCardImage}
                          />
                        )}
                        {item.icon && getIcon(item.icon)}
                        <h5 style={styles.infoCardTitle}>{item.title}</h5>
                        {item.desc && (
                          <p style={styles.infoCardText}>{item.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges Section (Circular Images or Info Cards) */}
            {data.challenges &&
              (isNonEmptyArray(data.challenges.items) ||
                isNonEmptyString(data.challenges.introText) ||
                isNonEmptyString(data.challenges.outroText)) && (
                <section
                  style={{
                    ...styles.dynamicSection,
                    ...styles.dynamicSectionBgLight,
                  }}
                  className="text-center"
                >
                  {/* --- MODIFIED: Conditional Title --- */}
                  {(isNonEmptyArray(data.challenges.items) ||
                    isNonEmptyString(data.challenges.introText) ||
                    isNonEmptyString(data.challenges.outroText)) &&
                    renderSectionTitle(
                      data.challenges.title || "Common Challenges"
                    )}
                  {isNonEmptyString(data.challenges.introText) && (
                    <div
                      className="fs-5 mx-auto mb-4"
                      style={{ maxWidth: "800px" }}
                    >
                      {renderParagraphs(data.challenges.introText)}
                    </div>
                  )}

                  {isNonEmptyArray(data.challenges.items) && (
                    <div className="row g-4 justify-content-center mb-4">
                      {data.challenges.items.map((item, index) => (
                        <div
                          key={index}
                          className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"
                        >
                          {item.img && (
                            <img
                              src={item.img}
                              alt={item.title}
                              className="img-fluid rounded-circle shadow-sm mb-2 mx-auto d-block"
                              style={{
                                width: "150px",
                                height: "150px",
                                objectFit: "cover",
                              }}
                            />
                          )}
                          {item.icon && getIcon(item.icon)}
                          <h6 className="fw-semibold mt-2">{item.title}</h6>
                          {item.desc && (
                            <p style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {isNonEmptyString(data.challenges.outroText) && (
                    <div
                      className="fs-5 text-center mx-auto mt-4"
                      style={{ maxWidth: "800px" }}
                    >
                      {renderParagraphs(data.challenges.outroText)}
                    </div>
                  )}
                </section>
              )}

            {/* Comparison Section (Table + Text) */}
            {data.comparison &&
              (isNonEmptyArray(data.comparison.table) ||
                isNonEmptyString(data.comparison.textContent)) && (
                <section style={styles.dynamicSection}>
                  {/* --- MODIFIED: Conditional Title --- */}
                  {(isNonEmptyArray(data.comparison.table) ||
                    isNonEmptyString(data.comparison.textContent)) &&
                    renderSectionTitle(data.comparison.title || "Comparison")}
                  <div className="row g-4 align-items-start">
                    {isNonEmptyArray(data.comparison.table) && (
                      <div className="col-md-7">
                        <div className="table-responsive">
                          <table style={styles.comparisonTable}>
                            <thead>
                              <tr>
                                {Object.keys(data.comparison.table[0]).map(
                                  (header) => (
                                    <th
                                      key={header}
                                      style={{
                                        ...styles.comparisonTableThTd,
                                        ...styles.comparisonTableTh,
                                      }}
                                    >
                                      {header}
                                    </th>
                                  )
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {data.comparison.table.map((row, rowIndex) => (
                                <tr
                                  key={rowIndex}
                                  style={
                                    rowIndex % 2 !== 0
                                      ? styles.comparisonTableTrOdd
                                      : {}
                                  }
                                >
                                  {Object.values(row).map((cell, cellIndex) => (
                                    <td
                                      key={cellIndex}
                                      style={{
                                        ...styles.comparisonTableThTd,
                                        ...(rowIndex ===
                                        data.comparison.table.length - 1
                                          ? styles.comparisonTableTrLastTd
                                          : {}),
                                        ...(cellIndex === 0
                                          ? styles.comparisonTableTdFirst
                                          : {}),
                                        ...(cellIndex ===
                                        Object.values(row).length - 1
                                          ? styles.comparisonTableTdLast
                                          : {}),
                                      }}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                    {isNonEmptyString(data.comparison.textContent) && (
                      <div
                        className={
                          isNonEmptyArray(data.comparison.table)
                            ? "col-md-5"
                            : "col-12"
                        }
                      >
                        <div className="p-3 fs-5">
                          {renderParagraphs(data.comparison.textContent)}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

            {/* Dojo 1.0 vs 2.0 Comparison Section */}
            {data.comparisonDojo1vs2 &&
              (data.comparisonDojo1vs2.image ||
                isNonEmptyArray(data.comparisonDojo1vs2.points)) && (
                <section style={styles.dynamicSection}>
                  {/* --- MODIFIED: Conditional Title --- */}
                  {(data.comparisonDojo1vs2.image ||
                    isNonEmptyArray(data.comparisonDojo1vs2.points)) &&
                    renderSectionTitle(
                      data.comparisonDojo1vs2.title || "Comparison"
                    )}
                  {data.comparisonDojo1vs2.image && (
                    <div className="text-center mb-4">
                      <img
                        src={data.comparisonDojo1vs2.image}
                        alt="Comparison Chart"
                        className="img-fluid rounded shadow-sm"
                        style={{ maxWidth: "800px" }}
                      />
                    </div>
                  )}
                  {isNonEmptyArray(data.comparisonDojo1vs2.points) && (
                    <div className="table-responsive">
                      <table style={styles.comparisonPointsTable}>
                        <thead>
                          <tr>
                            <th style={styles.comparisonPointsTh}>Feature</th>
                            <th style={styles.comparisonPointsTh}>Dojo 1.0</th>
                            <th style={styles.comparisonPointsTh}>Dojo 2.0</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.comparisonDojo1vs2.points.map(
                            (point, index) => (
                              <tr
                                key={index}
                                style={
                                  index % 2 !== 0
                                    ? styles.comparisonTableTrOdd
                                    : {}
                                }
                              >
                                <td
                                  style={{
                                    ...styles.comparisonPointsTd,
                                    fontWeight: "500",
                                  }}
                                >
                                  {point.feature}
                                </td>
                                <td style={styles.comparisonPointsTd}>
                                  {point.dojo1}
                                </td>
                                <td style={styles.comparisonPointsTd}>
                                  {point.dojo2}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              )}

            {/* Feedback Section (Text + Video) */}
            {data.feedback &&
              (isNonEmptyString(data.feedback.textContent) ||
                data.feedback.videoUrl) && (
                <section
                  style={{
                    ...styles.dynamicSection,
                    ...styles.dynamicSectionBgLight,
                  }}
                >
                  {/* --- MODIFIED: Conditional Title --- */}
                  {(isNonEmptyString(data.feedback.textContent) ||
                    data.feedback.videoUrl) &&
                    renderSectionTitle(
                      data.feedback.title || "Client Feedback"
                    )}
                  <div className="row g-4 align-items-center">
                    {isNonEmptyString(data.feedback.textContent) && (
                      <div
                        className={
                          data.feedback.videoUrl ? "col-md-6" : "col-12"
                        }
                      >
                        <div className="fs-5">
                          {renderParagraphs(data.feedback.textContent)}
                        </div>
                      </div>
                    )}
                    {data.feedback.videoUrl && (
                      <div className="col-md-6">
                        <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
                          <video
                            controls
                            src={data.feedback.videoUrl}
                            className="w-100"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    )}
                    {!data.feedback.videoUrl &&
                      isNonEmptyString(data.feedback.textContent) && ( // Placeholder if only text exists
                        <div className="col-md-6 text-center text-muted fst-italic">
                          <Icons.VideoOff size={50} className="mb-2" />
                          <p>Video testimonial coming soon.</p>
                        </div>
                      )}
                  </div>
                </section>
              )}

            {/* Industries Served / Project Highlights (Grid of Images) */}
            {/* Handles both data.industries (array of strings) and data.industriesServed (object with images array) */}
            {(isNonEmptyArray(data.industries) ||
              (data.industriesServed &&
                isNonEmptyArray(data.industriesServed.images))) && (
              <section style={styles.dynamicSection} className="text-center">
                {/* --- MODIFIED: Conditional Title --- */}
                {(isNonEmptyArray(data.industries) ||
                  (data.industriesServed &&
                    isNonEmptyArray(data.industriesServed.images))) &&
                  renderSectionTitle(
                    data.industriesServed?.title || "Industries We Serve"
                  )}
                <div className="row g-4 justify-content-center">
                  {(data.industriesServed?.images || data.industries).map(
                    (imgSrc, idx) => (
                      <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
                        <div
                          style={{
                            ...styles.industryImageContainer,
                            ...(hoveredIndustry === idx
                              ? styles.industryImageHover
                              : {}),
                          }}
                          onMouseEnter={() => setHoveredIndustry(idx)}
                          onMouseLeave={() => setHoveredIndustry(null)}
                        >
                          <img
                            src={
                              typeof imgSrc === "string"
                                ? imgSrc
                                : imgSrc.url /* Handle object if needed */
                            }
                            className="img-fluid"
                            alt={
                              typeof imgSrc === "string"
                                ? `Industry ${idx + 1}`
                                : imgSrc.alt || `Industry ${idx + 1}`
                            }
                            style={styles.industryImage}
                          />
                          {/* Optional: Add caption here if imgSrc is object with caption */}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

            {/* Core Strengths / Features (Card Layout) */}
            {isNonEmptyArray(data.features) && ( // Check if the features array itself exists and is not empty
              <section style={styles.dynamicSection}>
                {/* --- MODIFIED: Conditional Title --- */}
                {/* Title shown only if features array has items */}
                {isNonEmptyArray(data.features) && (
                  <div className="text-center">
                    {renderSectionTitle(
                      data.featuresTitle || "Our Core Strengths"
                    )}
                  </div> // Assuming title comes from data.featuresTitle or is static
                )}
                <div className="row g-4">
                  {data.features.map((feature, idx) => (
                    <div className="col-md-6 col-lg-4" key={idx}>
                      <div
                        style={{
                          ...styles.featureCard,
                          ...(hoveredFeature === idx
                            ? styles.featureCardHover
                            : {}),
                        }}
                        onMouseEnter={() => setHoveredFeature(idx)}
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                        <div className="d-flex align-items-center mb-3">
                          {feature.icon && getIcon(feature.icon, 24)}{" "}
                          {/* Use the icon wrapper */}
                          <h5 className="fw-semibold mb-0 ms-3">
                            {feature.title}
                          </h5>
                        </div>
                        <div style={styles.featureCardContent}>
                          {" "}
                          {/* Apply indenting style */}
                          <p className="mb-0">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Pillars / Consulting Areas / Key Elements (Tabs Layout) */}
            {isNonEmptyArray(data.pillars) && (
              <section style={styles.dynamicSection}>
                {/* --- MODIFIED: Conditional Title --- */}
                {isNonEmptyArray(data.pillars) && (
                  <div className="text-center">
                    {renderSectionTitle(
                      data.pillars.title || "Consulting Areas"
                    )}
                  </div>
                )}
                <div className="row g-0">
                  {" "}
                  {/* Use g-0 to remove gutters between columns */}
                  <div className="col-lg-3 col-md-4">
                    <div
                      className="list-group h-100"
                      style={styles.pillarsTabContainer}
                    >
                      {data.pillars.map((pillar, index) => (
                        <button
                          key={index}
                          className={`list-group-item list-group-item-action ${
                            activeTab === index ? "active" : ""
                          }`}
                          onClick={() => setActiveTab(index)}
                          style={{
                            ...(activeTab === index
                              ? styles.pillarsTabActive
                              : styles.pillarsTab),
                            // Apply base or active style
                          }}
                        >
                          {pillar.title}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8 d-flex">
                    {/* Render content only if the active tab has content */}
                    {data.pillars[activeTab] &&
                      isNonEmptyString(data.pillars[activeTab].content) && (
                        <div
                          className="w-100 align-self-stretch"
                          style={styles.pillarsContent}
                        >
                          <h4 className="fw-bold mb-3">
                            {data.pillars[activeTab].title}
                          </h4>
                          <div className="fs-6">
                            {" "}
                            {/* Slightly smaller font for content */}
                            {renderParagraphs(data.pillars[activeTab].content)}
                          </div>
                        </div>
                      )}
                    {/* Optional: Placeholder if active tab content is empty */}
                    {!(
                      data.pillars[activeTab] &&
                      isNonEmptyString(data.pillars[activeTab].content)
                    ) && (
                      <div
                        className="w-100 align-self-stretch d-flex align-items-center justify-content-center text-muted"
                        style={styles.pillarsContent}
                      >
                        <p>Select an area to see details.</p>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Certification Section */}
            {data.certification &&
              (isNonEmptyString(data.certification.content) ||
                isNonEmptyArray(data.certification.process) ||
                isNonEmptyString(data.certification.note)) && (
                <section
                  style={{
                    ...styles.dynamicSection,
                    ...styles.certificationSection,
                  }}
                >
                  <div className="container">
                    {/* --- MODIFIED: Conditional Title --- */}
                    {(isNonEmptyString(data.certification.content) ||
                      isNonEmptyArray(data.certification.process) ||
                      isNonEmptyString(data.certification.note)) && (
                      <div className="text-center">
                        {renderSectionTitle(
                          data.certification.title || "Certification"
                        )}
                      </div>
                    )}
                    {isNonEmptyString(data.certification.content) && (
                      <div
                        className="mb-4 fs-5 text-center mx-auto"
                        style={{ maxWidth: "800px" }}
                      >
                        {renderParagraphs(data.certification.content)}
                      </div>
                    )}

                    {isNonEmptyArray(data.certification.process) && (
                      <>
                        <h4 className="mb-4 text-center fw-semibold">
                          {data.certification.subtitle ||
                            "Certification Process"}
                        </h4>
                        <div className="row justify-content-center">
                          <div className="col-md-10">
                            {/* Using ol for semantic ordered list */}
                            <ol className="list-unstyled">
                              {data.certification.process.map((step, idx) => (
                                <li key={idx} style={styles.stepItem}>
                                  <div style={styles.stepNumber}>{idx + 1}</div>
                                  <div>{step}</div>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </>
                    )}

                    {isNonEmptyString(data.certification.note) && (
                      <div className="alert alert-info mt-4 text-center">
                        <p className="mb-0 fw-medium">
                          {data.certification.note}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              )}

            {/* Implementation Process Section (Similar to Certification Steps) */}
            {data.implementationProcess &&
              (data.implementationProcess.image ||
                isNonEmptyArray(data.implementationProcess.steps) ||
                isNonEmptyArray(data.implementationProcess.process)) && (
                <section style={styles.dynamicSection}>
                  {/* --- MODIFIED: Conditional Title --- */}
                  {(data.implementationProcess.image ||
                    isNonEmptyArray(data.implementationProcess.steps) ||
                    isNonEmptyArray(data.implementationProcess.process)) && (
                    <div className="text-center mb-5">
                      {renderSectionTitle(
                        data.implementationProcess.title || "Our Approach"
                      )}
                    </div>
                  )}
                  <div className="row align-items-center g-4">
                    {data.implementationProcess.image && (
                      <div className="col-md-5 text-center">
                        <img
                          src={data.implementationProcess.image}
                          alt="Implementation Process"
                          className="img-fluid rounded shadow-sm"
                        />
                      </div>
                    )}
                    {/* Render steps if they exist */}
                    {isNonEmptyArray(data.implementationProcess.steps) && (
                      <div
                        className={
                          data.implementationProcess.image
                            ? "col-md-7"
                            : "col-12"
                        }
                      >
                        <ol className="list-unstyled">
                          {data.implementationProcess.steps.map((step, idx) => (
                            <li key={idx} style={styles.stepItem}>
                              <div style={styles.stepNumber}>{idx + 1}</div>
                              <div>{step}</div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                    {/* Render process (alternative key) if steps don't exist but process does */}
                    {!isNonEmptyArray(data.implementationProcess.steps) &&
                      isNonEmptyArray(data.implementationProcess.process) && (
                        <div
                          className={
                            data.implementationProcess.image
                              ? "col-md-7"
                              : "col-12"
                          }
                        >
                          <ol className="list-unstyled">
                            {data.implementationProcess.process.map(
                              (step, idx) => (
                                <li key={idx} style={styles.stepItem}>
                                  <div style={styles.stepNumber}>{idx + 1}</div>
                                  <div>{step}</div>
                                </li>
                              )
                            )}
                          </ol>
                        </div>
                      )}
                  </div>
                </section>
              )}

            {/* Case Study Section (Handles single or multiple studies, old and new formats) */}
            {(() => {
              // Create a unified array of studies first to check if there's anything to display
              let studies = [];
              if (
                data.caseStudies &&
                isNonEmptyArray(data.caseStudies.studies)
              ) {
                studies = data.caseStudies.studies;
              } else if (
                data.caseStudy &&
                typeof data.caseStudy === "object" &&
                Object.keys(data.caseStudy).length > 0
              ) {
                // Check if single case study has *some* content
                const cs = data.caseStudy;
                const outcomes = data.outcomes || {};
                if (
                  isNonEmptyString(cs.content) ||
                  isNonEmptyArray(cs.challenges || outcomes.challenges) ||
                  isNonEmptyArray(cs.approach || outcomes.approach) ||
                  isNonEmptyArray(cs.results || outcomes.results)
                ) {
                  studies = [{ ...cs, outcomes }];
                }
              }
              const hasCaseStudies = studies.length > 0;

              return (
                hasCaseStudies && (
                  <section
                    style={{
                      ...styles.dynamicSection,
                      ...styles.caseStudySection,
                    }}
                  >
                    <div className="container">
                      {/* --- MODIFIED: Conditional Title (based on hasCaseStudies) --- */}
                      {hasCaseStudies && (
                        <div className="text-center">
                          {renderSectionTitle(
                            data.caseStudies?.title ||
                              data.caseStudy?.title ||
                              "Case Study"
                          )}
                        </div>
                      )}

                      {/* Render the studies */}
                      {studies.map((study, studyIndex) => {
                        const challenges =
                          study.challenges || study.outcomes?.challenges || [];
                        const approach =
                          study.approach || study.outcomes?.approach || [];
                        const results =
                          study.results || study.outcomes?.results || [];
                        const hasCardContent =
                          isNonEmptyArray(challenges) ||
                          isNonEmptyArray(approach) ||
                          isNonEmptyArray(results);

                        // Render only if the study itself has content (title/company/text or card content)
                        if (
                          isNonEmptyString(study.title) ||
                          isNonEmptyString(study.company) ||
                          isNonEmptyString(study.content) ||
                          hasCardContent
                        ) {
                          return (
                            <div
                              key={studyIndex}
                              className={`mb-5 ${
                                studyIndex < studies.length - 1
                                  ? "border-bottom pb-4"
                                  : ""
                              }`}
                            >
                              {study.title && (
                                <h4 className="mb-1 fw-semibold">
                                  {study.title}
                                </h4>
                              )}
                              {study.company && (
                                <h6 className="text-muted mb-3">
                                  {study.company}
                                </h6>
                              )}
                              {isNonEmptyString(study.content) && (
                                <div className="mb-4 fs-5">
                                  {renderParagraphs(study.content)}
                                </div>
                              )}

                              {hasCardContent && (
                                <div className="row mt-4 g-4">
                                  {/* Challenges */}
                                  {isNonEmptyArray(challenges) && (
                                    <div className="col-md-4">
                                      <div className="card h-100 shadow-sm">
                                        <div className="card-header bg-danger text-white">
                                          <h5 className="mb-0 fw-semibold">
                                            Challenges
                                          </h5>
                                        </div>
                                        <div className="card-body">
                                          <ul className="list-unstyled mb-0">
                                            {challenges.map((item, idx) => (
                                              <li
                                                key={idx}
                                                className="mb-2 d-flex align-items-start"
                                              >
                                                <Icons.XCircle
                                                  size={18}
                                                  className="text-danger flex-shrink-0"
                                                  style={styles.listGroupIcon}
                                                />{" "}
                                                <span>{item}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {/* Approach */}
                                  {isNonEmptyArray(approach) && (
                                    <div className="col-md-4">
                                      <div className="card h-100 shadow-sm">
                                        <div className="card-header bg-primary text-white">
                                          <h5 className="mb-0 fw-semibold">
                                            Approach
                                          </h5>
                                        </div>
                                        <div className="card-body">
                                          {/* Check if approach is text or list */}
                                          {typeof approach === "string" ? (
                                            <p>{approach}</p>
                                          ) : (
                                            <ul className="list-unstyled mb-0">
                                              {approach.map((item, idx) => (
                                                <li
                                                  key={idx}
                                                  className="mb-2 d-flex align-items-start"
                                                >
                                                  <Icons.ArrowRightCircle
                                                    size={18}
                                                    className="text-primary flex-shrink-0"
                                                    style={styles.listGroupIcon}
                                                  />{" "}
                                                  <span>{item}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {/* Results */}
                                  {isNonEmptyArray(results) && (
                                    <div className="col-md-4">
                                      <div className="card h-100 shadow-sm">
                                        <div className="card-header bg-success text-white">
                                          <h5 className="mb-0 fw-semibold">
                                            Results
                                          </h5>
                                        </div>
                                        <div className="card-body">
                                          <ul className="list-unstyled mb-0">
                                            {results.map((item, idx) => (
                                              <li
                                                key={idx}
                                                className="mb-2 d-flex align-items-start"
                                              >
                                                <Icons.CheckCircle
                                                  size={18}
                                                  className="text-success flex-shrink-0"
                                                  style={styles.listGroupIcon}
                                                />{" "}
                                                <span>{item}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        }
                        return null; // Don't render if study has no visible content
                      })}

                      {/* Read More Button (Conditional) */}
                      {data.caseStudies?.readMoreButton && (
                        <div className="text-center mt-4">
                          {renderCtaButton("Read More Case Studies")}
                        </div>
                      )}
                    </div>
                  </section>
                )
              );
            })()}

            {/* Benefits Section (List + CTA) */}
            {data.benefits &&
              (isNonEmptyArray(data.benefits.list) || data.benefits.cta) && (
                <section
                  style={{
                    ...styles.dynamicSection,
                    ...styles.dynamicSectionBgAccent,
                  }}
                >
                  <div className="container">
                    {/* --- MODIFIED: Conditional Title --- */}
                    {(isNonEmptyArray(data.benefits.list) ||
                      data.benefits.cta) &&
                      renderSectionTitle(data.benefits.title || "Benefits")}
                    <div className="row g-4 align-items-center">
                      {isNonEmptyArray(data.benefits.list) && (
                        <div
                          className={data.benefits.cta ? "col-md-7" : "col-12"}
                        >
                          <ul className="list-unstyled row">
                            {data.benefits.list.map((item, index) => (
                              <li
                                key={index}
                                className="mb-2 d-flex align-items-center fs-5 col-sm-6"
                              >
                                <Icons.CheckSquare
                                  size={20}
                                  className="text-success flex-shrink-0"
                                  style={styles.listGroupIcon}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {data.benefits.cta &&
                        (isNonEmptyString(data.benefits.cta.text) ||
                          isNonEmptyString(data.benefits.cta.buttonText)) && (
                          <div className="col-md-5 text-center text-md-start ps-md-5">
                            {isNonEmptyString(data.benefits.cta.text) && (
                              <h3 className="fw-semibold mb-3">
                                {data.benefits.cta.text}
                              </h3>
                            )}
                            {renderCtaButton(
                              data.benefits.cta.buttonText || "Get Started"
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                </section>
              )}

            {/* Visual Tools Section (Grid of Cards with Images) */}
            {data.visualTools &&
              (isNonEmptyArray(data.visualTools.items) ||
                isNonEmptyString(data.visualTools.introText)) && (
                <section style={styles.dynamicSection} className="text-center">
                  {/* --- MODIFIED: Conditional Title --- */}
                  {(isNonEmptyArray(data.visualTools.items) ||
                    isNonEmptyString(data.visualTools.introText)) &&
                    renderSectionTitle(
                      data.visualTools.title || "Visual Tools Examples"
                    )}
                  {isNonEmptyString(data.visualTools.introText) && (
                    <div
                      className="fs-5 mx-auto mb-4"
                      style={{ maxWidth: "800px" }}
                    >
                      {renderParagraphs(data.visualTools.introText)}
                    </div>
                  )}
                  {isNonEmptyArray(data.visualTools.items) && (
                    <div className="row g-4 justify-content-center">
                      {data.visualTools.items.map((tool, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                          <div
                            style={{
                              ...styles.infoCard,
                              ...(hoveredCard === `tool-${index}`
                                ? styles.infoCardHover
                                : {}),
                            }}
                            onMouseEnter={() => setHoveredCard(`tool-${index}`)}
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            {tool.img && (
                              <img
                                src={tool.img}
                                alt={tool.title}
                                style={styles.infoCardImage}
                              />
                            )}
                            {tool.icon && getIcon(tool.icon)}
                            <h5 style={styles.infoCardTitle}>{tool.title}</h5>
                            {tool.desc && (
                              <p style={styles.infoCardText}>{tool.desc}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

            {/* Layout Types Section (Similar to Visual Tools) */}
            {data.layoutTypes && isNonEmptyArray(data.layoutTypes.items) && (
              <section
                style={{
                  ...styles.dynamicSection,
                  ...styles.dynamicSectionBgLight,
                }}
                className="text-center"
              >
                {/* --- MODIFIED: Conditional Title --- */}
                {isNonEmptyArray(data.layoutTypes.items) &&
                  renderSectionTitle(data.layoutTypes.title || "Layout Types")}
                <div className="row g-4 justify-content-center">
                  {data.layoutTypes.items.map((layout, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div
                        style={{
                          ...styles.infoCard,
                          ...(hoveredCard === `layout-${index}`
                            ? styles.infoCardHover
                            : {}),
                        }}
                        onMouseEnter={() => setHoveredCard(`layout-${index}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {layout.img && (
                          <img
                            src={layout.img}
                            alt={layout.title}
                            style={styles.infoCardImage}
                          />
                        )}
                        {layout.icon && getIcon(layout.icon)}
                        <h5 style={styles.infoCardTitle}>{layout.title}</h5>
                        {layout.desc && (
                          <p style={styles.infoCardText}>{layout.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* AGV Types Section (Similar to Visual Tools/Layouts) */}
            {data.agvTypes &&
              (isNonEmptyArray(data.agvTypes.items) ||
                isNonEmptyString(data.agvTypes.introText)) && (
                <section style={styles.dynamicSection} className="text-center">
                  {/* --- MODIFIED: Conditional Title --- */}
                  {(isNonEmptyArray(data.agvTypes.items) ||
                    isNonEmptyString(data.agvTypes.introText)) &&
                    renderSectionTitle(data.agvTypes.title || "Types of AGVs")}
                  {isNonEmptyString(data.agvTypes.introText) && (
                    <div
                      className="fs-5 mx-auto mb-4"
                      style={{ maxWidth: "800px" }}
                    >
                      {renderParagraphs(data.agvTypes.introText)}
                    </div>
                  )}
                  {isNonEmptyArray(data.agvTypes.items) && (
                    <div className="row g-4 justify-content-center">
                      {data.agvTypes.items.map((agv, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                          <div
                            style={{
                              ...styles.infoCard,
                              ...(hoveredCard === `agv-${index}`
                                ? styles.infoCardHover
                                : {}),
                            }}
                            onMouseEnter={() => setHoveredCard(`agv-${index}`)}
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            {agv.img && (
                              <img
                                src={agv.img}
                                alt={agv.title}
                                style={styles.infoCardImage}
                              />
                            )}
                            {agv.icon && getIcon(agv.icon)}
                            <h5 style={styles.infoCardTitle}>{agv.title}</h5>
                            {agv.desc && (
                              <p style={styles.infoCardText}>{agv.desc}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

            {/* AGV Applications Section (Grid of Cards with Icons) */}
            {data.applications && isNonEmptyArray(data.applications.items) && (
              <section
                style={{
                  ...styles.dynamicSection,
                  ...styles.dynamicSectionBgLight,
                }}
                className="text-center"
              >
                {/* --- MODIFIED: Conditional Title --- */}
                {isNonEmptyArray(data.applications.items) &&
                  renderSectionTitle(data.applications.title || "Applications")}
                <div className="row g-4 justify-content-center">
                  {data.applications.items.map((app, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div
                        style={{
                          ...styles.infoCard,
                          ...(hoveredCard === `app-${index}`
                            ? styles.infoCardHover
                            : {}),
                        }}
                        onMouseEnter={() => setHoveredCard(`app-${index}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {app.icon && getIcon(app.icon)}
                        <h5 style={styles.infoCardTitle}>{app.title}</h5>
                        {app.desc && (
                          <p style={styles.infoCardText}>{app.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tools Used / Skills Developed / Tech Components / Use Cases / Safety Services / Audit Types (Simple List Format) */}
            {(() => {
              const toolsData = data.toolsUsed;
              const skillsData = data.skillsDeveloped;
              const techData = data.technologyComponents;
              const useCasesData = data.useCases;
              const safetyData = data.safetyServices;
              const auditData = data.auditTypes;

              const items =
                toolsData?.items ||
                skillsData?.items ||
                techData?.items ||
                useCasesData?.items ||
                safetyData?.items ||
                auditData?.items ||
                [];
              const introText =
                toolsData?.introText ||
                skillsData?.introText ||
                techData?.introText ||
                useCasesData?.introText ||
                safetyData?.introText ||
                auditData?.introText;
              const title =
                toolsData?.title ||
                skillsData?.title ||
                techData?.title ||
                useCasesData?.title ||
                safetyData?.title ||
                auditData?.title ||
                "Key Elements";
              const image = auditData?.image; // Only audit has image in this group currently

              const hasContent =
                isNonEmptyArray(items) ||
                isNonEmptyString(introText) ||
                (auditData && auditData.image);

              return (
                hasContent && (
                  <section
                    style={styles.dynamicSection}
                    className="text-center"
                  >
                    {/* --- MODIFIED: Conditional Title (based on hasContent) --- */}
                    {hasContent && renderSectionTitle(title)}

                    {/* Render image if present (e.g., auditTypes) */}
                    {image && (
                      <img
                        src={image}
                        alt={title}
                        className="img-fluid rounded mb-4 shadow-sm"
                        style={{ maxWidth: "600px" }}
                      />
                    )}

                    {/* Render intro text if present */}
                    {isNonEmptyString(introText) && (
                      <div
                        className="fs-5 mx-auto mb-4"
                        style={{ maxWidth: "800px" }}
                      >
                        {renderParagraphs(introText)}
                      </div>
                    )}

                    {/* Render list based on available data */}
                    {isNonEmptyArray(items) && (
                      <ul style={styles.toolsList}>
                        {items.map((item, index) => (
                          <li key={index} style={styles.toolItem}>
                            {typeof item === "string"
                              ? item
                              : item.title || item.level}{" "}
                            {/* Handle string array or object with title/level */}
                            {item.desc && (
                              <div className="d-block small text-muted mt-1">
                                {item.desc}
                              </div>
                            )}{" "}
                            {/* Optional description */}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                )
              );
            })()}

            {/* Core Concepts Section (Image + List/Cards) */}
            {data.coreConcepts &&
              (data.coreConcepts.image ||
                isNonEmptyArray(data.coreConcepts.items)) && (
                <section
                  style={{
                    ...styles.dynamicSection,
                    ...styles.dynamicSectionBgAccent,
                  }}
                  className="text-center"
                >
                  {/* --- MODIFIED: Conditional Title --- */}
                  {(data.coreConcepts.image ||
                    isNonEmptyArray(data.coreConcepts.items)) &&
                    renderSectionTitle(
                      data.coreConcepts.title || "Core Concepts"
                    )}
                  {data.coreConcepts.image && (
                    <div className="mb-4">
                      <img
                        src={data.coreConcepts.image}
                        alt={data.coreConcepts.title || "Core Concepts Image"}
                        className="img-fluid rounded shadow-sm"
                        style={{ maxWidth: "600px" }}
                      />
                    </div>
                  )}
                  {isNonEmptyArray(data.coreConcepts.items) && (
                    <div className="row g-4 justify-content-center">
                      {data.coreConcepts.items.map((concept, index) => (
                        <div key={index} className="col-md-6">
                          <div
                            style={{ ...styles.infoCard, textAlign: "justify" }}
                          >
                            {concept.icon && getIcon(concept.icon)}
                            <h5 style={styles.infoCardTitle}>
                              {concept.title}
                            </h5>
                            {concept.desc && (
                              <p style={styles.infoCardText}>{concept.desc}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

            {/* Clients Section (Generic Image) */}
            {data.clients &&
              (data.clients.image || isNonEmptyString(data.clients.text)) && (
                <section
                  style={{
                    ...styles.dynamicSection,
                    ...styles.dynamicSectionBgLight,
                  }}
                  className="text-center"
                >
                  {/* --- MODIFIED: Conditional Title --- */}
                  {(data.clients.image ||
                    isNonEmptyString(data.clients.text)) &&
                    renderSectionTitle(data.clients.title || "Our Clients")}
                  <div className="container">
                    {data.clients.image && (
                      <img
                        src={data.clients.image}
                        alt="Client Logos"
                        className="img-fluid"
                        style={{ maxHeight: "1000px", width: "auto" }}
                      />
                    )}
                    {isNonEmptyString(data.clients.text) && (
                      <div className="fs-5 mt-3">
                        {renderParagraphs(data.clients.text)}
                      </div>
                    )}
                  </div>
                </section>
              )}

            {/* FAQ Section */}
            {data.faq && isNonEmptyArray(data.faq.items) && (
              <section style={styles.dynamicSection}>
                {/* --- MODIFIED: Conditional Title --- */}
                {isNonEmptyArray(data.faq.items) && (
                  <div className="text-center">
                    {renderSectionTitle(
                      data.faq.title || "Frequently Asked Questions"
                    )}
                  </div>
                )}
                <div style={styles.faqContainer}>
                  {data.faq.items.map(
                    (faqItem, index) =>
                      // Render FAQ item only if question exists
                      isNonEmptyString(faqItem.question) && (
                        <div key={index} style={styles.faqItem}>
                          <div
                            style={styles.faqQuestion}
                            onClick={() => toggleFAQ(index)}
                          >
                            <span>{faqItem.question}</span>
                            <span style={styles.faqToggle}>
                              {openFAQs[index] ? (
                                <Icons.Minus size={20} />
                              ) : (
                                <Icons.Plus size={20} />
                              )}
                            </span>
                          </div>
                          {openFAQs[index] &&
                            isNonEmptyString(faqItem.answer) && (
                              <div style={styles.faqAnswer}>
                                {renderParagraphs(faqItem.answer)}
                              </div>
                            )}
                        </div>
                      )
                  )}
                </div>
              </section>
            )}
          </>
        ) : (
          // ==================================================
          // SIMPLE CONTENT FOR NON-DETAILED PAGES
          // ==================================================
          <div style={styles.simpleContent}>
            <h2 className="mb-4 fw-bold text-center">{data.title}</h2>
            <div className="mb-4 fs-5">
              {renderParagraphs(
                data.content ||
                  "Detailed information about this service is tailored to specific client needs. Please contact us for more details."
              )}
            </div>

            <div className="text-center mt-5">
              {renderCtaButton("CONTACT US FOR MORE INFORMATION")}
            </div>
          </div>
        )}
      </div>{" "}
      {/* End Main Content Container */}
    </Layout>
  );
}
