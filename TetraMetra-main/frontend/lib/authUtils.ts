// Authentication utilities for managing tokens and authenticated requests

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

/**
 * Get the authentication token from localStorage
 */
export const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("authToken");
};

/**
 * Get the user ID from localStorage
 */
export const getUserId = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("userId");
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("adminAuth") === "true" && !!getAuthToken();
};

/**
 * Logout the user
 */
export const logout = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("adminAuth");
  localStorage.removeItem("authToken");
  localStorage.removeItem("userId");
};

/**
 * Make an authenticated API request
 */
export const fetchWithAuth = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const token = getAuthToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${BACKEND_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // If unauthorized, clear auth and redirect
  if (response.status === 401) {
    logout();
    if (typeof window !== "undefined") {
      window.location.href = "/admin-login";
    }
  }

  return response;
};
