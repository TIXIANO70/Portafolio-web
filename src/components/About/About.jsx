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
        <div className={styles.aboutBio}>
          <p>{t('about.paragraph1')}</p>
          <p>{t('about.paragraph2')}</p>
        </div>

        {/* Highlights Strip */}
        <div className={styles.highlightsGrid}>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>
              <i className="ph-bold ph-graduation-cap"></i>
            </div>
            <div className={styles.highlightText}>
              <span className={styles.highlightTitle}>{t('about.highlights.degree')}</span>
              <span className={styles.highlightSub}>{t('about.highlights.degreeSub')}</span>
            </div>
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>
              <i className="ph-bold ph-cpu"></i>
            </div>
            <div className={styles.highlightText}>
              <span className={styles.highlightTitle}>{t('about.highlights.focus')}</span>
              <span className={styles.highlightSub}>{t('about.highlights.focusSub')}</span>
            </div>
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>
              <i className="ph-bold ph-trophy"></i>
            </div>
            <div className={styles.highlightText}>
              <span className={styles.highlightTitle}>{t('about.highlights.award')}</span>
              <span className={styles.highlightSub}>{t('about.highlights.awardSub')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
