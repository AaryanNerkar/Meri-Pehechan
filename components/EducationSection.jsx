export default function EducationSection({ education }) {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" aria-labelledby="education-heading" className="mb-12">
      <h2 id="education-heading" className="section-heading">
        Education
      </h2>
      <div className="space-y-4">
        {education.map((edu, i) => (
          <article key={i} className="education-item">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
              <div>
                <h3 className="text-base font-bold text-surface-900">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-accent-600">
                  {edu.institution}
                  {edu.location && (
                    <span className="text-surface-400 font-normal"> · {edu.location}</span>
                  )}
                </p>
              </div>
              <time className="text-xs font-medium text-surface-400 whitespace-nowrap shrink-0">
                {edu.startDate} — {edu.endDate}
              </time>
            </div>
            {edu.gpa && (
              <p className="text-sm text-surface-600 mt-1">
                <span className="font-medium">GPA:</span> {edu.gpa}
              </p>
            )}
            {edu.details && (
              <p className="text-sm text-surface-600 mt-1 leading-relaxed">
                {edu.details}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
