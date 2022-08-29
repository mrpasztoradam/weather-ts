export interface ICard {
  locationName?: string;
  temp_current?: number;
  temp_min?: number;
  temp_max?: number;
  weatherDescription?: string;
  weatherIcon?: string;
  id: number;
  children?: React.ReactNode;
  onClick?: () => void;
}
