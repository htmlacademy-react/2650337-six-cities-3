import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';
import { CITIES, AuthStatus } from '../const';
import { Offer } from '../types/offer';
import {fetchOffers} from './api-actions.ts';

export type State = {
  city: typeof CITIES[number];
  offers: Offer[];
  isLoading: boolean;
  authorizationStatus: AuthStatus;
};

const initialState: State = {
  city: CITIES[0],
  offers: [],
  isLoading: false,
  authorizationStatus: AuthStatus.Unknown,
};

const offerSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setActiveCity(state, action: PayloadAction<typeof CITIES[number]>) {
      state.city = action.payload;
    },
    setAuthorizationStatus(state, action: PayloadAction<AuthStatus>) {
      state.authorizationStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {setActiveCity, setAuthorizationStatus} = offerSlice.actions;
export default offerSlice.reducer;
