import ExperienceItem from './ExperienceItem';

export default function ExperienceSection({ experience }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" aria-labelledby="experience-heading" className="mb-12">
      <h2 id="experience-heading" className="section-heading">
        Experience
      </h2>
      <div className="space-y-2">
        {experience.map((job, i) => (
          <ExperienceItem key={`${job.company}-${i}`} job={job} />
        ))}
      </div>
    </section>
  );
}
