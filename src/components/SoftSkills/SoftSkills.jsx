import styles from './SoftSkills.module.css';
import { useLanguage } from '../../i18n/LanguageContext';
import { useEffect, useRef } from 'react';

const softSkillsList = [
  { id: 'organization', icon: 'ph-calendar-check' },
  { id: 'discipline', icon: 'ph-target' },
  { id: 'timeManagement', icon: 'ph-clock' },
  { id: 'decisionMaking', icon: 'ph-git-branch' },
  { id: 'problemSolving', icon: 'ph-lightbulb' },
  { id: 'teamwork', icon: 'ph-users' },
  { id: 'communication', icon: 'ph-chat-circle' }
];

export default function SoftSkills() {
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
    <section id="soft-skills" className={`section-reveal ${styles.softSkillsSection}`} ref={sectionRef}>
      <h2>
        <i className="ph-bold ph-brain"></i> {t('softSkills.heading')}
      </h2>
      <div className={`glass-panel ${styles.softSkillsContainer}`}>
        <ul className={styles.softSkillsList}>
          {softSkillsList.map(skill => (
            <li key={skill.id}>
              <i className={`ph-bold ${skill.icon}`}></i>
              <span>{t(`softSkills.${skill.id}`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
