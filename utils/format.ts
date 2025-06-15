import dayjs from 'dayjs';

export function formatDate(isoDate: string | null | undefined) {
  if (!isoDate) return '';

  const date = dayjs(isoDate);
  if (!date.isValid()) return '';

  return date.format('DD.MM.YYYY');
}

export function formatNumber(value: string | number, unit?: string) {
  const numericValue = Number(value);
  const formattedNumber = `${numericValue.toLocaleString('ru-RU', { minimumFractionDigits: 0 })}`;
  return unit ? formattedNumber + ` ${unit}` : formattedNumber;
}
