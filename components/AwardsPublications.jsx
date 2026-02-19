export default function AwardsPublications({ awards, publications }) {
  const hasAwards = awards && awards.length > 0;
  const hasPublications = publications && publications.length > 0;

  if (!hasAwards && !hasPublications) return null;

  return (
    <section id="awards" aria-labelledby="awards-heading" className="mb-12">
      {/* Publications */}
      {hasPublications && (
        <div className="mb-8">
          <h2 id="awards-heading" className="section-heading">
            Publications
          </h2>
          <ul className="space-y-2">
            {publications.map((pub, i) => (
              <li key={i} className="text-sm text-surface-700">
                <span className="font-medium text-surface-900">{pub.title}</span>
                {pub.venue && <span className="text-surface-500"> — {pub.venue}</span>}
                {pub.url && (
                  <>
                    {' '}
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:underline"
                    >
                      [Link]
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Awards */}
      {hasAwards && (
        <div>
          <h2 className="section-heading">
            Awards & Honors
          </h2>
          <ul className="space-y-1.5">
            {awards.map((award, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-surface-700">
                <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3h14a2 2 0 012 2v2a5 5 0 01-3.5 4.77A5.002 5.002 0 0113 16.9V19h2a1 1 0 110 2H9a1 1 0 110-2h2v-2.1a5.002 5.002 0 01-4.5-4.87A5 5 0 013 7V5a2 2 0 012-2z" />
                </svg>
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
