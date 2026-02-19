import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="mb-12">
      <h2 id="projects-heading" className="section-heading">
        Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={`${project.title}-${i}`} project={project} />
        ))}
      </div>
    </section>
  );
}
