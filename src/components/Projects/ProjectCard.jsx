import styles from './Projects.module.css';

export default function ProjectCard({ title, description, tags, image, repoUrl, liveUrl }) {
  return (
    <article className={`glass-panel ${styles.projectCard}`}>
      {image && (
        <div className={styles.projectImage}>
          <img src={image} alt={`Preview de ${title}`} loading="lazy" />
        </div>
      )}
      <div className={styles.projectBody}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <div className={styles.projectLinks}>
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" title="GitHub Repository">
                <i className="devicon-github-original"></i>
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Sitio Web" title="Sitio Web">
                <i className="ph-bold ph-arrow-square-out"></i>
              </a>
            )}
          </div>
        </div>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectTags}>
          {tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
