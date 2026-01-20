// Authentication helper functions for admin panel

export const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('authToken');
};

export const getUserId = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('userId');
};

export const getUserEmail = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('userEmail');
};

export const isAdmin = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('adminAuth') === 'true';
};

export const setAuthData = (token: string, userId: string, email: string) => {
  localStorage.setItem('authToken', token);
  localStorage.setItem('userId', userId);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('adminAuth', 'true');
};

export const clearAuthData = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userId');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('adminAuth');
};

export const getAuthHeaders = () => {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
};
