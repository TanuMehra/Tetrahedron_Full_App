import fs from 'fs';
import path from 'path';
import { blogPosts } from '../../lib/blogData';

export async function GET(request) {
  // --- 1. All Blog Slugs ---
  const blogSlugs = blogPosts.map(post => post.link).filter(Boolean);

  // --- 2. All Menu Routes (including nested, external, query-based) ---
  // Read Menu.js as text and extract all href values from <Link href="...">
  const menuFilePath = path.join(process.cwd(), 'components/layout/Menu.js');
  let menuFileContent = '';
  try {
    menuFileContent = fs.readFileSync(menuFilePath, 'utf8');
  } catch (e) {
    menuFileContent = '';
  }
  // Regex to match <Link href="..."> (double or single quotes)
  const menuHrefRegex = /<Link\s+href=["']([^"']+)["']/g;
  const menuRoutes = [];
  let match;
  while ((match = menuHrefRegex.exec(menuFileContent)) !== null) {
    menuRoutes.push(match[1]);
  }

  // --- 3. Top-level folder routes (keep as is) ---
  const folderRoutes = [
    "about-us",
    "our-clients",
    "corporate-training-companies",
    "consulting",
    "automated-guided-vehicle-manufacturers",
    "privacy-policy",
    "testimonials",
    "our-team",
    "services",
    "service-details",
    "projects",
    "project-details",
    "pricing",
    "gallery",
    "faq",
    "contact-us",
    "manufacturing-operational-excellence-consulting",
    "case-studies",
    "career",
    "blog",
    "blog-details",
    "terms-of-service"
  ];

  // --- 4. Additional URLs to always include ---
  const additionalUrls = [
    "https://www.tetrahedron.in/operational-excellence-consultant/",
    "https://www.tetrahedron.in/lean-plant-layout-design/",
    "https://www.tetrahedron.in/lean-manufacturing-consulting/",
    "https://www.tetrahedron.in/visual-management-consulting/",
    "https://www.tetrahedron.in/contact-us/",
    "https://www.tetrahedron.in/manufacturing-excellence-consulting/",
    "https://www.tetrahedron.in/tpm-consultant/"
  ];

  // --- 5. Build URLs ---
  let urls = [
    // Home
    { loc: "https://www.tetrahedron.in/", priority: 1.0 },
    // Folders
    ...folderRoutes.map(route => ({ loc: `https://www.tetrahedron.in/${route.replace(/\/$/,"")}`, priority: 0.8 })),
    // Menu
    ...menuRoutes.map(route => {
      // If route starts with http or https, use as is
      if (/^https?:\/\//.test(route)) {
        return { loc: route, priority: 0.8 };
      }
      // Otherwise, treat as internal
      let clean = route.startsWith('/') ? route : '/' + route;
      clean = clean.replace(/\/$/, '');
      return { loc: `https://www.tetrahedron.in${clean}`, priority: 0.8 };
    }),
    // Blogs
    ...blogSlugs.map(slug => ({ loc: `https://www.tetrahedron.in/${slug}`, priority: 0.7 })),
    // Additional URLs
    ...additionalUrls.map(loc => ({ loc: loc.replace(/\/$/, ''), priority: 0.8 })),
  ];

  // --- 6. Remove duplicates ---
  const seen = new Set();
  urls = urls.filter(u => {
    if (seen.has(u.loc)) return false;
    seen.add(u.loc);
    return true;
  });

  // --- 7. Build XML ---
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  ${urls.map(u => `<url><loc>${u.loc}</loc><priority>${u.priority}</priority></url>`).join('\n  ')}\n</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
