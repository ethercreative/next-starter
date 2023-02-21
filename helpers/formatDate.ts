import dayjs from 'dayjs';

export const formatDate = (date: string, format: string = 'DD/MM/YYYY'): string =>
  dayjs(date).format(format);
