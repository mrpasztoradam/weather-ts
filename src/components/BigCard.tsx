import React, { ReactNode } from 'react';
import { ICity, IDayListItem } from '../interfaces/IOpenWeatherApi';
import './BigCard.css';

interface IBigCard {
  temp?: number;
  tempMaxDay?: number;
  tempMinNight?: number;
  weatherDescription: string | undefined;
  cityName?: string;
  children?: ReactNode;
}

const BigCard = ({
  temp,
  tempMaxDay,
  tempMinNight,
  weatherDescription,
  cityName,
  children,
}: IBigCard) => {
  return (
    <div className="bigcard">
      <div className="bigcard--location">{cityName}</div>
      <img
        className="bigcard--weather-icon"
        src="https://placehold.co/100"
        alt="TODO"
      />
      <div className="bigcard--weather-description">{weatherDescription}</div>
      <div className="bigcard--temp-current">{temp}°C</div>
      <div className="bigcard--minmax">
        H:{tempMaxDay}°C L:{tempMinNight}°C
      </div>
    </div>
  );
};

export default BigCard;
