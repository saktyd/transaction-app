import {BULAN} from '../../constant';

export const getDefaultDate = d => {
  const newDate = new Date(d);
  const date = newDate.getDate();
  const year = newDate.getFullYear();
  const month = BULAN[newDate.getMonth()];
  return `${date} ${month} ${year}`;
};
