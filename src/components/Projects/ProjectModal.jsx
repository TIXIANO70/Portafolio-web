import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ProjectModal.module.css';
import { useLanguage } from '../../i18n/LanguageContext';

export default function ProjectModal({ project, onClose }) {
  const { t } = useLanguage();
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const images = project.images && project.images.length > 0
    ? project.images
    : (project.image ? [project.image] : []);

  useEffect(() => {
    document.body.classList.add('modal-open');
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        setActiveImageIdx((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, onClose]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev + 1) % images.length);
  };

  const getBadgeClass = (badgeType) => {
    switch (badgeType) {
      case 'aerohack':
        return styles.badgeAward;
      case 'nexus':
        return styles.badgeArchitecture;
      case 'gie':
        return styles.badgeTeamwork;
      case 'homelab':
      default:
        return styles.badgeInfrastructure;
    }
  };

  const modalContent = (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <h3 className={styles.modalTitle}>{t(`projects.${project.id}.title`)}</h3>
            <span className={`${styles.projectBadge} ${getBadgeClass(project.id)}`}>
              {t(`projects.badges.${project.id}`)}
            </span>
          </div>
          <button 
            className={styles.closeButton} 
            onClick={onClose} 
            aria-label={t('projects.closeModal')}
          >
            <i className="ph-bold ph-x"></i>
          </button>
        </div>

        {/* Body */}
        <div className={styles.modalBody}>
          {/* Image Gallery */}
          {images.length > 0 && (
            <div className={styles.gallerySection}>
              <div className={styles.mainImageWrapper}>
                <img 
                  src={images[activeImageIdx]} 
                  alt={`${t(`projects.${project.id}.title`)} screenshot ${activeImageIdx + 1}`} 
                  className={styles.mainImage} 
                />
                
                {images.length > 1 && (
                  <>
                    <button 
                      className={`${styles.navArrow} ${styles.prevArrow}`} 
                      onClick={handlePrev}
                      aria-label="Previous image"
                    >
                      <i className="ph-bold ph-caret-left"></i>
                    </button>
                    <button 
                      className={`${styles.navArrow} ${styles.nextArrow}`} 
                      onClick={handleNext}
                      aria-label="Next image"
                    >
                      <i className="ph-bold ph-caret-right"></i>
                    </button>
                    <div className={styles.imageCounter}>
                      {activeImageIdx + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className={styles.thumbnailsList}>
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`${styles.thumbnailBtn} ${idx === activeImageIdx ? styles.activeThumbnail : ''}`}
                      onClick={() => setActiveImageIdx(idx)}
                      aria-label={`Select screenshot ${idx + 1}`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Info Section */}
          <div className={styles.infoSection}>
            <p className={styles.projectSubtitle}>{t(`projects.${project.id}.subtitle`)}</p>
            <p className={styles.projectDescription}>{t(`projects.${project.id}.description`)}</p>

            <div className={styles.sectionBlock}>
              <h4 className={styles.sectionHeading}>
                <i className="ph-bold ph-user-circle"></i> {t('projects.roleTitle')}
              </h4>
              <p className={styles.roleText}>{t(`projects.${project.id}.role`)}</p>
            </div>

            <div className={styles.sectionBlock}>
              <h4 className={styles.sectionHeading}>
                <i className="ph-bold ph-stack"></i> {t('projects.techStackTitle')}
              </h4>
              <div className={styles.tagsList}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className={styles.modalFooter}>
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.btnAction} ${styles.btnSecondary}`}
            >
              <i className="devicon-github-original"></i> {t('projects.githubRepo')}
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.btnAction} ${styles.btnPrimary}`}
            >
              <i className="ph-bold ph-arrow-square-out"></i> {t('projects.liveDemo')}
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
