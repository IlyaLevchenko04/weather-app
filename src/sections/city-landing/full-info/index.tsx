import { fetchFiveDayForecast } from '@redux/slices/weather-slice/thunks/forecast';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { Container } from '@shared/ui/container';
import { Section } from '@shared/ui/section';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router';

import s from './index.module.scss';

import { ROUTER_BOOK } from '@shared/constants/router-book';
import { CustomSwiper } from '@shared/ui/swiper';

const getTemperature = (num: number) => Number(num).toFixed(0);

const getWindDirection = (degrees: number): string => {
  if (degrees < 0 || degrees > 360) {
    throw new Error('Degrees must be between 0 and 360.');
  }

  const directions = [
    'North',
    'North-East',
    'East',
    'South-East',
    'South',
    'South-West',
    'West',
    'North-West',
  ];

  const index = Math.round(degrees / 45) % 8;
  return directions[index];
};

const getDate = (date: string) => {
  const dateObj = new Date(date);

  return `${dateObj.toLocaleDateString()} / ${dateObj.getUTCHours()}:00`;
};

export const FullInfo = () => {
  const { slug } = useParams();

  const dispatch = useAppDispatch();
  const cityData = useAppSelector(state => state.forecast.data);

  useEffect(() => {
    dispatch(fetchFiveDayForecast(slug as string));
  }, [dispatch, slug]);

  if (!cityData) return <Navigate to={ROUTER_BOOK.index} />;

  const currentWeather = cityData.list[0];
  const additionalInfo = [
    {
      title: 'Feels like',
      value: `${getTemperature(currentWeather.main.feels_like)}°`,
    },
    {
      title: 'Humidity',
      value: `${currentWeather.main.humidity}%`,
    },
    {
      title: 'Pressure',
      value: `${currentWeather.main.pressure} hPa`,
    },
    {
      title: `Wind (${
        currentWeather.wind && getWindDirection(currentWeather.wind.deg)
      })`,
      value: `${currentWeather.wind && currentWeather.wind.speed} m/s`,
    },
  ];

  return (
    <Section className={s.section}>
      <Container>
        <div className={s.headerWrapper}>
          <h1 className={s.title}>{cityData?.city.name}</h1>
          <span className={s.temperature}>
            {getTemperature(currentWeather.main.temp)}°
          </span>
          <p className={s.description}>
            {currentWeather.weather[0].description}
          </p>
        </div>

        <CustomSwiper
          list={cityData.list}
          slidesPerView={'auto'}
          spaceBetween={24}
          slide={item => (
            <li className={s.fullWeatherListItem}>
              <span className={s.fullWeatherListItemTemp}>
                {getTemperature(item.main.temp)}°
              </span>
              <p className={s.fullWeatherListItemDescription}>
                {item.weather[0].description}
              </p>

              <p className={s.date}>{getDate(item.dt_txt as string)}</p>
            </li>
          )}
        />

        <h2 className={s.additionalInfo}>Additional info</h2>

        <ul className={s.infoList}>
          {additionalInfo.map(item => (
            <li className={s.infoItem} key={item.title}>
              <p className={s.infoItemTitle}>{item.title}</p>
              <span className={s.infoItemValue}>{item.value}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
