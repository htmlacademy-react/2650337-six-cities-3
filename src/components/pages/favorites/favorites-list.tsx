import {ReactElement} from 'react';
import {Offer} from '../../../types/offer.ts';

import FavoritesCityGroup from './favorites-city-group.tsx';

type FavoritesListProps = {
  offers: Offer[];
};

function FavoritesList({offers}: FavoritesListProps): ReactElement {
  return (
    <section className='favorites'>
      <h1 className='favorites__title'>Saved listing</h1>

      <ul className='favorites__list'>
        <FavoritesCityGroup offers={offers} />
      </ul>

    </section>
  );
}

export default FavoritesList;
