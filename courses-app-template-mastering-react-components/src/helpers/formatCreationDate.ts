// input: 'MM/DD/YYYY' -> output: 'DD.MM.YYYY'
export const formatCreationDate = (mdy: string): string => {
  const [m, d, y] = mdy.split('/');
  if (!m || !d || !y) return mdy;
  return `${d.padStart(2, '0')}.${m.padStart(2, '0')}.${y}`;
};
