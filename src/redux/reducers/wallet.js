import { REQUEST_API, RESPONSE_API, RESPONSE_BUT } from '../actions/actionTypes';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  isLoading: false,
};
const newQuote = (expenses, fetch) => {
  const reduceCurrency = Object.entries(fetch).reduce((acc, curr) => { // [[chave1,value1], [chave2,value2]]...]
    const [key, value] = curr;
    acc[key] = value;
    return acc;
  }, {});
  expenses.exchangeRates = reduceCurrency;
  return expenses;
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state,
      isLoading: true,
    };
  case RESPONSE_API:
    return { ...state,
      isLoading: false,
      currencies: Object.keys(action.payload2).filter((currency) => currency !== 'USDT'),
    };
  case RESPONSE_BUT: return { ...state,
    expenses: [...state.expenses, newQuote(action.expenses, action.resultCurrency)],
  };

  default:
    return state;
  }
};
export default wallet;
