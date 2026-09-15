import styles from './Contact.module.css';
import { useLanguage } from '../../i18n/LanguageContext';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [emailLink, setEmailLink] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Anti-scraping technique
    const user = "espinozatiziano3007";
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

  const handleCopyEmail = (e) => {
    e.preventDefault();
    const email = "espinozatiziano3007@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

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
          <button 
            type="button" 
            onClick={handleCopyEmail} 
            className={styles.contactBtn}
            title={t('contact.copyEmail')}
          >
            <i className={`ph-bold ${copied ? 'ph-check' : 'ph-copy'}`}></i>
            {copied ? t('contact.copied') : t('contact.copyEmail')}
          </button>
          <a 
            href="https://www.linkedin.com/in/tiziano-espinoza-rodriguez-b551283a3/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.contactBtn}
          >
            <i className="devicon-linkedin-plain"></i> LinkedIn
          </a>
          <a 
            href="https://github.com/TIXIANO70" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.contactBtn}
          >
            <i className="devicon-github-original"></i> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
