import styles from './Projects.module.css';
import { useLanguage } from '../../i18n/LanguageContext';

export default function ProjectCard({ project, onOpenModal }) {
  const { t } = useLanguage();

  const getBadgeClass = (projectId) => {
    switch (projectId) {
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

  const imagesCount = project.images ? project.images.length : (project.image ? 1 : 0);

  return (
    <article 
      className={styles.projectCard} 
      onClick={() => onOpenModal(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenModal(project);
        }
      }}
      aria-label={`Ver detalles de ${t(`projects.${project.id}.title`)}`}
    >
      {/* Mockup Header */}
      <div className={styles.mockupHeader}>
        <div className={styles.mockupDots}>
          <span className={`${styles.dot} ${styles.dotRed}`}></span>
          <span className={`${styles.dot} ${styles.dotYellow}`}></span>
          <span className={`${styles.dot} ${styles.dotGreen}`}></span>
        </div>
        <span className={`${styles.cardBadge} ${getBadgeClass(project.id)}`}>
          {t(`projects.badges.${project.id}`)}
        </span>
      </div>

      {/* Project Cover Image */}
      <div className={styles.projectImageWrapper}>
        <img 
          src={project.image} 
          alt={`Preview de ${t(`projects.${project.id}.title`)}`} 
          className={styles.projectImage} 
          loading="lazy" 
        />
        <div className={styles.previewOverlay}>
          <span className={styles.previewPill}>
            <i className="ph-bold ph-eye"></i> {t('projects.viewGallery')}
          </span>
        </div>
        {imagesCount > 1 && (
          <div className={styles.imageCountBadge}>
            <i className="ph-bold ph-images"></i> {imagesCount} {t('projects.screenshots')}
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className={styles.projectBody}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{t(`projects.${project.id}.title`)}</h3>
          <div className={styles.projectLinks} onClick={(e) => e.stopPropagation()}>
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.iconLink}
                aria-label="GitHub Repository" 
                title="GitHub Repository"
              >
                <i className="devicon-github-original"></i>
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.iconLink}
                aria-label="Sitio Web" 
                title="Sitio Web"
              >
                <i className="ph-bold ph-arrow-square-out"></i>
              </a>
            )}
          </div>
        </div>

        <p className={styles.projectDescription}>{t(`projects.${project.id}.description`)}</p>

        <div className={styles.projectTags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.cardActions}>
          <span className={styles.viewDetailsBtn}>
            {t('projects.viewGallery')} <i className="ph-bold ph-arrow-right"></i>
          </span>
        </div>
      </div>
    </article>
  );
}
