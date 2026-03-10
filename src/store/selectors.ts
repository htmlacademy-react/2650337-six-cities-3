import {RootState} from './index';

export const getFavorites = (state: RootState) => state.offers.filter((offer) => offer.isFavorite);
