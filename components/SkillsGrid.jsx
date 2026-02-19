export default function SkillsGrid({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    <section id="skills" aria-labelledby="skills-heading" className="mb-12">
      <h2 id="skills-heading" className="section-heading">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-bold text-surface-800 mb-3 uppercase tracking-wider">
              {group.category}
            </h3>
            <ul className="space-y-2.5">
              {group.items.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-surface-700">{skill.name}</span>
                    <span className="text-xs text-surface-400">{skill.proficiency}%</span>
                  </div>
                  <div className="proficiency-bar" role="progressbar" aria-valuenow={skill.proficiency} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} proficiency: ${skill.proficiency}%`}>
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
      </div>
    </section>
  );
}
