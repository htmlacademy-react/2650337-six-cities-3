import {ReactElement, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useDispatch} from 'react-redux';

import MainPage from '../pages/main-page/main-page.tsx';
import LoginPage from '../pages/login/login-page.tsx';
import FavoritesPage from '../pages/favorites/favorites-page.tsx';
import OfferPage from '../pages/offer/offer-page.tsx';
import PageNotFound from '../pages/not-found/page-not-found.tsx';

import PrivateRoute from '../private-route/private-route.tsx';

import {AppRoute, AuthStatus} from '../../const.ts';
import {mockData} from '../../mock/mock-data.ts';
import {setOffers} from '../../store/action.ts';


function App(): ReactElement {
  // const isAuth = AuthStatus.NoAuth;
  const isAuth = AuthStatus.Auth;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOffers(mockData));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.MainPage}
          element={ <MainPage isAuth={isAuth} /> }
        />

        <Route
          path={AppRoute.LoginPage}
          element={<LoginPage />}
        />

        <Route
          path={AppRoute.FavoritesPage}
          element={
            <PrivateRoute isAuth={isAuth}>
              <FavoritesPage isAuth={isAuth} />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.OfferPage}
          element={<OfferPage isAuth={isAuth} />}
        />

        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
