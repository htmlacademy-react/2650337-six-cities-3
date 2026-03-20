import {createAsyncThunk} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {AxiosInstance} from 'axios';
import {setAuthorizationStatus} from './reducer.ts';
import {AuthStatus} from '../const.ts';

export const fetchOffers = createAsyncThunk<
  Offer[],
  void,
  { extra: AxiosInstance }
>(
  'offers/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>('/offers');
    return data;
  }
);

export const checkAuth = createAsyncThunk<
  void,
  void,
  { extra: AxiosInstance }
>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get('/login');
      dispatch(setAuthorizationStatus(AuthStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthStatus.NoAuth));
    }
  }
);

export const login = createAsyncThunk<
  void,
  {email: string; password: string},
  {extra: AxiosInstance}
>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    await api.post('/login', {email, password});
    dispatch(setAuthorizationStatus(AuthStatus.Auth));
  }
);
