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
