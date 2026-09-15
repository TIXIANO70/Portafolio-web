import styles from './Skills.module.css';
import { useLanguage } from '../../i18n/LanguageContext';
import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    id: 'backend',
    icon: 'ph-bold ph-database',
    titleKey: 'skills.backend',
    skills: [
      { name: 'Java 17', icon: 'devicon-java-plain', level: 'intermediate' },
      { name: 'Spring Boot', icon: 'devicon-spring-original', level: 'intermediate' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', level: 'advanced' },
      { name: 'MySQL / SQL', icon: 'devicon-mysql-plain', level: 'advanced' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain', level: 'intermediate' }
    ]
  },
  {
    id: 'frontend',
    icon: 'ph-bold ph-browsers',
    titleKey: 'skills.frontend',
    skills: [
      { name: 'React', icon: 'devicon-react-original', level: 'intermediate' },
      { name: 'JavaScript (ES6+)', icon: 'devicon-javascript-plain', level: 'advanced' },
      { name: 'HTML5', icon: 'devicon-html5-plain', level: 'advanced' },
      { name: 'CSS3 / Flexbox', icon: 'devicon-css3-plain', level: 'advanced' }
    ]
  },
  {
    id: 'devops',
    icon: 'ph-bold ph-hard-drives',
    titleKey: 'skills.devops',
    skills: [
      { name: 'Docker', icon: 'devicon-docker-plain', level: 'intermediate' },
      { name: 'Linux / Bash', icon: 'devicon-linux-plain', level: 'intermediate' },
      { name: 'Git & GitHub', icon: 'devicon-git-plain', level: 'advanced' },
      { name: 'Homelab & Net', icon: 'ph-bold ph-network', isPhosphor: true, level: 'intermediate' }
    ]
  }
];

export default function Skills() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

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
    <section id="skills" className={`section-reveal ${styles.skillsSection}`} ref={sectionRef}>
      <h2>
        <i className="ph-bold ph-code"></i> {t('skills.heading')}
      </h2>
      
      <div className={styles.categoriesContainer}>
        {skillCategories.map(category => (
          <div key={category.id} className={styles.categoryGroup}>
            <h3 className={styles.categoryTitle}>
              <i className={category.icon}></i> {t(category.titleKey)}
            </h3>
            
            <div className={styles.skillsGrid}>
              {category.skills.map(skill => (
                <div key={skill.name} className={`glass-panel ${styles.skillBadge}`}>
                  <div className={styles.skillIconWrapper}>
                    <i className={skill.icon}></i>
                  </div>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{t(`skills.${skill.level}`)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
