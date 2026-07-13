import styles from './Projects.module.css';

export default function ProjectCard({ title, description, tags, image, repoUrl }) {
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
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <i className="devicon-github-original"></i>
            </a>
          )}
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
