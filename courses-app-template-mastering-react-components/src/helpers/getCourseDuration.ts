export const getCourseDuration = (totalMinutes: number): string => {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  const hh = String(h).padStart(2, '0');
  const mm = String(m).padStart(2, '0');
  const unit = h === 1 ? 'hour' : 'hours';
  return `${hh}:${mm} ${unit}`;
};


