export interface Root {
  cord: Coord;
  weather: Weather;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: SymbolConstructor;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  dag: number;
}

export interface Main {
  temp: number;
  feelslike: number;
  temp_min: number;
  temp_max: number;
  pressure: Number;
  humidity: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Coord {
  lon: number;
  lat: number;
}
