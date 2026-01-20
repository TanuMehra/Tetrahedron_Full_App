// lib/utils.ts
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatReadingTime(minutes: number) {
  return `${minutes} min read`;
}
// Strip HTML tags and get plain text
export function stripHtmlTags(html: string): string {
  if (!html) return '';
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

// Sanitize and render HTML content safely
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  // Create a temporary element to parse HTML
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.innerHTML;
}