import { USER_ACTION, WALLET_ACTION } from './actionTypes';

export const handleUser = (email) => ({ type: USER_ACTION, payload1: email });
export const handleWallet = (wallet) => ({ type: WALLET_ACTION, payload2: wallet });
