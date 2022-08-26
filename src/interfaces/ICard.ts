export interface ICard {
  locationName?: string;
  temp_current?: number;
  temp_min?: number;
  temp_max?: number;
  weatherDescription?: string;
  weatherIcon?: string;
  id: number;
  children?: React.ReactNode;
}

export interface ISearchLocation extends ICard {
  longDescription?: string;
  pressure?: number;
  humidity?: number;
  windSpeed?: number;
  windDirection?: number;
  visibility?: number;
}
export interface IDetailsLocation extends ISearchLocation {}
