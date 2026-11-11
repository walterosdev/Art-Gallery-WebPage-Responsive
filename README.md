# Modern Art Gallery — Sitio web responsivo

Sitio web de dos páginas para una galería de arte moderno, maquetado con **HTML** y **Tailwind CSS v4**, y servido con **Vite**. El diseño se adapta a móvil, tablet y escritorio.

## Páginas

| Página | Archivo | Contenido |
|---|---|---|
| Inicio | `Index.html` | Hero con el título de la galería, sección "Your Day at the Gallery", sección "Come & Be Inspired" y footer |
| Ubicación | `Location.html` | Mapa con pin, botón "Back to Home", dirección y horario de la galería, y footer |

## Tecnologías

- [Vite](https://vite.dev/): servidor de desarrollo y empaquetado
- [Tailwind CSS v4](https://tailwindcss.com/) con el plugin `@tailwindcss/vite`
- Google Fonts: **Big Shoulders Display** (700, 900) y **Outfit** (300)

## Estructura del proyecto

```
modern-art-gallery-responsive/
├── Index.html          # Página de inicio
├── Location.html       # Página de ubicación
├── public/             # Archivos estáticos (favicon, iconos)
├── src/
│   ├── assets/         # Imágenes SVG (cuadros, mapas, logos, iconos sociales)
│   └── style.css       # Tailwind, tema y utilidades personalizadas
├── dist/               # Versión de producción generada con `npm run build`
├── vite.config.js      # Configuración de Vite + Tailwind + páginas del build
└── package.json
```

## Instalación y uso

Requisitos: [Node.js](https://nodejs.org/) 20 o superior.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Generar la versión de producción en /dist
npm run build

# Previsualizar la versión de producción
npm run preview
```

### Build multipágina

Por defecto, Vite solo empaqueta la página principal. Para que `Location.html` también se incluya en `dist/`, las dos páginas están declaradas en `vite.config.js`:

```js
build: {
  rollupOptions: {
    input: {
      main: resolve(import.meta.dirname, 'Index.html'),
      location: resolve(import.meta.dirname, 'Location.html'),
    },
  },
},
```

Si añades una página nueva, agrégala también aquí.

## Diseño responsivo

El enfoque es **mobile first**: las clases sin prefijo se aplican en móvil y los prefijos las sobrescriben en pantallas más grandes.

| Breakpoint | Prefijo | Ancho mínimo | Dispositivo |
|---|---|---|---|
| Base | — | 0 | Móvil |
| `md` | `md:` | 48rem (768px) | Tablet |
| `hm` | `hm:` | 90rem (1440px) | Escritorio |

El breakpoint `hm` es personalizado y está definido en `src/style.css`:

```css
--breakpoint-hm: 90rem;
```

> **Nota:** define los breakpoints siempre en `rem`. Si mezclas `px` y `rem`, Tailwind no puede ordenarlos y las media queries salen en el orden equivocado.

## Tema y estilos

Variables definidas en `@theme` (`src/style.css`):

| Variable | Valor | Uso |
|---|---|---|
| `--primary` | `#D5966C` | Acento (naranja) |
| `--secondary` | `#151515` | Negro |
| `--tertiary` | `#444444` | Gris de texto |
| `--quaternary` | `#FFFFFF` | Blanco |
| `--font-big-shoulders` | Big Shoulders Display | Títulos → clase `font-big-shoulders` |
| `--font-outfit` | Outfit | Texto → clase `font-outfit` |

Por defecto, el `body` usa **Outfit Light (300)**.

### Utilidades personalizadas

Botones creados con `@utility`:

- `button11`, `textbutton11`, `spanbutton11`: botón **"Our Location"**, con la flecha a la derecha
- `button12`, `textbutton12`, `spanbutton12`: botón **"Back to Home"**, con la flecha a la izquierda

Al pasar el ratón por encima, los colores del texto y de la flecha se intercambian con una transición.

## Autor

**Luis Walteros** — [walteros.dev@gmail.com](mailto:walteros.dev@gmail.com)

## Licencia

Proyecto con fines educativos.
