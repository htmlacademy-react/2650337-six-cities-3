import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../../const.ts';

import Header from '../../layout/header.tsx';
import UserNav from '../../layout/user-nav.tsx';
import FavoritesList from './favorites-list.tsx';
import {useSelector} from 'react-redux';
import {getFavorites} from '../../../store/selectors.ts';

type FavoritesPageProps = {
  isAuth: AuthStatus;
}

function FavoritesPage({isAuth}: FavoritesPageProps): ReactElement {

  const favorites = useSelector(getFavorites);


  return (
    <div className='page'>

      <header className='header'>
        <div className='container'>
          <Header rightSlot={<UserNav isAuth={isAuth}/>}/>
        </div>
      </header>

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <FavoritesList offers={favorites}/>
        </div>
      </main>

      <footer className='footer container'>
        <Link className='footer__logo-link' to={AppRoute.MainPage}>
          <img className='footer__logo' src='/img/logo.svg' alt='6 cities logo' width='64' height='33'/>
        </Link>
      </footer>

    </div>
  );
}

export default FavoritesPage;
