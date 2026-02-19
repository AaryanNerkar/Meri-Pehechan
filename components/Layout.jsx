import { useEffect } from 'react';

export default function Layout({ children }) {
  useEffect(() => {
    // Add smooth scroll polyfill for older browsers
    if (!('scrollBehavior' in document.documentElement.style)) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <>
      {/* Skip to content — accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      {children}
    </>
  );
}
