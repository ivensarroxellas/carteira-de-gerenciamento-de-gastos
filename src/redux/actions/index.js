import { USER_ACTION, REQUEST_API,
  RESPONSE_API } from './actionTypes';

export const handleUser = (email) => ({ type: USER_ACTION, payload1: email });
export const requestApi = () => ({ type: REQUEST_API });
export const responseApi = (payload2) => ({ type: RESPONSE_API, payload2 });

// middleware -- thunk  - AULA DO RAFA
export function fetchApi() {
  return async (dispatch) => {
    dispatch(requestApi());
    const responseApiCurrency = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resultApi = await responseApiCurrency.json();
    return dispatch(responseApi(resultApi));
  };
}
