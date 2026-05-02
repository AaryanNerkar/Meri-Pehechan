import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`no-print sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-0/95 backdrop-blur-md shadow-sm border-b border-surface-200'
          : 'bg-surface-0'
      }`}
    >
      <div className="max-w-resume mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-sm font-bold text-surface-900 tracking-wide no-print-url"
          aria-label="Back to top"
        >
          {name || 'Portfolio'}
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6" role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                className="nav-link"
                role="menuitem"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li role="none">
            <a
              href="https://github.com/AaryanNerkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="social-icon-link"
              role="menuitem"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </li>
          <li role="none">
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold
                         bg-accent-600 text-white rounded-md hover:bg-accent-700
                         transition-colors duration-200"
              role="menuitem"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-surface-600 hover:text-surface-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-surface-200 bg-surface-0">
          <ul className="px-6 py-3 space-y-2" role="menu">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  className="block py-1.5 text-sm text-surface-600 hover:text-accent-600 transition-colors"
                  role="menuitem"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li role="none">
              <a
                href="https://github.com/AaryanNerkar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center gap-2 py-1.5 text-sm text-surface-600 hover:text-accent-600 transition-all duration-200 hover:scale-105"
                role="menuitem"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </li>
            <li role="none">
              <Link
                href="/resume"
                className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 text-xs font-semibold
                           bg-accent-600 text-white rounded-md"
                role="menuitem"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
