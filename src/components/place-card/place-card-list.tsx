import {ReactElement} from 'react';
import { Offer } from '../../types/offer.ts';
import PlaceCard from './place-card.tsx';
import {CardView} from '../../const.ts';

type PlaceCardListProps = {
  offers: Offer[];
  onCardHover: (id: string) => void;
  onCardLeave: () => void;
}

function PlaceCardList({ offers, onCardHover, onCardLeave}: PlaceCardListProps): ReactElement {

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((card) => (
        <PlaceCard
          key={card.id}
          data={card}
          onHover={onCardHover}
          onLeave={onCardLeave}
          viewMode={CardView.Cities}
        />
      ))}
    </div>
  );
}

export default PlaceCardList;
