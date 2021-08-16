export const getRupiah = value => {
  if (value) {
    return 'Rp' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return '0';
};
