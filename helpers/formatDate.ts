import dayjs from 'dayjs';

dayjs.extend(advancedFormat);

export const formatDate = (
  date: string = '',
  format: string = 'DD/MM/YYYY',
): string => dayjs(date).format(format);
