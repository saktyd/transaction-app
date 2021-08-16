import axios from 'axios';
const request = axios.create({
  baseURL: 'https://nextar.flip.id/frontend-test',
  timeout: 10000,
});

// Fetch Transaction List
export const fetchTransactionsBegin = () => ({
  type: 'FETCH_TRANSACTIONS_BEGIN',
});

export const fetchTransactionsSuccess = data => {
  return {
    type: 'FETCH_TRANSACTIONS_SUCCESS',
    payload: {
      data: data,
    },
  };
};

export const fetchTransactionsError = error => ({
  type: 'FETCH_TRANSACTIONS_ERROR',
  payload: {
    error: error,
  },
});

export const fetchTransactions = () => {
  return async dispatch => {
    dispatch(fetchTransactionsBegin());
    await request
      .get()
      .then(res => {
        dispatch(fetchTransactionsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchTransactionsError(err.response?.data));
      });
  };
};
