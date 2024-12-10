import { Button } from '@mui/material';
import { fetchFiveDayForecast } from '@redux/slices/weather-slice/thunks/forecast';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { Container } from '@shared/ui/container';
import { Section } from '@shared/ui/section';
import { useCallback, useState } from 'react';

export const Home = () => {
  const dispatch = useAppDispatch();
  const forecast = useAppSelector(state => state.forecast.data);
  const getForecast = useCallback(
    (city: string) => dispatch(fetchFiveDayForecast(city)),
    [dispatch]
  );
  const [cityInput, setCityInput] = useState('');

  const onInput: React.FormEventHandler<HTMLInputElement> = e => {
    const value = (e.target as HTMLInputElement).value;
    setCityInput(value.trim());
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getForecast(cityInput);
    console.log(forecast);
  };

  return (
    <>
      <Section>
        <Container>
          <form onSubmit={onSubmit}>
            <input onInput={onInput} />
            <Button type="submit">Know weather!</Button>
          </form>
          {forecast && forecast?.list.length > 0 && (
            <ul>
              {forecast.list.map(item => (
                <li>
                  {item.main.temp} /{' '}
                  {new Date(item.dt_txt).toLocaleDateString()}
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>
      <Section>
        <Container>Section 2</Container>
      </Section>
      <Section>
        <Container>Section 3</Container>
      </Section>
      <Section>
        <Container>Section 4</Container>
      </Section>
      <Section>
        <Container>Section 5</Container>
      </Section>
    </>
  );
};
