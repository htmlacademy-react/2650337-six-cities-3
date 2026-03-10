import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { Offer } from '../types/offer';
import { setActiveCity, setOffers } from './action';

export type State = {
  city: typeof CITIES[number];
  offers: Offer[];
};

const initialState: State = {
  city: CITIES[0],
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
