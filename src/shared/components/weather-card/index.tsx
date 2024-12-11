import { ForecastItem } from '@shared/types/forecast';

import s from './index.module.scss';
import { Link } from 'react-router';
import { Close } from '@mui/icons-material';
import ReplayIcon from '@mui/icons-material/Replay';
import { useAppDispatch } from '@shared/hooks/redux';
import { deleteFavorite } from '@redux/slices/favorites-slice';
import { fetchOneCityByName } from '@redux/slices/favorites-slice/thunks/favorites';

interface IProps extends ForecastItem {
  cityName: string;
  id: number;
}

export const WeatherCard: React.FC<IProps> = props => {
  const dispatch = useAppDispatch();

  const onCloseClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();
    e.preventDefault();

    const root = e.currentTarget.closest('article');

    if (!root) return;

    dispatch(deleteFavorite(root.id));
  };

  const onReloadClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(fetchOneCityByName(props.cityName));
  };

  return (
    <article id={`${props.id}`} className={s.wrapper}>
      <Link to={`/${props.id}`} className={s.root}>
        <button className={s.closeButton} onClick={onCloseClick}>
          <Close />
        </button>
        <button className={s.reload} onClick={onReloadClick}>
          <ReplayIcon />
        </button>
        <h3 className={s.title}>{props.cityName}</h3>
        <span className={s.temperature}>
          {Number(props.main.temp).toFixed(0)}°
        </span>
        <p>{props.weather[0].description}</p>
      </Link>
    </article>
  );
};
