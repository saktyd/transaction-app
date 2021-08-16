import {TRS_STATUS} from '../../constant';

export const getTrsStatus = status => {
  return status === TRS_STATUS.SUCCESS
    ? 'Berhasil'
    : status === TRS_STATUS.PENDING
    ? 'Pengecekan'
    : status;
};

export const toTitleCase = text => {
  return text.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const getBankName = text => {
  let bankName = '';
  const vowels = ['a', 'i', 'u', 'e', 'o'];
  text = text.toLowerCase();
  if (text) {
    const splitText = text.split(' ');
    if (splitText.length > 1) {
      bankName = toTitleCase(text);
    } else if (text.length > 1 && !vowels.includes(text.charAt(1))) {
      bankName = text.toUpperCase();
    } else {
      bankName = toTitleCase(text);
    }
  }
  return bankName;
};
