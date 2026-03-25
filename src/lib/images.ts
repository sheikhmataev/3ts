// Utility for GitHub Pages image paths
export const getImagePath = (path: string) => {
  // For GitHub Pages deployment
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    if (window.location.pathname.includes('/3ts')) {
      return `/3ts${path}`;
    }
  } else {
    // Server-side: check environment
    if (process.env.NODE_ENV === 'production') {
      return `/3ts${path}`;
    }
  }
  return path;
};
