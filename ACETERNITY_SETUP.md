# Container Scroll Animation - Aceternity UI

Este componente de Aceternity UI ha sido instalado correctamente en tu proyecto.

## 📦 Dependencias Instaladas

- ✅ `framer-motion` - Para animaciones fluidas
- ✅ `tailwindcss-animate` - Utilidades de animación de Tailwind
- ✅ `class-variance-authority` - Para variantes de componentes
- ✅ `clsx` - Para gestión de clases
- ✅ `tailwind-merge` - Para fusionar clases de Tailwind

## 🎨 Configuración Completada

### 1. Tailwind CSS
- Variables CSS de shadcn/ui agregadas a `src/index.css`
- Soporte para modo oscuro configurado

### 2. Path Aliases
- Configurado `@/*` para importaciones desde `src/`
- `tsconfig.json` y `vite.config.js` actualizados

### 3. Utilidades
- Función `cn()` creada en `src/lib/utils.ts`

### 4. Componentes
- `container-scroll-animation.tsx` instalado en `src/components/ui/`
- Ejemplo de uso en `src/components/HeroScrollDemo.tsx`

## 🚀 Uso

### Importar el componente

\`\`\`tsx
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
\`\`\`

### Ejemplo básico

\`\`\`tsx
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function MyComponent() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Tu Título Aquí <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Texto Grande
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/tu-imagen.jpg"
          alt="descripción"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full"
        />
      </ContainerScroll>
    </div>
  );
}
\`\`\`

### Usando el ejemplo incluido

\`\`\`tsx
import { HeroScrollDemo } from "@/components/HeroScrollDemo";

function App() {
  return (
    <div>
      <HeroScrollDemo />
    </div>
  );
}
\`\`\`

## 🎯 Características

- ✨ Animación de scroll suave con perspectiva 3D
- 📱 Responsive - se adapta a móvil y desktop
- 🌓 Soporte para modo oscuro
- ⚡ Optimizado con Framer Motion
- 🎨 Completamente personalizable

## 🛠️ Personalización

### Cambiar colores del contenedor

Edita las clases en `container-scroll-animation.tsx`:

\`\`\`tsx
className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full 
  border-4 border-[#TU_COLOR] p-2 md:p-6 bg-[#TU_COLOR] rounded-[30px]"
\`\`\`

### Ajustar altura del scroll

Modifica la clase `h-[60rem]` en el div principal:

\`\`\`tsx
<div className="h-[80rem] md:h-[100rem] flex items-center justify-center relative p-2 md:p-20">
\`\`\`

### Personalizar animaciones

Ajusta los valores en los hooks de Framer Motion:

\`\`\`tsx
const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]); // inicio, fin
const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
\`\`\`

## 📚 Recursos

- [Aceternity UI](https://ui.aceternity.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

## ⚡ Troubleshooting

Si encuentras errores de importación:
1. Asegúrate de que el servidor esté ejecutándose: `npm run dev`
2. Limpia el caché: `rm -rf node_modules/.vite`
3. Reinicia el servidor

Si las animaciones no funcionan:
1. Verifica que `framer-motion` esté instalado
2. Comprueba que las variables CSS estén en `src/index.css`
