import Link from 'next/link';

export default function Header({ hero, contact }) {
  return (
    <header className="py-10 md:py-14" role="banner">
      <div className="max-w-resume mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left: Identity */}
          <div className="flex-1">
            {/* Avatar initials */}
            <div
              className="no-print w-14 h-14 rounded-full bg-accent-600 text-white flex items-center justify-center
                          text-lg font-bold mb-4 select-none"
              aria-hidden="true"
            >
              {hero.avatarInitials}
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-surface-900 tracking-tight leading-tight">
              {hero.name}
            </h1>
            <p className="mt-1 text-lg font-medium text-accent-600">
              {hero.title}
            </p>
            <p className="mt-1 text-sm text-surface-500 italic">
              {hero.tagline}
            </p>
            <p className="mt-4 text-sm text-surface-600 leading-relaxed max-w-2xl">
              {hero.summary}
            </p>
          </div>

          {/* Right: Quick actions */}
          <div className="flex flex-row md:flex-col gap-3 shrink-0 no-print">
            <Link
              href={hero.resumePdfUrl || '/resume'}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold
                         bg-accent-600 text-white rounded-md hover:bg-accent-700
                         transition-colors duration-200 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold
                         border border-surface-300 text-surface-700 rounded-md
                         hover:border-accent-500 hover:text-accent-600
                         transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
