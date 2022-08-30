import { USER_ACTION, REQUEST_API,
  RESPONSE_API, RESPONSE_BUT } from './actionTypes';

export const handleUser = (email) => ({ type: USER_ACTION, payload1: email });
export const requestApi = () => ({ type: REQUEST_API });
export const responseApi = (payload2) => ({ type: RESPONSE_API, payload2 });
export const responseNewApi = (expenses, resultCurrency) => ({
  type: RESPONSE_BUT, expenses, resultCurrency });

// middleware -- thunk  - AULA DO RAFA
export function fetchApi() {
  return async (dispatch) => {
    dispatch(requestApi());
    const responseApiCurrency = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resultApi = await responseApiCurrency.json();
    return dispatch(responseApi(resultApi));
  };
}

export function fetchUpdatedCurrencies(expenses) {
  return async (dispatch) => {
    dispatch(requestApi());
    try {
      const responseApiNewCurrency = await fetch('https://economia.awesomeapi.com.br/json/all');
      const resultCurrency = await responseApiNewCurrency.json();
      dispatch(responseNewApi(expenses, resultCurrency));
    } catch (error) {
      console.log('ERRRROU');
    }
  };
}
