import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useLanguage } from '../../i18n/LanguageContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'soft-skills', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a href="#hero" className={styles.navLogo} onClick={closeMenu}>TE.</a>
        
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <li><a href="#hero" className={activeSection === 'hero' ? styles.active : ''} onClick={closeMenu}>{t('nav.home')}</a></li>
          <li><a href="#about" className={activeSection === 'about' ? styles.active : ''} onClick={closeMenu}>{t('nav.about')}</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? styles.active : ''} onClick={closeMenu}>{t('nav.skills')}</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? styles.active : ''} onClick={closeMenu}>{t('nav.projects')}</a></li>
          <li><a href="#soft-skills" className={activeSection === 'soft-skills' ? styles.active : ''} onClick={closeMenu}>{t('nav.softSkills')}</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? styles.active : ''} onClick={closeMenu}>{t('nav.contact')}</a></li>
        </ul>

        <div className={styles.navControls}>
          <LanguageToggle />
          <ThemeToggle />
          
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <i className={`ph-bold ${isMenuOpen ? 'ph-x' : 'ph-list'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
