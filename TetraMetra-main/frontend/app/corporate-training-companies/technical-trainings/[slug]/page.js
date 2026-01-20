// --- START OF FILE page.js (for Training Pages) ---

"use client";

import { consultingPages, skillTrainingData } from "@/lib/servicesData";
// Removed: import * as styleThemes from '@/lib/styleThemes';
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import { useState, useMemo } from "react";
import * as Icons from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ContactFormModal from "@/components/ContactFormModal";

// --- Theme Definitions (Moved Inside Component Scope) ---
const themes = {
  // Theme 1: Professional Blue/Orange
  themeBlueOrange: {
    name: "blueOrange",
    primary: "#005f73", // Dark Teal Blue
    secondary: "#ff7b00", // Vibrant Orange
    accentLight: "#e0f7fa", // Very Light Cyan
    accentDark: "#003440", // Darker Blue/Teal
    textPrimary: "#212529",
    textSecondary: "#495057",
    bgLight: "#f8f9fa",
    bgAccent: "#e0f7fa",
    bannerBg: "#004c5a",
    cardRadius: "8px",
    buttonPadding: "0.85rem 2.2rem",
    hoverEffect: {
      transform: "translateY(-5px)",
      shadow: "0 10px 20px rgba(0, 95, 115, 0.28)",
    },
    iconWrapperBg: "rgba(0, 95, 115, 0.1)",
    underlineColor: "#ff7b00",
    titleFontWeight: "700", // Default font weight for titles
  },
  // Theme 2: Modern Green/Gray
  themeGreenGray: {
    name: "greenGray",
    primary: "#2d6a4f", // Forest Green
    secondary: "#808080", // Medium Gray
    accentLight: "#edf7f2", // Very Light Green
    accentDark: "#1b4332", // Darker Green
    textPrimary: "#343a40",
    textSecondary: "#5a6268",
    bgLight: "#fdfdfd",
    bgAccent: "#edf7f2",
    bannerBg: "#1b4332",
    cardRadius: "12px",
    buttonPadding: "0.9rem 2.4rem",
    hoverEffect: {
      transform: "scale(1.03)",
      shadow: "0 8px 18px rgba(45, 106, 79, 0.2)",
    },
    iconWrapperBg: "rgba(45, 106, 79, 0.1)",
    underlineColor: "#2d6a4f",
    titleFontWeight: "bold", // Different weight example
  },
  // Theme 3: Energetic Purple/Yellow
  themePurpleYellow: {
    name: "purpleYellow",
    primary: "#6a0dad", // Deep Purple
    secondary: "#ffdd00", // Bright Yellow (Use carefully for text backgrounds)
    accentLight: "#f3e5f5", // Very Light Purple
    accentDark: "#4a0072", // Darker Purple
    textPrimary: "#333333",
    textSecondary: "#555555",
    bgLight: "#fafafa",
    bgAccent: "#f3e5f5",
    bannerBg: "#4a0072",
    cardRadius: "6px",
    buttonPadding: "0.8rem 2rem",
    hoverEffect: {
      transform: "rotate(1deg) translateY(-4px)",
      shadow: "0 6px 15px rgba(106, 13, 173, 0.25)",
    },
    iconWrapperBg: "rgba(106, 13, 173, 0.1)",
    underlineColor: "#6a0dad",
    titleFontWeight: "600", // Semi-bold example
  },
  // Theme 4: Minimalist Blue/Gray
  themeMinimalist: {
    name: "minimalist",
    primary: "#0077b6", // Cerulean Blue
    secondary: "#adb5bd", // Light Gray
    accentLight: "#f1f3f5", // Very light gray/blue tint
    accentDark: "#023e8a", // Darker Blue
    textPrimary: "#111",
    textSecondary: "#444",
    bgLight: "#ffffff",
    bgAccent: "#f1f3f5",
    bannerBg: "#03045e", // Very Dark Blue
    cardRadius: "4px", // Sharp corners
    buttonPadding: "0.9rem 2.5rem",
    hoverEffect: {
      transform: "translateY(-4px)",
      shadow: "0 8px 12px rgba(0, 119, 182, 0.1)", // Subtle blue shadow
    },
    iconWrapperBg: "rgba(0, 119, 182, 0.08)",
    underlineColor: "#0077b6",
    titleFontWeight: "700",
  },
  // Default theme if slug doesn't match or theme key is missing
  defaultTheme: {
    name: "default",
    primary: "#005f73",
    secondary: "#ff7b00",
    accentLight: "#e0f7fa",
    accentDark: "#003440",
    textPrimary: "#212529",
    textSecondary: "#495057",
    bgLight: "#f8f9fa",
    bgAccent: "#e0f7fa",
    bannerBg: "#004c5a",
    cardRadius: "8px",
    buttonPadding: "0.85rem 2.2rem",
    hoverEffect: {
      transform: "translateY(-5px)",
      shadow: "0 10px 20px rgba(0, 95, 115, 0.15)",
    },
    iconWrapperBg: "rgba(0, 95, 115, 0.1)",
    underlineColor: "#ff7b00",
    titleFontWeight: "700",
  },

  introSectionFlexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center", // ⬅️ vertical centering
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  },
  introSectionContent: {
    flex: 2,
    minWidth: "300px",
    maxWidth: "65%",
    width: "100%",
  },
  contactFormSide: {
    flex: 1,
    minWidth: "280px",
    maxWidth: "35%",
    width: "100%",
  },
  "@media (max-width: 768px)": {
    introSectionFlexContainer: {
      flexDirection: "column",
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
    },
  },
};
// --- End of Theme Definitions ---

