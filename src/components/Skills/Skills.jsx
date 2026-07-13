import styles from './Skills.module.css';
import { useLanguage } from '../../i18n/LanguageContext';
import { useEffect, useRef } from 'react';

const skillsData = [
  { name: 'HTML5', icon: 'devicon-html5-plain', level: 'advanced' },
  { name: 'CSS3', icon: 'devicon-css3-plain', level: 'advanced' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 'advanced' },
  { name: 'React', icon: 'devicon-react-original', level: 'intermediate' },
  { name: 'SQL', icon: 'devicon-mysql-plain', level: 'advanced' },
  { name: 'Linux', icon: 'devicon-linux-plain', level: 'intermediate' },
  { name: 'Docker', icon: 'devicon-docker-plain', level: 'intermediate' },
  { name: 'Git', icon: 'devicon-git-plain', level: 'advanced' }
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
      <div className={styles.skillsGrid}>
        {skillsData.map(skill => (
          <div key={skill.name} className={`glass-panel ${styles.skillBadge}`}>
            <i className={skill.icon}></i>
            <div className={styles.skillInfo}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{t(`skills.${skill.level}`)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
