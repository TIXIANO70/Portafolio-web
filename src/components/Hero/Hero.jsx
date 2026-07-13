import styles from './Hero.module.css';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          {t('hero.title').split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? styles.highlight : ''}>{word} </span>
          ))}
        </h1>
        <h2 className={styles.subtitle}>{t('hero.subtitle')}</h2>
        <p className={styles.tagline}>{t('hero.tagline')}</p>
        
        <div className={styles.ctaGroup}>
          <a href="#projects" className={styles.btnPrimary}>
            {t('hero.viewProjects')} <i className="ph-bold ph-arrow-right"></i>
          </a>
          <a href="/assets/cv/CV_Tiziano_Espinoza.pdf" target="_blank" className={styles.btnSecondary} rel="noopener noreferrer">
            <i className="ph-bold ph-download-simple"></i> {t('hero.downloadCV')}
          </a>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <a href="#about" aria-label="Scroll down">
          <i className="ph-bold ph-caret-down"></i>
        </a>
      </div>
    </section>
  );
}
