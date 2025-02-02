export const formatDate = (dateString: string): string => {
  const days = ['DOM.', 'LUN.', 'MAR.', 'MIÉ.', 'JUE.', 'VIE.', 'SÁB.'];
  const months = [
    'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
    'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
  ];

  // Convertir el string a un objeto Date
  const date = new Date(dateString);

  // Extraer los valores necesarios
  const dayName = days[date.getDay()]; // Día de la semana
  const dayNumber = date.getDate(); // Día del mes
  const monthName = months[date.getMonth()]; // Nombre del mes
  const year = date.getFullYear(); // Año

  // Formatear la fecha incluyendo el año
  return `${dayName} ${dayNumber} ${monthName} ${year}`;
};
