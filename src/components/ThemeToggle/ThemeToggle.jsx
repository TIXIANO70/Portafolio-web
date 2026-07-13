import styles from './ThemeToggle.module.css';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={styles.toggleBtn} 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      {theme === 'light' ? (
        <i className="ph-fill ph-moon"></i>
      ) : (
        <i className="ph-fill ph-sun"></i>
      )}
    </button>
  );
}
