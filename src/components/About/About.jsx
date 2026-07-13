import styles from './About.module.css';
import { useLanguage } from '../../i18n/LanguageContext';
import { useEffect, useRef } from 'react';

export default function About() {
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
    <section id="about" className={`section-reveal ${styles.aboutSection}`} ref={sectionRef}>
      <h2>
        <i className="ph-bold ph-user"></i> {t('about.heading')}
      </h2>
      <div className={`glass-panel ${styles.aboutContent}`}>
        <p>{t('about.paragraph1')}</p>
        <p>{t('about.paragraph2')}</p>
      </div>
    </section>
  );
}
