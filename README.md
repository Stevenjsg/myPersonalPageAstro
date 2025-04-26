# 📄 Mi Página Personal - Astro + TailwindCSS + Bento UI

¡Bienvenido a mi proyecto de página personal! 🚀

Este proyecto es un CV interactivo y moderno, construido con Astro 5, TailwindCSS 4 y una estética basada en Bento Grids. Incluye un diseño responsivo, exportación a PDF, navegación suave y carruseles.

## ✨ Tecnologías utilizadas

- [Astro 5](https://astro.build/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React 18 (para íconos y componentes si es necesario)](https://react.dev/)
- [Heroicons / Iconos personalizados](https://heroicons.com/)
- [JSON Resume](https://jsonresume.org/) (estructura de datos)

## 📦 Instalación

1. Clona el repositorio:

```bash
pnpm create astro@latest
# o clona este proyecto
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Ejecuta el servidor de desarrollo:

```bash
pnpm dev
```

El proyecto estará disponible en `http://localhost:4321`

## 🚀 Características principales

- **Diseño Bento Grid:** disposición tipo mosaico adaptable.
- **Exportación a PDF:** preparado para imprimir o guardar como PDF.
- **Carrusel de habilidades:** navegación horizontal de tecnologías.
- **Modo responsive:** adaptado a pantallas móviles, tablets y desktop.
- **Accesibilidad:** mejoras con `aria-label` y navegación fluida.
- **Tailwind utilities:** uso completo de utilidades para estilos rápidos.

## 📁 Estructura del proyecto

```bash
src/
├── components/
│   ├── cv/           # Componentes de cada sección del CV
│   ├── icons/        # Componentes de íconos SVG
│   └── Header.astro  # Navegación superior
├── data/
│   └── mockedCV.json # Datos simulados del CV
├── pages/
│   └── index.astro   # Página principal
└── layouts/
    └── Layout.astro  # Layout base
```
