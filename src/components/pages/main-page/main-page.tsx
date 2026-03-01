import {ReactElement, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {AuthStatus, MapName} from '../../../const.ts';
import {RootState} from '../../../store';

import PlaceCardList from '../../place-card/place-card-list.tsx';
import Map from '../../map/map.tsx';
import Header from '../../layout/header.tsx';
import UserNav from '../../layout/user-nav.tsx';
import Locations from './locations.tsx';
import PlacesSorting from './places-sorting.tsx';
type MainPageProps = {
  isAuth: AuthStatus;
}

function MainPage({isAuth}: MainPageProps): ReactElement {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const offers = useSelector((state: RootState) => state.offers);
  const city = useSelector((state: RootState) => state.city);
  const filteredOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === city.name),
    [offers, city.name]
  );
  const handleCardLeave = () => setActiveOfferId(null);

  return (
    <div className='page page--gray page--main'>

      <header className='header'>
        <div className='container'>
          <Header rightSlot={<UserNav isAuth={isAuth}/>} />
        </div>
      </header>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>

        <div className='tabs'>
          <Locations />
        </div>

        <div className='cities'>
          <div className='cities__places-container container'>

            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{filteredOffers.length} places to stay in {city.name}</b>

              <PlacesSorting />

              <PlaceCardList
                offers={filteredOffers}
                onCardHover={setActiveOfferId}
                onCardLeave={handleCardLeave}
              />

            </section>

            <div className='cities__right-section'>
              <Map
                offers={filteredOffers}
                activeOfferId={activeOfferId}
                mapName={MapName.Cities}
                isHoverActive
              />
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}

export default MainPage;

