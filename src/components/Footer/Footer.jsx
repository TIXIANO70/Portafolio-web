import styles from './Footer.module.css';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>&copy; {new Date().getFullYear()} {t('footer.name')}</p>
        <a href="/assets/cv/CV_Tiziano_Espinoza.pdf" target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
          <i className="ph-bold ph-download-simple"></i> {t('footer.downloadCV')}
        </a>
      </div>
    </footer>
  );
}
