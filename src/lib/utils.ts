import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTextSchedule({ dayFrom, dayTo, timeFrom, timeTo }: { dayFrom?: string, dayTo?: string, timeFrom?: string, timeTo?: string }) {

  const time = (timeFrom && timeTo) ? `${formatHourWithAmPm(timeFrom)} - ${formatHourWithAmPm(timeTo)}` : 'Cerrado'

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
