"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Store token and user info
      localStorage.setItem("adminAuth", "true");
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userId", data._id);
      localStorage.setItem("userEmail", data.email);

      // Redirect to dashboard
      router.push("/admin-dashboard");
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      
      {/* Card */}
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%", borderRadius: "16px" }}>
        
        {/* Heading */}
        <h3 className="text-center mb-4 fw-semibold text-dark">
          Admin Login
        </h3>

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {error}
            <button
              type="button"
              className="btn-close"
              onClick={() => setError("")}
            ></button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          
          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email*"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Password*"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-warning w-100 py-2 fw-semibold"
          >
            {loading ? "Please wait..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}
