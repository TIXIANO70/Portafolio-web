import styles from './Projects.module.css';
import { useLanguage } from '../../i18n/LanguageContext';
import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const projectsData = [
    {
      id: 'gie',
      tags: ['React', 'Node.js', 'MySQL'],
      repoUrl: 'https://github.com/Hung-Nicolas/GIE'
    },
    {
      id: 'nexus',
      tags: ['Spring Boot', 'Java 17', 'PostgreSQL', 'Docker', 'API Gateway'],
      repoUrl: 'https://github.com/Hung-Nicolas/Nexus'
    },
    {
      id: 'aerohack',
      tags: ['JavaScript', 'HTML5 / CSS3', 'Design Thinking', 'Urbanismo'],
      liveUrl: 'https://tixiano70.github.io/aerohack/'
    },
    {
      id: 'homelab',
      tags: ['Linux', 'Docker', 'Networking']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={`section-reveal ${styles.projectsSection}`} ref={sectionRef}>
      <h2>
        <i className="ph-bold ph-folder-open"></i> {t('projects.heading')}
      </h2>
      <div className={styles.projectsGrid}>
        {projectsData.map(project => (
          <ProjectCard 
            key={project.id}
            title={t(`projects.${project.id}.title`)}
            description={t(`projects.${project.id}.description`)}
            tags={project.tags}
            image={project.image}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}
