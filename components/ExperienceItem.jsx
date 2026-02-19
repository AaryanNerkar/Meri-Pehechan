export default function ExperienceItem({ job }) {
  return (
    <article className="experience-item mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1.5">
        <div>
          <h3 className="text-base font-bold text-surface-900">
            {job.title}
          </h3>
          <p className="text-sm font-medium text-accent-600">
            {job.company}
            {job.location && (
              <span className="text-surface-400 font-normal"> · {job.location}</span>
            )}
          </p>
        </div>
        <time className="text-xs font-medium text-surface-400 whitespace-nowrap shrink-0">
          {job.startDate} — {job.endDate}
        </time>
      </div>

      <ul className="mt-2 space-y-1.5 text-sm text-surface-700 leading-relaxed">
        {job.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-2 w-1 h-1 rounded-full bg-surface-400 shrink-0" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {job.technologies && job.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {job.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
