import styles from './Education.module.css';
import { useLanguage } from '../../i18n/LanguageContext';
import { useEffect, useRef } from 'react';

export default function Education() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const technicalTags = [
    'Software Architecture',
    'Relational Databases',
    'Networking & Systems',
    'Web Development',
    'OOP & Logic'
  ];

  const certificates = [
    {
      id: 'python',
      file: 'assets/certificates/python_data_analysis_ieee_itba_globant.png',
      badgeType: 'cert'
    },
    {
      id: 'ai',
      file: 'assets/certificates/ia_first_streambe_generacion_t.pdf',
      badgeType: 'cert'
    },
    {
      id: 'aerohack',
      file: 'assets/certificates/aerohack_reconocimiento_ambiental.jpg',
      badgeType: 'award'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
    <section id="education" className={`section-reveal ${styles.educationSection}`} ref={sectionRef}>
      <h2>
        <i className="ph-bold ph-graduation-cap"></i> {t('education.heading')}
      </h2>

      {/* Main Technical Education Card */}
      <div className={`glass-panel ${styles.mainDegreeCard}`}>
        <div className={styles.cardHeader}>
          <div className={styles.degreeInfo}>
            <div className={styles.titleRow}>
              <h3 className={styles.degreeTitle}>{t('education.school.degree')}</h3>
              <span className={styles.statusBadge}>{t('education.school.status')}</span>
            </div>
            <h4 className={styles.institutionName}>
              <i className="ph-bold ph-buildings"></i> {t('education.school.institution')}
            </h4>
          </div>
        </div>

        <p className={styles.degreeDescription}>{t('education.school.description')}</p>

        <div className={styles.tagsContainer}>
          {(Array.isArray(t('education.school.tags')) ? t('education.school.tags') : technicalTags).map((tag, idx) => (
            <span key={idx} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Certifications and Awards Subsection */}
      <h3 className={styles.subheading}>
        <i className="ph-bold ph-certificate"></i> {t('education.certificationsHeading')}
      </h3>

      <div className={styles.certsGrid}>
        {certificates.map((cert) => (
          <div key={cert.id} className={`glass-panel ${styles.certCard}`}>
            <div className={styles.certHeader}>
              <span className={cert.badgeType === 'award' ? styles.awardBadge : styles.certBadge}>
                <i className={`ph-bold ${cert.badgeType === 'award' ? 'ph-trophy' : 'ph-seal-check'}`}></i>
                {cert.badgeType === 'award' ? t('education.badges.award') : t('education.badges.cert')}
              </span>
              <span className={styles.certDate}>{t(`education.certs.${cert.id}.date`)}</span>
            </div>

            <h4 className={styles.certTitle}>{t(`education.certs.${cert.id}.title`)}</h4>
            <p className={styles.certIssuer}>{t(`education.certs.${cert.id}.issuer`)}</p>
            <p className={styles.certDesc}>{t(`education.certs.${cert.id}.description`)}</p>

            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewCertBtn}
            >
              <i className="ph-bold ph-arrow-square-out"></i> {t('education.viewCertificate')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
