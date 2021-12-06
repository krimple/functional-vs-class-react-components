import format from 'date-format';

export function getDateTimeForInput(input = new Date()) {
    return format('yyyy-MM-ddThh:mm:ss', input); 
}