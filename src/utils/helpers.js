/**
 * Formatea una fecha al formato español
 * @param {Date} date - La fecha a formatear
 * @returns {string} Fecha formateada
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

/**
 * Capitaliza la primera letra de un string
 * @param {string} str - El string a capitalizar
 * @returns {string} String capitalizado
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
