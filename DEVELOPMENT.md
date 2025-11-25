# Guía de Desarrollo - Chiiko

## 🎯 Estructura de Carpetas

### `/src/components`
Componentes React reutilizables. Cada componente debe tener su propio archivo JSX y opcionalmente su archivo CSS.

**Ejemplo:**
```jsx
// Button.jsx
export default function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>
}
```

### `/src/pages`
Componentes que representan páginas completas de la aplicación.

### `/src/hooks`
Custom hooks de React para lógica reutilizable.

**Ejemplo:**
```jsx
// useLocalStorage.js
import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  // ... implementación
}
```

### `/src/utils`
Funciones auxiliares y utilidades que no dependen de React.

### `/src/assets`
Imágenes, iconos, fuentes y otros archivos estáticos.

### `/src/styles`
Estilos globales y variables CSS.

## 🛠️ Convenciones de Código

### Nombres de Archivos
- Componentes: PascalCase (ej: `Button.jsx`, `HomePage.jsx`)
- Hooks: camelCase con prefijo "use" (ej: `useLocalStorage.js`)
- Utils: camelCase (ej: `helpers.js`, `validators.js`)

### Componentes
```jsx
// Componente funcional con props destructuradas
export default function ComponentName({ prop1, prop2 }) {
  return <div>{prop1}</div>
}
```

### Estilos
- Usa CSS Modules para componentes individuales
- Variables CSS en `:root` para valores globales
- Mobile-first responsive design

## 📦 Agregar Dependencias

```bash
# Dependencia de producción
npm install nombre-paquete

# Dependencia de desarrollo
npm install -D nombre-paquete
```

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview

# Lint
npm run lint
```

## 🎨 Estilos y Tema

Las variables de color están definidas en `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --text-light: #666;
}
```

## 📝 Tips

1. Mantén los componentes pequeños y enfocados
2. Usa props descriptivas
3. Comenta código complejo
4. Prueba en diferentes tamaños de pantalla
5. Optimiza imágenes antes de agregarlas

## 🐛 Debug

Para debugging en React:
- Usa React DevTools (extensión de navegador)
- Console.log estratégico
- Breakpoints en DevTools del navegador

## 📚 Recursos

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)
