import { USER_ACTION, REQUEST_API,
  RESPONSE_API, GET_API_ERROR } from './actionTypes';

export const handleUser = (email) => ({ type: USER_ACTION, payload1: email });
export const requestApi = () => ({ type: REQUEST_API });
export const responseApi = (payload2) => ({ type: RESPONSE_API, payload2 });
export const getApiError = (err) => ({ type: GET_API_ERROR, err });

// middleware -- thunk  - AULA DO RAFA
export function fetchApi() {
  return async (dispatch) => {
    dispatch(requestApi());
    try {
      const responseApiCurrency = await fetch('https://economia.awesomeapi.com.br/json/all');
      const resultApi = await responseApiCurrency.json();
      return dispatch(responseApi(resultApi));
    } catch (error) {
      dispatch(getApiError(error.message));
    }
  };
}
