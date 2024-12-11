import { WeatherApiResponse, WeatherResponse } from '@shared/types/forecast';

class _Forecast {
  private apiLink: string;
  private apiKey: string;
  constructor() {
    this.apiLink = `${import.meta.env.VITE_API_URL}/data/2.5`;
    this.apiKey = `${import.meta.env.VITE_API_KEY}`;
  }

  public async getFiveDayForecast(city: string): Promise<WeatherResponse> {
    const url = new URL(
      `${this.apiLink}/forecast?q=${city}&appid=${this.apiKey}&units=metric`
    );
    const data = this.fetchData(url) as unknown as WeatherResponse;

    return data;
  }

  public async getAllFavoritesShortForecast(
    favorites: string[]
  ): Promise<WeatherApiResponse> {
    const url = new URL(
      `${this.apiLink}/group?id=${favorites.join(',')}&appid=${
        this.apiKey
      }&units=metric`
    );
    const data = this.fetchData(url) as unknown as WeatherApiResponse;

    return data;
  }

  private async fetchData(url: URL) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return response.statusText;
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error('API fetch error:', error);
      return error;
    }
  }
}

export const Forecast = new _Forecast();
