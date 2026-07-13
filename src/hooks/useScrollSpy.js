import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      
      let current = activeSection;
      
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - offset;
          
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = id;
          }
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, activeSection, offset]);

  return activeSection;
}
