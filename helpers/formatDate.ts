import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

export const formatDate = (
  date: string = '',
  format: string = 'DD/MM/YYYY',
): string => dayjs(date).format(format);
