interface Weather {
  description: string;
  icon: string;
}

interface MainWeather {
  temp: number;
  pressure: number;
  humidity: number;
}

export interface ForecastItem {
  dt_txt?: string;
  main: MainWeather;
  weather: Weather[];
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
