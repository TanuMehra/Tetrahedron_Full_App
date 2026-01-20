"use client";
import ContactForm from "./ContactForm";

export default function ContactFormModal({ open, onClose, buttonText }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.7)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        position: "relative",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        padding: "0",
        minWidth: 320,
        maxWidth: "60vw",
        maxHeight: "95vh",

        overflowY: "auto",
      }}>
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 18,
            cursor: "pointer",
            fontSize: 28,
            color: "#888",
            zIndex: 2,
            fontWeight: 700,
          }}
          onClick={onClose}
        >
          ×
        </span>
        <div style={{ padding: 0, minWidth: 320 }}>
          <ContactForm buttonText={buttonText} />
        </div>
      </div>
    </div>
  );
} 