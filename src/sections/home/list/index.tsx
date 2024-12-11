import { fetchMultipleCities } from '@redux/slices/favorites-slice/thunks/favorites';
import { WeatherCard } from '@shared/components/weather-card';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { Container } from '@shared/ui/container';
import { Section } from '@shared/ui/section';
import { useEffect } from 'react';

import s from './index.module.scss';

export const HomepageList = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites.favorites);
  const favoritesData = useAppSelector(state => state.favorites.data);

  useEffect(() => {
    if (favorites.length > 0) {
      dispatch(fetchMultipleCities(favorites));
    }
  }, [favorites, dispatch]);
  return (
    <Section>
      <Container>
        <h2 className={s.title}>Favorites</h2>
        <div className={s.cardList}>
          {favoritesData.map(item => (
            <WeatherCard
              weather={item.weather}
              cityName={item.name}
              main={item.main}
              id={item.id}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
