"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm({ onSuccess, onError, buttonText = "Submit", style = {} }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    requirements: "",
  });
  const [modal, setModal] = useState({ open: false, message: "", success: false });
  const [loading, setLoading] = useState(false);

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f0f0f0",
    fontSize: "14px",
    outline: "none",
  };

  const submitButtonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "var(--elitecons-base)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: loading ? "not-allowed" : "pointer",
    transition: "background 0.3s ease",
    opacity: loading ? 0.7 : 1,
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setModal({ open: true, message: "Form submitted successfully!", success: true });
        setFormData({ name: "", company: "", email: "", mobile: "", requirements: "" });
        if (onSuccess) onSuccess();
        setTimeout(() => {
          router.push("/thankyou");
        }, 1500);
      } else {
        setModal({ open: true, message: "Failed to submit form.", success: false });
        if (onError) onError();
      }
    } catch (err) {
      setModal({ open: true, message: "Failed to submit form.", success: false });
      if (onError) onError();
    }
    setLoading(false);
    setTimeout(() => setModal({ ...modal, open: false }), 3000);
  };

  // Split style into normal and !important
  const normalStyle = {};
  const importantStyles = [];
  for (const key in style) {
    const value = style[key];
    if (typeof value === 'string' && value.includes('!important')) {
      importantStyles.push([key, value.replace('!important', '').trim()]);
    } else {
      normalStyle[key] = value;
    }
  }

  // Top-level div ref for !important styles
  const topDivRef = (el) => {
    if (el) {
      importantStyles.forEach(([key, value]) => {
        // Convert camelCase to kebab-case for CSS property
        const cssKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        el.style.setProperty(cssKey, value, 'important');
      });
    }
  };

  return (
    <div style={normalStyle} ref={topDivRef}>
      <form onSubmit={handleSubmitForm} style={{ padding: '30px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', border: '1px solid #e0e0e0', background: '#fff', maxWidth: '100%', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '22px', color: '#333' }}>Get in Touch</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Full Name*"
        required
        style={inputStyle}
      />
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleInputChange}
        placeholder="Company Name*"
        required
        style={inputStyle}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email*"
        required
        style={inputStyle}
      />
      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleInputChange}
        placeholder="Mobile No.*"
        required
        style={inputStyle}
      />
      <textarea
        name="requirements"
        value={formData.requirements}
        onChange={handleInputChange}
        placeholder="Your Requirements*"
        rows={3}
        required
        style={{ ...inputStyle, resize: "none" }}
      ></textarea>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <button type="submit" style={submitButtonStyle} disabled={loading}>
          {loading ? "Submitting..." : buttonText}
        </button>
      </div>
      {modal.open && (
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}>
        <div
          style={{
                background: "#fff",
                padding: "32px 48px",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                textAlign: "center",
                minWidth: "220px",
                maxWidth: "90vw",
                fontSize: "18px",
            color: modal.success ? "green" : "red",
                fontWeight: "bold",
                position: "relative",
                zIndex: 11,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 8,
              right: 16,
              cursor: "pointer",
              fontSize: 24,
              color: "#888",
            }}
            onClick={() => setModal({ ...modal, open: false })}
          >
            ×
          </span>
          {modal.message}
            </div>
        </div>
      )}
    </form>
    </div>
  );
}