export default function TrainingPage({ params }) {
  let data = consultingPages[params.slug];
  if (!data) {
    data = skillTrainingData[params.slug];
    if (!data) return notFound();
  }

  // --- Determine Current Theme ---
  const currentTheme = useMemo(() => {
    const themeName = data.theme || "defaultTheme";
    return themes[themeName] || themes.defaultTheme;
  }, [data.theme]);

  // --- State for Hover Effects ---
  const [hoverStates, setHoverStates] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalButtonText, setModalButtonText] = useState("");

  // --- Helper Functions ---
  const isNonEmptyArray = (arr) => Array.isArray(arr) && arr.length > 0;
  const isNonEmptyString = (str) =>
    typeof str === "string" && str.trim() !== "";
  // --- End Helper Functions ---

  // --- Dynamic Styles Function (Uses currentTheme) ---
  const dynamicStyles = useMemo(
    () => ({
      // --- Banner Styles ---
      banner: {
        position: "relative",
        minHeight: "100vh",
        height: "auto",
        overflow: "hidden",
        // backgroundColor: currentTheme.bannerBg, // Use theme color
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
        color: "white",
        marginBottom: "50px",
      },
      bannerImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: "0.9",
        zIndex: 1,
      },
      bannerContent: {
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        width: "90%",
        maxWidth: "1000px",
        padding: "30px",
        backgroundColor: "rgba(0, 20, 40, 0.45)", // Keep overlay consistent or theme it
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgb(0, 0, 0)",
      },
      bannerTitle: {
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "white",
        fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
        textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
      },
      bannerSubtitle: {
        fontSize: "clamp(1rem, 3vw, 1.3rem)",
        marginBottom: "1rem",
        color: "rgba(255,255,255,0.9)",
        fontWeight: 300,
      },
      bannerDescription: {
        fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
        marginBottom: "1.5rem",
        color: "rgba(255,255,255,0.95)",
        lineHeight: 1.6,
        fontWeight: 400,
      },
      // --- Section Styles ---
      sectionTitle: {
        fontWeight: currentTheme.titleFontWeight || "700", // Use theme weight
        marginBottom: "3rem",
        position: "relative",
        display: "inline-block",
        paddingBottom: "12px",
        color: currentTheme.accentDark || "#002244", // Use theme color
        fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
        textAlign: "center",
        width: "100%",
      },
      sectionTitleAfter: {
        content: "''",
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100px",
        height: "4px",
        backgroundColor: currentTheme.underlineColor || currentTheme.primary, // Use theme color
        borderRadius: "2px",
      },
      dynamicSection: { padding: "3rem 0", marginBottom: "2rem" },
      dynamicSectionBgLight: {
        backgroundColor: currentTheme.bgLight || "#f9fafb", // Use theme color
        borderRadius: "12px",
        padding: "4rem 2rem",
        marginBottom: "2rem",
      },
      dynamicSectionBgAccent: {
        backgroundColor: currentTheme.bgAccent || "#e8f0f8", // Use theme color
        borderRadius: "12px",
        padding: "4rem 2rem",
        marginBottom: "2rem",
      },
      // --- Card Styles ---
      cardBase: {
        transition: "all 0.35s ease",
        backgroundColor: "#ffffff",
        borderRadius: currentTheme.cardRadius || "8px", // Use theme radius
        height: "100%",
        border: "1px solid #e0e7ef",
        boxShadow: "0 4px 10px rgba(0, 34, 68, 0.06)",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: "2rem",
      },
      cardTitle: {
        fontWeight: "600",
        marginBottom: "0.75rem",
        fontSize: "1.15rem",
        color: currentTheme.accentDark || "#002244", // Use theme color
        marginTop: "1rem",
      },
      cardDescription: {
        fontSize: "0.98rem",
        color: currentTheme.textSecondary || "#4a5568", // Use theme color
        lineHeight: 1.6,
        flexGrow: 1,
      },
      iconWrapper: {
        backgroundColor: currentTheme.iconWrapperBg || "rgba(0, 34, 68, 0.08)", // Use theme color
        borderRadius: "50%",
        padding: "1rem",
        display: "inline-flex",
        marginBottom: "1rem",
        color: currentTheme.primary, // Use theme color
        flexShrink: 0,
      },
      // --- List Styles ---
      listGroupIcon: {
        marginRight: "0.8rem",
        marginTop: "0.1rem",
        flexShrink: 0,
        color: currentTheme.primary, // Use theme color
        width: "20px",
        height: "20px",
      },
      listStyleBase: {
        listStyle: "none",
        paddingLeft: 0,
        maxWidth: "850px",
        margin: "1.5rem auto",
        textAlign: "justify",
      },
      listItemBase: {
        marginBottom: "0.8rem",
        display: "flex",
        alignItems: "flex-start",
        fontSize: "1.05rem",
        color: currentTheme.textPrimary || "#334155", // Use theme color
      },
      audienceList: {},
      audienceListItem: {},
      audienceColumns: { columns: 2, columnGap: "2.5rem" },
      courseModulesList: {},
      courseModuleItem: {
        paddingLeft: "1.8rem",
        position: "relative",
        borderLeft: `3px solid ${currentTheme.secondary || "#d1e0ec"}`, // Use theme color
        paddingBottom: "0.8rem",
      },
      courseModuleItemBefore: {
        content: "''",
        position: "absolute",
        left: "-7px",
        top: "8px",
        width: "10px",
        height: "10px",
        backgroundColor: currentTheme.accentDark || "#002244", // Use theme color
        borderRadius: "50%",
      },
      methodologyList: {},
      methodologyListItem: {},
      // --- Other Styles ---
      stepItem: {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "1.8rem",
        fontSize: "1.05rem",
      },
      stepNumber: {
        backgroundColor: currentTheme.accentDark || "#002244", // Use theme color
        color: "white",
        minWidth: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "1.2rem",
        flexShrink: "0",
        fontWeight: "bold",
        fontSize: "1.1rem",
      },
      prerequisiteNote: {
        fontStyle: "italic",
        color: currentTheme.textSecondary || "#4a5568", // Use theme color
        marginTop: "1.5rem",
        display: "block",
        textAlign: "center",
        fontSize: "0.95rem",
      },
      ctaButton: {
        backgroundColor: currentTheme.primary, // Use theme color
        border: "none",
        padding: currentTheme.buttonPadding || "0.85rem 2.2rem", // Use theme padding
        borderRadius: "50px",
        fontWeight: "600",
        transition: "all 0.3s ease",
        color: "white",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        display: "inline-block",
        textDecoration: "none",
        fontSize: "0.95rem",
        boxShadow: `0 4px 10px ${currentTheme.primary}55`, // Shadow using primary color with alpha
      },
      // Form Styles
      formSection: {
        backgroundColor: currentTheme.bgAccent || "#f0f4f8", // Use theme color
        padding: "3rem 1.5rem",
        borderRadius: "12px",
        marginTop: "2rem",
      },
      formInput: {
        marginBottom: "1.5rem",
        padding: "0.9rem 1.2rem",
        border: "1px solid #cbd5e1",
        borderRadius: "6px",
        width: "100%",
        fontSize: "1rem",
      },
      formTextarea: {
        marginBottom: "1.5rem",
        padding: "0.9rem 1.2rem",
        border: "1px solid #cbd5e1",
        borderRadius: "6px",
        width: "100%",
        fontSize: "1rem",
        minHeight: "120px",
      },
      formLabel: {
        display: "block",
        marginBottom: "0.5rem",
        fontWeight: "500",
        color: currentTheme.textPrimary || "#334155", // Use theme color
      },
    }),
    [currentTheme]
  ); // End of useMemo for dynamicStyles

  // --- Helper Functions using dynamicStyles ---
  const getIcon = (iconName, size = 28) => {
    const IconComponent = Icons[iconName];
    if (!IconComponent) return <Icons.HelpCircle size={size} />;
    return (
      <span style={dynamicStyles.iconWrapper}>
        {" "}
        {/* Apply themed style */}
        <IconComponent size={size} />
      </span>
    );
  };

  const renderSectionTitle = (title) => (
    <h2 style={dynamicStyles.sectionTitle}>
      {" "}
      {/* Apply themed style */}
      {title}
      <span style={dynamicStyles.sectionTitleAfter}></span>{" "}
      {/* Apply themed style */}
    </h2>
  );

  const renderParagraphs = (text, style = {}) => {
    if (!text) return null;
    const paragraphs = Array.isArray(text)
      ? text.filter((p) => isNonEmptyString(p))
      : isNonEmptyString(text)
      ? text.split("\n")
      : [];
    if (paragraphs.length === 0) return null; // Return null if no valid paragraphs
    // Default color from theme's text secondary, unless overridden
    const baseStyle = {
      lineHeight: 1.7,
      color: style.color || currentTheme.textSecondary || "#4a5568",
    };
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-3" style={{ ...baseStyle, ...style }}>
        {paragraph.trim()}
      </p>
    ));
  };

  // Hover Handler for Cards
  const handleMouseEnter = (key) => {
    setHoverStates((prev) => ({ ...prev, [key]: true }));
  };
  const handleMouseLeave = (key) => {
    setHoverStates((prev) => ({ ...prev, [key]: false }));
  };

  // CTA Button with theme-based hover and modal trigger
  const renderCtaButton = (text, href = "#") => {
    const key = `cta-${text?.replace(/\s+/g, "-") || Math.random()}`; // Unique key for hover state
    const isHovered = hoverStates[key];
    const baseButtonStyle = dynamicStyles.ctaButton;
    // Define hover style changes based on theme's hoverEffect object
    const hoverButtonStyle = {
      backgroundColor: currentTheme.accentDark || "#003440", // Fallback darker color
      transform: currentTheme.hoverEffect?.transform || "translateY(-3px)", // Use effect or default
      boxShadow:
        currentTheme.hoverEffect?.shadow ||
        `0 7px 18px ${currentTheme.primary}77`, // Use effect or default
    };

    return (
      <a
        href={href}
        className="btn"
        style={
          isHovered
            ? { ...baseButtonStyle, ...hoverButtonStyle }
            : baseButtonStyle
        }
        onMouseEnter={() => handleMouseEnter(key)}
        onMouseLeave={() => handleMouseLeave(key)}
        onClick={(e) => {
          e.preventDefault();
          setModalButtonText(text || "Learn More");
          setModalOpen(true);
        }}
      >
        {text || "Learn More"}
      </a>
    );
  };

  // --- Component Rendering Functions ---

  const renderBanner = () => (
    // Banner usually always shows, no major content check needed inside, but the data itself is checked initially
    <div style={dynamicStyles.banner}>
      {(data.img || data.image) && (
        <img
          src={data.img || data.image}
          style={dynamicStyles.bannerImage}
          alt={data.title || "Training Banner"}
        />
      )}
      <div style={dynamicStyles.bannerContent}>
        {data.bannerTitle && (
          <h1 style={dynamicStyles.bannerTitle}>{data.bannerTitle}</h1>
        )}
        {data.bannerSubtitle && (
          <p style={dynamicStyles.bannerSubtitle}>{data.bannerSubtitle}</p>
        )}
        {/* Check if bannerDescription has renderable content */}
        {renderParagraphs(data.bannerDescription, {
          color: "rgba(255,255,255,0.95)",
        }) && (
          <div style={dynamicStyles.bannerDescription}>
            {renderParagraphs(data.bannerDescription, {
              color: "rgba(255,255,255,0.95)",
            })}
          </div>
        )}
        {renderCtaButton(
          data.ctaButtonText || "Enroll Now / Learn More",
          data.ctaButtonLink
        )}
      </div>
    </div>
  );

  // MODIFIED: Render Intro only if introText has content
  const renderIntro = () => {
    const introContent = renderParagraphs(data.introText);
    return (
      introContent && (
        <section style={dynamicStyles.dynamicSection} className="text-center">
          <div className="fs-5 mx-auto" style={{ maxWidth: "900px" }}>
            {introContent}
          </div>
        </section>
      )
    );
  };

  // MODIFIED: Render WhyChoose section only if it has content, and title only if content exists
  const renderWhyChoose = () => {
    const whyChooseData = data.whyChoose;
    if (!whyChooseData) return null;

    const hasContent = renderParagraphs(whyChooseData.content);
    const hasSubText = renderParagraphs(whyChooseData.subText);
    const hasButton =
      whyChooseData.button && isNonEmptyString(whyChooseData.button.title);

    if (!hasContent && !hasSubText && !hasButton) return null; // Don't render section if totally empty

    return (
      <section
        style={{
          ...dynamicStyles.dynamicSection,
          ...dynamicStyles.dynamicSectionBgLight,
        }}
        className="text-center"
      >
        {/* --- MODIFIED: Conditional Title --- */}
        {(hasContent || hasSubText || hasButton) &&
          renderSectionTitle(
            whyChooseData.title || "Why Choose This Training?"
          )}

        {hasContent && (
          <div className="fs-5 mx-auto mb-4" style={{ maxWidth: "900px" }}>
            {hasContent}
          </div>
        )}

        {whyChooseData.subTitle && (
          <h4
            className="fw-semibold mt-4 mb-2"
            style={{ color: dynamicStyles.cardTitle.color }}
          >
            {whyChooseData.subTitle}
          </h4>
        )}

        {hasSubText && (
          <div className="fs-5 mx-auto mb-4" style={{ maxWidth: "900px" }}>
            {hasSubText}
          </div>
        )}

        {hasButton &&
          renderCtaButton(
            whyChooseData.button.title,
            whyChooseData.button.link
          )}
      </section>
    );
  };

  // Generic Card Renderer (Uses dynamicStyles and hover state)
  const renderCard = (item, index, type) => {
    // Ensure item has at least a title or description to render
    const cardTitle = item.title || item.level || item.phase || item.step;
    const cardDescriptionContent = renderParagraphs(
      item.description || item.desc || item.content
    );
    if (!isNonEmptyString(cardTitle) && !cardDescriptionContent) return null; // Don't render empty cards

    const key = `${type}-${index}`;
    const isHovered = hoverStates[key];
    // Apply hover effect styles directly if hovered
    const cardStyle = {
      ...dynamicStyles.cardBase,
      ...(isHovered
        ? {
            transform: currentTheme.hoverEffect?.transform, // Use optional chaining
            boxShadow: currentTheme.hoverEffect?.shadow,
          }
        : {}),
    };

    return (
      <div key={key} className="col-lg-4 col-md-6 mb-4">
        <div
          style={cardStyle}
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={() => handleMouseLeave(key)}
        >
          {item.icon && getIcon(item.icon)}
          {isNonEmptyString(cardTitle) && (
            <h5 style={dynamicStyles.cardTitle}>{cardTitle}</h5>
          )}
          {cardDescriptionContent && (
            <div style={dynamicStyles.cardDescription}>
              {cardDescriptionContent}
            </div>
          )}
        </div>
      </div>
    );
  };

  // MODIFIED: Render Pillars section only if it has content, and title only if content exists
  const renderPillars = () => {
    if (!data.pillars || !Array.isArray(data.pillars)) return null;

    const titlePillar = data.pillars.find((p) => p.isSectionTitle);
    const imagePillar = data.pillars.find((p) => p.isImage);
    const cardPillars = data.pillars.filter(
      (p) => !p.isSectionTitle && !p.isImage
    );
    const renderedCards = cardPillars
      .map((pillar, index) => renderCard(pillar, index, "pillar"))
      .filter(Boolean); // Filter out null results from renderCard

    if (renderedCards.length === 0 && !imagePillar) return null; // Don't render if no cards and no image

    return (
      <section style={dynamicStyles.dynamicSection}>
        {/* --- MODIFIED: Conditional Title --- */}
        {(imagePillar || renderedCards.length > 0) &&
          titlePillar &&
          renderSectionTitle(titlePillar.title)}

        {imagePillar && (
          <div className="mb-5 text-center">
            <img
              src={imagePillar.image}
              alt={titlePillar?.title || "Pillars"}
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "700px" }}
            />
          </div>
        )}
        {renderedCards.length > 0 && (
          <div className="row g-4 justify-content-center">{renderedCards}</div>
        )}
      </section>
    );
  };

  // MODIFIED: Render Key Concepts section only if it has content, and title only if content exists
  const renderKeyConcepts = (dataKey, defaultTitle) => {
    const sectionData = data[dataKey];
    if (!sectionData) return null;

    let itemsToRender = sectionData.items || sectionData.technicalPillars || [];
    if (dataKey === "wcmPillars" && sectionData.managerialPillars) {
      itemsToRender = [...itemsToRender, ...sectionData.managerialPillars];
    }

    const descriptionContent = renderParagraphs(sectionData.description);
    const renderedCards = isNonEmptyArray(itemsToRender)
      ? itemsToRender
          .map((item, index) => renderCard(item, index, dataKey))
          .filter(Boolean) // Filter out null cards
      : [];

    // Don't render section if no image, no description, and no cards
    if (!sectionData.image && !descriptionContent && renderedCards.length === 0)
      return null;

    return (
      <section
        style={{
          ...dynamicStyles.dynamicSection,
          ...dynamicStyles.dynamicSectionBgAccent,
        }}
      >
        {/* --- MODIFIED: Conditional Title --- */}
        {(sectionData.image ||
          descriptionContent ||
          renderedCards.length > 0) &&
          renderSectionTitle(sectionData.title || defaultTitle)}

        {sectionData.image && (
          <div className="mb-5 text-center">
            <img
              src={sectionData.image}
              alt={sectionData.title || defaultTitle}
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "700px" }}
            />
          </div>
        )}
        {descriptionContent && (
          <div
            className="fs-5 text-center mx-auto mb-5"
            style={{ maxWidth: "900px" }}
          >
            {descriptionContent}
          </div>
        )}
        {renderedCards.length > 0 && (
          <div className="row g-4 justify-content-center">{renderedCards}</div>
        )}
      </section>
    );
  };

  // MODIFIED: Render Process Steps section only if it has content, and title only if content exists
  const renderProcessSteps = () => {
    const sectionData = data.processSteps;
    const steps = sectionData?.steps;
    if (!isNonEmptyArray(steps) && !sectionData?.image) return null; // Don't render if no steps and no image

    const validSteps = steps?.filter(
      (step) =>
        isNonEmptyString(step.title) || renderParagraphs(step.description)
    ); // Filter steps that have actual content
    if (validSteps?.length === 0 && !sectionData?.image) return null; // Don't render if no valid steps and no image

    return (
      <section
        style={{
          ...dynamicStyles.dynamicSection,
          ...dynamicStyles.dynamicSectionBgLight,
        }}
      >
        {/* --- MODIFIED: Conditional Title --- */}
        {(sectionData.image || validSteps?.length > 0) &&
          renderSectionTitle(sectionData.title || "Our Approach")}

        {sectionData.image && (
          <div className="mb-5 text-center">
            <img
              src={sectionData.image}
              alt={sectionData.title || "Process Steps"}
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "600px" }}
            />
          </div>
        )}
        {validSteps?.length > 0 && (
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <ol className="list-unstyled">
                {validSteps.map((step, idx) => {
                  const stepDescription = renderParagraphs(step.description, {
                    marginBottom: "0",
                  });
                  return (
                    // Render list item only if it has content
                    (isNonEmptyString(step.title) || stepDescription) && (
                      <li key={idx} style={dynamicStyles.stepItem}>
                        <div style={dynamicStyles.stepNumber}>{idx + 1}</div>
                        <div>
                          {isNonEmptyString(step.title) && (
                            <h6
                              className="fw-semibold mb-1"
                              style={{ color: currentTheme.textPrimary }}
                            >
                              {step.title}
                            </h6>
                          )}
                          {stepDescription}
                        </div>
                      </li>
                    )
                  );
                })}
              </ol>
            </div>
          </div>
        )}
      </section>
    );
  };

  // MODIFIED: Render Features section only if it has content, and title only if content exists
  const renderFeatures = () => {
    if (!isNonEmptyArray(data.features)) return null;
    const renderedCards = data.features
      .map((feature, idx) => renderCard(feature, idx, "feature"))
      .filter(Boolean);
    if (renderedCards.length === 0) return null; // Don't render if no valid cards

    return (
      <section style={dynamicStyles.dynamicSection}>
        {/* --- MODIFIED: Conditional Title --- */}
        {renderedCards.length > 0 &&
          renderSectionTitle(data.features.title || "Key Benefits")}
        <div className="row g-4 justify-content-center">{renderedCards}</div>
      </section>
    );
  };

  // MODIFIED: Render Target Audience section only if it has content, and title only if content exists
  const renderTargetAudience = () => {
    const audienceData = data.targetAudience;
    if (!audienceData) return null;

    const introContent = renderParagraphs(audienceData.introText);
    const audienceListItems = audienceData.list?.filter(isNonEmptyString);
    const hasList = isNonEmptyArray(audienceListItems);
    const hasPrerequisite = isNonEmptyString(audienceData.prerequisite);

    if (!introContent && !hasList && !hasPrerequisite) return null; // Don't render if section is empty

    return (
      <section
        style={{
          ...dynamicStyles.dynamicSection,
          ...dynamicStyles.dynamicSectionBgAccent,
        }}
      >
        {/* --- MODIFIED: Conditional Title --- */}
        {(introContent || hasList || hasPrerequisite) &&
          renderSectionTitle(audienceData.title || "Who Should Attend?")}

        {introContent && (
          <div
            className="fs-5 text-center mx-auto mb-4"
            style={{ maxWidth: "800px" }}
          >
            {introContent}
          </div>
        )}

        {hasList && (
          <ul
            style={{
              ...dynamicStyles.listStyleBase,
              ...dynamicStyles.audienceList,
              ...(audienceListItems.length > 6
                ? dynamicStyles.audienceColumns
                : {}),
            }}
          >
            {audienceListItems.map((item, index) => (
              <li
                key={index}
                style={{
                  ...dynamicStyles.listItemBase,
                  ...dynamicStyles.audienceListItem,
                }}
              >
                <Icons.UserCheck
                  size={20}
                  style={dynamicStyles.listGroupIcon}
                />
                <span style={{ color: dynamicStyles.listItemBase.color }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
        {hasPrerequisite && (
          <span style={dynamicStyles.prerequisiteNote}>
            {audienceData.prerequisite}
          </span>
        )}
      </section>
    );
  };

  // MODIFIED: Render Course Content section only if it has content, and title only if content exists
  const renderCourseContent = () => {
    const contentData = data.courseContent;
    if (!contentData) return null;

    const introContent = renderParagraphs(contentData.introText);
    const moduleItems = contentData.modules?.filter(isNonEmptyString);
    const hasModules = isNonEmptyArray(moduleItems);
    const hasImage = contentData.image;

    if (!introContent && !hasModules && !hasImage) return null; // Don't render if empty

    return (
      <section style={dynamicStyles.dynamicSection}>
        {/* --- MODIFIED: Conditional Title --- */}
        {(introContent || hasModules || hasImage) &&
          renderSectionTitle(contentData.title || "Course Outline")}

        {introContent && (
          <div
            className="fs-5 text-center mx-auto mb-4"
            style={{ maxWidth: "800px" }}
          >
            {introContent}
          </div>
        )}
        {hasImage && (
          <div className="mb-4 text-center">
            <img
              src={contentData.image}
              alt="Course Content Visual"
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "600px", margin: "auto" }}
            />
          </div>
        )}
        {hasModules && (
          <ul
            style={{
              ...dynamicStyles.listStyleBase,
              ...dynamicStyles.courseModulesList,
            }}
          >
            {moduleItems.map((moduleText, index) => (
              <li
                key={index}
                style={{
                  ...dynamicStyles.listItemBase,
                  ...dynamicStyles.courseModuleItem,
                }}
              >
                <span style={dynamicStyles.courseModuleItemBefore}></span>
                <span style={{ color: dynamicStyles.listItemBase.color }}>
                  {moduleText}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  };

  // MODIFIED: Render Methodology section only if it has content, and title only if content exists
  const renderMethodology = () => {
    const methodologyData = data.methodology;
    if (!methodologyData) return null;

    const introContent = renderParagraphs(methodologyData.introText);
    const pointItems = methodologyData.points?.filter(isNonEmptyString);
    const hasPoints = isNonEmptyArray(pointItems);
    const hasImage = methodologyData.image;

    if (!introContent && !hasPoints && !hasImage) return null; // Don't render if empty

    return (
      <section
        style={{
          ...dynamicStyles.dynamicSection,
          ...dynamicStyles.dynamicSectionBgLight,
        }}
      >
        <div className="row g-4 align-items-center">
          <div className={hasImage ? "col-lg-7" : "col-12"}>
            {/* --- MODIFIED: Conditional Title --- */}
            {(introContent || hasPoints) &&
              renderSectionTitle(
                methodologyData.title || "Training Methodology"
              )}

            {introContent && <div className="fs-5 mb-4">{introContent}</div>}
            {hasPoints && (
              <ul
                style={{
                  ...dynamicStyles.listStyleBase,
                  ...dynamicStyles.methodologyList,
                }}
              >
                {pointItems.map((point, index) => (
                  <li
                    key={index}
                    style={{
                      ...dynamicStyles.listItemBase,
                      ...dynamicStyles.methodologyListItem,
                    }}
                  >
                    <Icons.CheckCircle
                      size={20}
                      style={dynamicStyles.listGroupIcon}
                    />
                    <span style={{ color: dynamicStyles.listItemBase.color }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {hasImage && (
            <div className="col-lg-5 text-center">
              <img
                src={methodologyData.image}
                alt="Training Methodology"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "450px" }}
              />
            </div>
          )}
        </div>
      </section>
    );
  };

  // MODIFIED: Render Clients section only if it has content, and title only if content exists
  const renderClients = () => {
    const clientData = data.clients;
    if (!clientData) return null;

    const hasLogosArray = isNonEmptyArray(clientData.logos);
    const hasImage = clientData.image;
    const textContent = renderParagraphs(clientData.text);

    if (!hasLogosArray && !hasImage && !textContent) return null; // Don't render if empty

    return (
      <section
        style={{ ...dynamicStyles.dynamicSection, paddingBottom: "1rem" }}
        className="text-center"
      >
        {/* --- MODIFIED: Conditional Title --- */}
        {(hasLogosArray || hasImage || textContent) &&
          renderSectionTitle(clientData.title || "Trusted By")}
        <div className="container">
          {hasLogosArray ? (
            <div className="row justify-content-center align-items-center mt-4">
              {clientData.logos.map(
                (logo, index) =>
                  logo.image && ( // Render only if logo has an image
                    <div
                      key={index}
                      className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 text-center"
                    >
                      <img
                        src={logo.image}
                        alt={logo.name || `Client ${index + 1}`}
                        className="img-fluid"
                        style={{
                          maxHeight: "60px",
                          filter: "grayscale(70%)",
                          opacity: 0.8,
                        }}
                      />
                    </div>
                  )
              )}
            </div>
          ) : hasImage ? (
            <img
              src={clientData.image}
              alt="Client Logos"
              className="img-fluid"
              style={{
                maxHeight: "1000px",
                width: "auto",
                margin: "auto",
                filter: "grayscale(60%)",
                opacity: 0.75,
              }}
            />
          ) : null}
          {textContent && (
            <div className="fs-5 mt-3 text-muted">{textContent}</div>
          )}
        </div>
      </section>
    );
  };

  // MODIFIED: Render Form section only if form data exists, and title only if title/desc exists
  const renderForm = () => {
    const formData = data.form;
    if (!formData) return null; // Don't render if no form data

    const hasDescription = isNonEmptyString(formData.description);
    const hasTitle = isNonEmptyString(formData.title);

    return (
      <section
        id="contact-form-section"
        style={{
          ...dynamicStyles.dynamicSection,
          ...dynamicStyles.formSection,
        }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            {/* --- MODIFIED: Conditional Title --- */}
            {(hasTitle || hasDescription) &&
              renderSectionTitle(formData.title || "Get In Touch")}
            {hasDescription && (
              <p
                className="text-center lead mb-4"
                style={{ color: currentTheme.textSecondary }}
              >
                {formData.description}
              </p>
            )}
            <ContactForm
              buttonText={formData.buttonTitle || "Submit Request"}
            />
          </div>
        </div>
      </section>
    );
  };

  // --- Main Render Logic ---
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <ContactFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        buttonText={modalButtonText}
      />
      {renderBanner()}
      {/* Intro + Contact Form Section */}
      <section style={{ padding: "4rem 0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center", // ⬅️ Vertically center
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "30px",
          }}
          className="container"
        >
          {/* Left: Intro Text */}
          <div style={{ flex: 2, minWidth: "300px", maxWidth: "65%" }}>
            {renderIntro()}
          </div>

          {/* Right: Contact Form */}
          <div style={{ flex: 1, minWidth: "280px", maxWidth: "35%" }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="container py-4">
        {/* Sections will now only render if they have content */}
        {/* {renderIntro()} */}
        {renderWhyChoose()}

        {/* Render the primary content block based on its key */}
        {/* These functions now internally check for content before rendering */}
        {renderPillars()}
        {renderKeyConcepts("keyConcepts", "Key Concepts")}
        {renderKeyConcepts("keyFocusAreas", "Key Focus Areas")}
        {renderKeyConcepts("keyLeanTools", "Key Lean Tools")}
        {renderKeyConcepts("designThinkingPhases", "Design Thinking Phases")}
        {renderKeyConcepts(
          "bscPerspectives",
          "Balanced Scorecard Perspectives"
        )}
        {renderProcessSteps()}
        {renderKeyConcepts("keyTechniques", "Key Techniques")}
        {renderKeyConcepts("keyConceptsTools", "Key Concepts & Tools")}
        {renderKeyConcepts("keyTechniquesCovered", "Key Techniques Covered")}
        {renderKeyConcepts("wcmPillars", "WCM Pillars")}
        {renderKeyConcepts("ppapElements", "Key PPAP Elements")}
        {renderKeyConcepts("keyStrategies", "Key Strategies")}
        {renderKeyConcepts("keyTools", "Key Tools Covered")}

        {renderFeatures()}
        {renderTargetAudience()}
        {renderCourseContent()}
        {renderMethodology()}
        {renderClients()}
        {renderForm()}
      </div>
    </Layout>
  );
}

// --- END OF FILE page.js (for Training Pages) ---
