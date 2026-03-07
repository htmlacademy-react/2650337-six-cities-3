import {ReactElement} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Location from './location.tsx';
import {CITIES} from '../../../const.ts';
import {RootState} from '../../../store';
import {changeCity} from '../../../store/action.ts';

function Locations(): ReactElement {
  const dispatch = useDispatch();
  const activeCity = useSelector((state: RootState) => state.city);

  return (
    <section className='locations container'>

      <ul className='locations__list tabs__list'>

        {CITIES.map((city) => (
          <Location
            key={city.name}
            city={city}
            isActive={city.name === activeCity.name}
            onClick={() => dispatch(changeCity(city))}
          />
        ))}
      </ul>

    </section>
  );
}

export default Locations;
