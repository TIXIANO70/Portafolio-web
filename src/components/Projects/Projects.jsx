import { useState, useEffect, useRef } from 'react';
import styles from './Projects.module.css';
import { useLanguage } from '../../i18n/LanguageContext';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'nexus',
      image: 'assets/projects/nexus/nexus_02_dashboard.png',
      images: [
        'assets/projects/nexus/nexus_02_dashboard.png',
        'assets/projects/nexus/nexus_03_datatable.png',
        'assets/projects/nexus/nexus_04_cards.png',
        'assets/projects/nexus/nexus_05_modal.png',
        'assets/projects/nexus/nexus_01_login.png'
      ],
      tags: ['Spring Boot', 'Java 17', 'PostgreSQL', 'Docker', 'API Gateway', 'JWT'],
      repoUrl: 'https://github.com/Hung-Nicolas/Nexus'
    },
    {
      id: 'gie',
      image: 'assets/projects/gie/gie_dashboard.png',
      images: [
        'assets/projects/gie/gie_dashboard.png',
        'assets/projects/gie/gie_reports.png',
        'assets/projects/gie/gie_detail.png'
      ],
      tags: ['React', 'Node.js', 'MySQL', 'Express', 'JWT'],
      repoUrl: 'https://github.com/Hung-Nicolas/GIE'
    },
    {
      id: 'aerohack',
      image: 'assets/projects/aerohack/aerohack_hero.png',
      images: [
        'assets/projects/aerohack/aerohack_hero.png',
        'assets/projects/aerohack/aerohack_compare.png',
        'assets/projects/aerohack/aerohack_system.png',
        'assets/projects/aerohack/aerohack_map.png'
      ],
      tags: ['JavaScript', 'HTML5 / CSS3', 'Design Thinking', 'Urbanismo'],
      liveUrl: 'https://tixiano70.github.io/aerohack/'
    },
    {
      id: 'homelab',
      image: 'assets/projects/homelab/homelab_preview.jpg',
      images: [
        'assets/projects/homelab/homelab_preview.jpg'
      ],
      tags: ['Linux Server', 'Docker Compose', 'Self-Hosting', 'Networking']
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
            project={project}
            onOpenModal={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
