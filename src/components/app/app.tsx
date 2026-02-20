import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../pages/main-page/main-page.tsx';
import LoginPage from '../pages/login/login-page.tsx';
import FavoritesPage from '../pages/favorites/favorites-page.tsx';
import OfferPage from '../pages/offer/offer-page.tsx';
import PageNotFound from '../pages/not-found/page-not-found.tsx';

import PrivateRoute from '../private-route/private-route.tsx';

import {AppRoute, AuthStatus} from '../../const.ts';

type AppProps = {
  cardsAmount: number;
}

function App({cardsAmount}: AppProps): ReactElement {
  const isAuth = AuthStatus.NoAuth;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MainPage} element={<MainPage cardsAmount={cardsAmount}/>} />
        <Route path={AppRoute.LoginPage} element={<LoginPage />} />
        <Route
          path={AppRoute.FavoritesPage}
          element={
            <PrivateRoute isAuth={isAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.OfferPage} element={<OfferPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
