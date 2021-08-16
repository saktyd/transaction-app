import {combineReducers} from 'redux';

const initialState = {
  transactions: [],
  isLoadingTransactions: false,
  errorTransactions: false,
};

const transcationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRANSACTIONS_BEGIN': {
      return {
        ...state,
        isLoadingTransactions: true,
        errorTransactions: false,
      };
    }

    case 'FETCH_TRANSACTIONS_SUCCESS': {
      return {
        ...state,
        isLoadingTransactions: false,
        transactions: Object.values(action.payload.data),
      };
    }

    case 'FETCH_TRANSACTIONS_ERROR': {
      return {
        ...state,
        isLoadingTransactions: false,
        errorTransactions: action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  transc: transcationsReducer,
});
