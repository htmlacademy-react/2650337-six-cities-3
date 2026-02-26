import {ReactElement, useMemo} from 'react';
import { Offer } from '../../types/offer.ts';
import PlaceCard from './place-card.tsx';
import {getRandomCards} from '../../utils.ts';
import {CardView} from '../../const.ts';

type PlaceCardListProps = {
  cardsAmount: number;
  offers: Offer[];
  onCardHover: (id: string) => void;
  onCardLeave: () => void;
}

function PlaceCardList({ offers, cardsAmount, onCardHover, onCardLeave}: PlaceCardListProps): ReactElement {
  const cards = useMemo(() => getRandomCards(offers, cardsAmount), [offers, cardsAmount]);
  return (
    <div className='cities__places-list places__list tabs__content'>
      {cards.map((card) => (
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
