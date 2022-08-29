import { REQUEST_API, RESPONSE_API, GET_API_ERROR } from '../actions/actionTypes';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state,
    };
  case RESPONSE_API:
    return { ...state,
      currencies: Object.keys(action.payload2).filter((currency) => currency !== 'USDT'),
      /* expenses: [...action.payload2.expenses],
      editor: action.payload2.editor,
      idToedit: action.payload2.idToedit, */
    };
  case GET_API_ERROR:
    return { ...state,
      error: err,
    };
  default:
    return state;
  }
};
export default wallet;
