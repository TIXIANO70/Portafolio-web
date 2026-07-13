import styles from './Contact.module.css';
import { useLanguage } from '../../i18n/LanguageContext';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [emailLink, setEmailLink] = useState('');

  useEffect(() => {
    // Anti-scraping technique
    const user = "tizianoespinoza11";
    const domain = "gmail.com";
    setEmailLink(`mailto:${user}@${domain}`);

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
    <section id="contact" className={`section-reveal ${styles.contactSection}`} ref={sectionRef}>
      <div className={`glass-panel ${styles.contactContainer}`}>
        <h2>
          <i className="ph-bold ph-envelope-simple"></i> {t('contact.heading')}
        </h2>
        <p className={styles.contactText}>{t('contact.text')}</p>
        
        <div className={styles.contactLinks}>
          <a href={emailLink} className={styles.contactBtn}>
            <i className="ph-fill ph-envelope"></i> Email
          </a>
          <a href="https://linkedin.com/in/tiziano-espinoza" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
            <i className="devicon-linkedin-plain"></i> LinkedIn
          </a>
          <a href="https://github.com/TizianoEspinoza" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
            <i className="devicon-github-original"></i> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
