import Head from 'next/head';
import Link from 'next/link';
import profile from '@/data/profile.json';

export default function ResumePage() {
  const {
    hero,
    contact,
    topSkills,
    languages,
    certifications,
    experience,
    education,
    projects,
    skills,
    publications,
    awards,
  } = profile;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Head>
        <title>Resume — {hero.name}</title>
        <meta name="robots" content="noindex" />
      </Head>

      {/* Print controls — hidden in print */}
      <div className="no-print sticky top-0 z-50 bg-surface-0 border-b border-surface-200 py-3 px-6">
        <div className="max-w-resume mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-surface-600 hover:text-accent-600 transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <button
            onClick={handlePrint}
            className="print-trigger inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold
                       bg-accent-600 text-white rounded-md hover:bg-accent-700
                       transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Download as PDF
          </button>
        </div>
      </div>

      {/* Resume content — optimized for print */}
      <div className="max-w-resume mx-auto px-6 py-8 print:p-0 print:max-w-none">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold text-surface-900 tracking-tight print:text-[20pt]">
            {hero.name}
          </h1>
          <p className="text-lg font-medium text-accent-600 mt-0.5 print:text-[13pt]">
            {hero.title}
          </p>
          {/* Contact line for print */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-surface-600 print:text-[9pt]">
            {contact.email && <span>{contact.email}</span>}
            {contact.phone && <span>{contact.phone}</span>}
            {contact.location && <span>{contact.location}</span>}
            {contact.linkedin && (
              <a href={contact.linkedin} className="no-print-url text-accent-600">
                LinkedIn
              </a>
            )}
            {contact.github && (
              <a href={contact.github} className="no-print-url text-accent-600">
                GitHub
              </a>
            )}
          </div>
          <p className="mt-3 text-sm text-surface-700 leading-relaxed max-w-3xl print:text-[10pt]">
            {hero.summary}
          </p>
        </header>

        {/* Two-column layout */}
        <div className="resume-layout grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 print:grid-cols-[240px_1fr] print:gap-6">
          {/* Left column */}
          <aside className="sidebar-print space-y-5">
            {/* Skills summary */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-surface-900 border-b border-surface-300 pb-1 mb-2">
                Core Skills
              </h2>
              <div className="flex flex-wrap gap-1">
                {topSkills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills with bars */}
            {skills.map((group) => (
              <div key={group.category}>
                <h2 className="text-sm font-bold uppercase tracking-wider text-surface-900 border-b border-surface-300 pb-1 mb-2">
                  {group.category}
                </h2>
                <ul className="space-y-1.5">
                  {group.items.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-xs text-surface-700">{skill.name}</span>
                      </div>
                      <div className="proficiency-bar">
                        <div
                          className="proficiency-fill"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Languages */}
            {languages && languages.length > 0 && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-surface-900 border-b border-surface-300 pb-1 mb-2">
                  Languages
                </h2>
                <ul className="space-y-0.5 text-xs text-surface-700">
                  {languages.map((lang) => (
                    <li key={lang.name} className="flex justify-between">
                      <span>{lang.name}</span>
                      <span className="text-surface-400">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-surface-900 border-b border-surface-300 pb-1 mb-2">
                  Certifications
                </h2>
                <ul className="space-y-1 text-xs text-surface-700">
                  {certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* QR Code for print */}
            <div className="print-qr flex-col items-center gap-2 mt-4 pt-4 border-t border-surface-300">
              <p className="text-xs text-surface-500 text-center">Scan for live portfolio</p>
              {/* Simple QR code placeholder — replace with actual QR code in production */}
              <div className="w-20 h-20 mx-auto bg-surface-100 border border-surface-300 rounded flex items-center justify-center">
                <svg className="w-12 h-12 text-surface-400" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="7" height="7" rx="1" />
                  <rect x="15" y="2" width="7" height="7" rx="1" />
                  <rect x="2" y="15" width="7" height="7" rx="1" />
                  <rect x="11" y="11" width="2" height="2" />
                  <rect x="15" y="15" width="2" height="2" />
                  <rect x="19" y="15" width="2" height="2" />
                  <rect x="15" y="19" width="2" height="2" />
                  <rect x="11" y="15" width="2" height="2" />
                  <rect x="11" y="19" width="2" height="2" />
                  <rect x="19" y="19" width="2" height="2" />
                </svg>
              </div>
            </div>
          </aside>

          {/* Right column */}
          <main className="min-w-0">
            {/* Experience */}
            <section className="mb-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-surface-900 border-b-2 border-accent-600 pb-1 mb-3">
                Experience
              </h2>
              {experience.map((job, i) => (
                <article key={i} className="experience-item mb-4 last:mb-0">
                  <div className="flex items-baseline justify-between gap-2 mb-0.5">
                    <div>
                      <h3 className="text-sm font-bold text-surface-900">{job.title}</h3>
                      <p className="text-xs font-medium text-accent-600">
                        {job.company}
                        <span className="text-surface-400 font-normal"> · {job.location}</span>
                      </p>
                    </div>
                    <time className="text-xs text-surface-400 whitespace-nowrap">
                      {job.startDate} — {job.endDate}
                    </time>
                  </div>
                  <ul className="mt-1 space-y-0.5 text-xs text-surface-700 leading-relaxed">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-1.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-surface-400 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="tech-tag text-[8pt] px-1.5 py-0">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </section>

            {/* Education */}
            <section className="mb-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-surface-900 border-b-2 border-accent-600 pb-1 mb-3">
                Education
              </h2>
              {education.map((edu, i) => (
                <article key={i} className="education-item">
                  <div className="flex items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-surface-900">{edu.degree}</h3>
                      <p className="text-xs font-medium text-accent-600">
                        {edu.institution}
                        <span className="text-surface-400 font-normal"> · {edu.location}</span>
                      </p>
                    </div>
                    <time className="text-xs text-surface-400 whitespace-nowrap">
                      {edu.startDate} — {edu.endDate}
                    </time>
                  </div>
                  {edu.gpa && <p className="text-xs text-surface-600 mt-0.5">GPA: {edu.gpa}</p>}
                  {edu.details && <p className="text-xs text-surface-600 mt-0.5">{edu.details}</p>}
                </article>
              ))}
            </section>

            {/* Projects */}
            <section className="mb-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-surface-900 border-b-2 border-accent-600 pb-1 mb-3">
                Key Projects
              </h2>
              <div className="space-y-3">
                {projects.map((project, i) => (
                  <article key={i} className="project-card border-0 border-b border-surface-200 last:border-0 p-0 pb-2 last:pb-0 shadow-none rounded-none">
                    <h3 className="text-sm font-bold text-surface-900">{project.title}</h3>
                    <p className="text-xs text-surface-600 mt-0.5">{project.summary}</p>
                    {project.outcomes && (
                      <p className="text-xs text-surface-700 mt-0.5 font-medium">
                        ↗ {project.outcomes}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-tag text-[8pt] px-1.5 py-0">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Awards & Publications */}
            {((publications && publications.length > 0) || (awards && awards.length > 0)) && (
              <section className="mb-5">
                {publications && publications.length > 0 && (
                  <div className="mb-3">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-surface-900 border-b-2 border-accent-600 pb-1 mb-2">
                      Publications
                    </h2>
                    <ul className="space-y-1">
                      {publications.map((pub, i) => (
                        <li key={i} className="text-xs text-surface-700">
                          <span className="font-medium">{pub.title}</span>
                          {pub.venue && <span> — {pub.venue}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {awards && awards.length > 0 && (
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-surface-900 border-b-2 border-accent-600 pb-1 mb-2">
                      Awards
                    </h2>
                    <ul className="space-y-0.5">
                      {awards.map((award, i) => (
                        <li key={i} className="text-xs text-surface-700">{award}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
