export interface ICard {
  name?: string;
  temp?: number;
  temp_min?: number;
  temp_max?: number;
  id: number;
  children?: React.ReactNode;
}
