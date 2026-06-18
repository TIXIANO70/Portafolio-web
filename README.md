# Portfolio Web — Tiziano Espinoza

Portafolio personal desarrollado con HTML, CSS y JavaScript puro.

## Características

*   **Diseño:** Paleta de colores cálidos, tipografía "Outfit" y componentes con "Glassmorphism" y sombras sutiles.
*   **Animaciones:** Fondo interactivo con partículas (Canvas), fade-ins al hacer scroll y smooth scroll.
*   **Contenido:** 
    *   Sobre mí.
    *   Habilidades técnicas (Avanzado e Intermedio).
    *   Proyectos destacados (GIE, Base de Datos, Homelab).
    *   Contacto (Email, LinkedIn).
    *   Botón para descargar el CV en PDF directamente.

## Estructura del proyecto

```text
portfolio/
├── index.html       # Página principal
├── style.css        # Sistema de estilos y diseño
├── script.js        # Lógica de animaciones y UI
├── README.md        # Este archivo
└── assets/
    └── cv/
        └── CV_Tiziano_Espinoza.pdf  # Archivo del CV para descargar
```

## Desarrollo Local

Para previsualizar el sitio en tu computadora, podés utilizar cualquier servidor local. Si tenés Python instalado, simplemente abrí una terminal en esta carpeta y ejecutá:

```bash
python3 -m http.server 8000
```

Luego, abrí tu navegador en `http://localhost:8000`.

## Despliegue en GitHub Pages

Este proyecto está 100% listo para ser desplegado en GitHub Pages, ya que es completamente estático.

1.  Creá un nuevo repositorio en GitHub.
2.  Subí el contenido de esta carpeta (`portfolio/`) a la rama `main` del repositorio.
3.  Andá a **Settings** > **Pages**.
4.  En "Build and deployment", asegurate de que "Source" esté en **Deploy from a branch**.
5.  Elegí la rama `main` (o la que uses) y la carpeta `/(root)`.
6.  Hacé clic en **Save**. ¡Y listo! Tu portfolio estará disponible en `https://tu-usuario.github.io/tu-repo/`.
