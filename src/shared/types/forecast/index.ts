interface Weather {
  description: string;
  icon: string;
}

interface MainWeather {
  temp: number;
  pressure: number;
  humidity: number;
  feels_like: number;
}

export interface ForecastItem {
  dt_txt?: string;
  main: MainWeather;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

interface City {
  name: string;
  country: string;
  id: number;
}

export interface WeatherResponse {
  city: City;
  list: ForecastItem[];
}

export interface WeatherData {
  id: number;
  name: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}

export interface WeatherApiResponse {
  cnt: number;
  list: WeatherData[];
}
