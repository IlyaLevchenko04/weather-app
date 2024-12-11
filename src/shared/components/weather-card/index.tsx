import { ForecastItem } from '@shared/types/forecast';

import s from './index.module.scss';
import { Link } from 'react-router';

interface IProps extends ForecastItem {
  cityName: string;
  id: number;
}

export const WeatherCard: React.FC<IProps> = props => (
  <article id={`${props.id}`}>
    <Link to={`/${props.id}`} className={s.root}>
      <h3 className={s.title}>{props.cityName}</h3>
      <span className={s.temperature}>
        {Number(props.main.temp).toFixed(0)}°
      </span>
      <p>{props.weather[0].description}</p>
    </Link>
  </article>
);
