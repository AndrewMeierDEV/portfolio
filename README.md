# Portfolio de Andres Meier

Portfolio personal de una sola página, construido con React 19, Vite 8 y JavaScript. Incluye presentación, tecnologías, conceptos de proyectos y contacto por email. El diseño está definido en CSS propio, con Tailwind CSS 4 integrado.

Sitio configurado: https://andrewmeierDEV.github.io/portfolio/

## Desarrollo local

Requiere Node.js 20.19+ de la rama 20, o Node.js 22.12+ y npm.

```sh
npm ci
npm run dev
```

Abrí la dirección que muestra Vite en la terminal, con la ruta `/portfolio/`.

## Comandos

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga automática. |
| `npm run lint` | Revisión estática con Oxlint. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve el último build para revisarlo localmente. |
| `npm run deploy` | Compila y publica `dist/` en la rama `gh-pages` del remoto. |

## Estructura

```text
src/
  main.jsx                  # Inicialización de React e importación del CSS
  App.jsx                   # Composición de las secciones de la página
  components/
    Header.jsx
    Hero.jsx
    MatrixRain.jsx          # Animación canvas y su ciclo de vida
    Stack.jsx
    Projects.jsx            # Sección y tarjetas de proyectos
    ProjectPreview.jsx      # Mockups de dashboard, estudio y tareas
    Contact.jsx
    Footer.jsx
  data/
    portfolio.js            # Tecnologías y datos de los proyectos
  index.css                 # Estilos, responsive y preferencias de movimiento CSS
public/
  favicon.svg
  social-card.svg            # Fuente editable de la tarjeta social
  social-card.png            # Imagen de 1200 × 630 para compartir
  andres-meier-hero.jpeg     # Fotografía personal conservada, sin uso actual
index.html                  # Metadatos SEO, Open Graph y Twitter Cards
vite.config.js              # Plugins y ruta base de publicación
```

## Actualizar el contenido

- Editá tecnologías y proyectos en `src/data/portfolio.js`. Los tipos de previsualización disponibles son `dashboard`, `studio` y `tasks`.
- Editá presentación y contacto en `Hero.jsx` y `Contact.jsx`.
- Ajustá estilos y tamaños de pantalla en `src/index.css`.
- La animación Matrix conserva su comportamiento: continúa al hacer scroll y al activar movimiento reducido; se suspende mientras la pestaña está oculta.
- Los proyectos actuales son conceptos y no tienen enlaces a demos o repositorios. El contacto abre el cliente de correo mediante `mailto:`; no requiere backend.

## Metadatos y tarjeta social

Los metadatos están en el HTML inicial para que se puedan leer sin ejecutar React. Incluyen título, descripción, URL canónica, Open Graph y Twitter Cards, con URL absoluta de la imagen PNG.

Para editar la tarjeta, modificá `public/social-card.svg` y regenerá el PNG. Con ImageMagick y la fuente DejaVu Sans instalados:

```sh
convert -background '#090c0a' public/social-card.svg public/social-card.png
```

Estas herramientas solo se necesitan para regenerar la imagen; el desarrollo y el build usan el PNG ya incluido.

## Publicar en GitHub Pages

1. Ejecutá `npm run lint` y `npm run build`.
2. Revisá el resultado con `npm run preview` en `/portfolio/`.
3. Con acceso de escritura al remoto Git, ejecutá `npm run deploy`.
4. Configurá GitHub Pages para publicar desde la raíz de la rama `gh-pages`.

Si cambiás el dominio o el nombre del repositorio, actualizá `base` en `vite.config.js`, `homepage` en `package.json` y las URL absolutas canónica, Open Graph y Twitter en `index.html`.

La imagen social estará accesible al publicar. Las plataformas pueden mantener en caché una vista previa anterior.
