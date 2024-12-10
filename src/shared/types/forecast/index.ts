interface Weather {
  description: string;
  icon: string;
}

interface MainWeather {
  temp: number;
  pressure: number;
  humidity: number;
}

interface ForecastItem {
  dt_txt: string;
  main: MainWeather;
  weather: Weather[];
}

interface City {
  name: string;
  country: string;
}

export interface WeatherResponse {
  city: City;
  list: ForecastItem[];
}
