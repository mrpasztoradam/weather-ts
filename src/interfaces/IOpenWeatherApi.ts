export interface IMain {
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
  sea_level?: number;
  grnd_level?: number;
  humidity?: number;
  temp_kf?: number;
}

export interface IWeather {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}

export interface IClouds {
  all?: number;
}

export interface IWind {
  speed?: number;
  deg?: number;
  gust?: number;
}

export interface ICity {
  id?: number;
  name?: string;
  coord?: ICoord;
  country?: string;
  population?: number;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
}

interface ICoord {
  lat: number;
  lon: number;
}

export interface IDayListItem {
  dt: number;
  main?: IMain;
  weather?: IWeather[];
  clouds?: IClouds;
  wind?: IWind;
  visibility?: number;
  pop?: number;
  rain?: IRain;
  sys?: ISys;
  dt_txt?: string;
}
interface ISys {
  pod: string;
}

interface IRain {
  '3h': number;
}

export interface IFiveDayForecast {
  cod?: string;
  message?: number;
  cnt?: number;
  city: ICity;
  list: IDayListItem[];
}
