import styles from './LanguageToggle.module.css';
import { useLanguage } from '../../i18n/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className={styles.toggleBtn} 
      onClick={toggleLanguage}
      aria-label="Toggle language"
      title={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
    >
      <i className="ph-bold ph-globe"></i>
      <span className={styles.langText}>{language.toUpperCase()}</span>
    </button>
  );
}
