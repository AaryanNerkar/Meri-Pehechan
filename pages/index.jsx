import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsGrid from '@/components/SkillsGrid';
import AwardsPublications from '@/components/AwardsPublications';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import profile from '@/data/profile.json';

export default function Home() {
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

  return (
    <Layout>
      <Navigation name={hero.name} />

      <Header hero={hero} contact={contact} />

      <div id="main-content" className="max-w-resume mx-auto px-6 pb-8">
        {/* Two-column layout */}
        <div className="resume-layout flex flex-col md:grid md:grid-cols-[280px_1fr] gap-8">
          {/* LEFT: Sidebar */}
          <div className="order-first">
            <Sidebar
              contact={contact}
              topSkills={topSkills}
              languages={languages}
              certifications={certifications}
            />
          </div>

          {/* RIGHT: Main resume content */}
          <main className="min-w-0" role="main">
            <ExperienceSection experience={experience} />
            <EducationSection education={education} />
            <ProjectsSection projects={projects} />
            <SkillsGrid skills={skills} />
            <AwardsPublications awards={awards} publications={publications} />
            <ContactForm email={contact.email} />
          </main>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

// Static props for SSR (data is already static JSON, but this ensures SSR)
export async function getStaticProps() {
  return { props: {} };
}
