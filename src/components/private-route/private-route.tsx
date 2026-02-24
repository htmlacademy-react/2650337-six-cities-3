import {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const.ts';

type PrivateRouteProps = {
  isAuth: AuthStatus;
  children: ReactElement;
};

function PrivateRoute({ isAuth, children }: PrivateRouteProps): ReactElement {
  if (isAuth === AuthStatus.Unknown) {
    return <div>Loading...</div>;
  }

  if (isAuth === AuthStatus.NoAuth) {
    return <Navigate to={AppRoute.LoginPage} replace />;
  }

  return children;
}
export default PrivateRoute;
