import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { Container } from '@shared/ui/container';
import { Section } from '@shared/ui/section';

import s from './index.module.scss';
import { useAppDispatch } from '@shared/hooks/redux';
import { useCallback, useState } from 'react';
import { fetchFiveDayForecast } from '@redux/slices/weather-slice/thunks/forecast';
import { addFavorite, deleteFavorite } from '@redux/slices/favorites-slice';

export const Hero = () => {
  const dispatch = useAppDispatch();
  const getForecast = useCallback(
    (city: string) => dispatch(fetchFiveDayForecast(city)),
    [dispatch]
  );

  const setFavorites = (city: string, toDelete = false) =>
    dispatch(toDelete ? deleteFavorite(city) : addFavorite(city));
  const [cityInput, setCityInput] = useState('');
  const [openToast, setOpenToast] = useState(false);

  const onInput: React.FormEventHandler<HTMLInputElement> = e => {
    const value = (e.target as HTMLInputElement).value;
    setCityInput(value.trim());
  };

  const handleCloseToast = () => setOpenToast(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOpenToast(true);
    getForecast(cityInput);
    setFavorites(cityInput);
    setCityInput('');
  };

  return (
    <Section className={s.root}>
      <Container className={s.container}>
        <h1 className={s.title}>
          <span className={s.slogo}>Weather-App</span> - the best choice!
        </h1>

        <form className={s.form} onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="e.g. London"
            className={s.input}
            onInput={onInput}
            value={cityInput}
          />
          <Button type="submit">Add new city</Button>
        </form>
        <Snackbar
          open={openToast}
          onClose={handleCloseToast}
          message="You succsesfully edited your favorites!"
          autoHideDuration={4000}
        />
      </Container>
    </Section>
  );
};
