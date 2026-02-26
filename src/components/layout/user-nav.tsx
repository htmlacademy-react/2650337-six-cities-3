import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {AuthStatus} from '../../const.ts';

type UserNavProps = {
  isAuth: AuthStatus;
}

function UserNav({isAuth}: UserNavProps):ReactElement {

  if (isAuth === AuthStatus.Auth) {
    return (
      <nav className='header__nav'>
        <ul className='header__nav-list'>

          <li className='header__nav-item user'>
            <Link className='header__nav-link header__nav-link--profile' to='#'>
              <div className='header__avatar-wrapper user__avatar-wrapper'></div>
              <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
              <span className='header__favorite-count'>3</span>
            </Link>
          </li>

          <li className='header__nav-item'>
            <Link className='header__nav-link' to='#'>
              <span className='header__signout'>Sign out</span>
            </Link>
          </li>

        </ul>
      </nav>
    );
  }

  return (
    <nav className='header__nav'>
      <ul className='header__nav-list'>
        <li className='header__nav-item user'>
          <a className='header__nav-link header__nav-link--profile' href='#'>
            <div className='header__avatar-wrapper user__avatar-wrapper'>
            </div>
            <span className='header__login'>Sign in</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default UserNav;
