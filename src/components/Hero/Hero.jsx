import styles from './Hero.module.css';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Status Pill */}
        <div className={styles.statusBadge}>
          <span className={styles.statusDot}></span>
          <span>{t('hero.statusBadge')}</span>
        </div>

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
          <a href="assets/cv/CV_Tiziano_Espinoza.pdf" target="_blank" className={styles.btnSecondary} rel="noopener noreferrer">
            <i className="ph-bold ph-download-simple"></i> {t('hero.downloadCV')}
          </a>
        </div>

        {/* Direct Social Links */}
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/TIXIANO70" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialIcon}
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/tiziano-espinoza-rodriguez-b551283a3/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialIcon}
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a 
            href="#contact" 
            className={styles.socialIcon}
            aria-label="Contacto"
            title={t('hero.contactMe')}
          >
            <i className="ph-bold ph-envelope-simple"></i>
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
