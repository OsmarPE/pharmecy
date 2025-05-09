import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTextSchedule({ dayFrom, dayTo, timeIn, timeOut }: { dayFrom?: string, dayTo?: string, timeIn?: string, timeOut?: string }) {

  const time = (timeIn && timeOut) ? `${formatHourWithAmPm(timeIn)} - ${formatHourWithAmPm(timeOut)}` : 'Cerrado'

  if(!dayTo){
    return `${dayFrom} • ${time}`
  }

  return `${dayFrom} a ${dayTo} • ${time}`
}
function formatHourWithAmPm(time: string) {

  const timeSplit = time.split(':');
  const hour = parseInt(timeSplit[0]);
  const minute = parseInt(timeSplit[1]);

  const period = hour >= 12 ? 'PM' : 'AM';
  
  const hour12 = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
  
  return `${hour12}:${minute.toString().padStart(2, '0')} ${period}`;
}


const regex = /^\d+-\d+\.(webp|jpg|jpeg|png)$/i;


export const validateImage = (name: string) => {
  return regex.test(name);
}

export async function createFileFromImageUrl(fileName = "image.webp") {
  try {

    const url = import.meta.env.VITE_API_URL + '/' + fileName
    // Hacer una solicitud para obtener la imagen como Blob
    const response = await fetch(url);
    if (!response.ok) throw new Error("No se pudo cargar la imagen");
    
    const blob = await response.blob();
    
    // Crear un objeto File a partir del Blob
    const file = new File([blob], fileName, { type: blob.type });
    
    return file;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}