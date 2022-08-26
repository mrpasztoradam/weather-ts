import React from 'react';
import { ICard } from '../interfaces/ICard';
import './BigCard.css';

const BigCard = ({
  locationName,
  temp_current,
  temp_min,
  temp_max,
  weatherDescription,
  id,
  children,
}: ICard) => {
  return (
    <div className="bigcard" key={id}>
      <div className="bigcard--location">{locationName}</div>
      <img
        className="bigcard--weather-icon"
        src="https://placehold.co/100"
        alt="TODO"
      />
      <div className="bigcard--weather-description">{weatherDescription}</div>
      <div className="bigcard--temp-current">{temp_current}°C</div>
      <div className="bigcard--minmax">
        H:{temp_max}°C L:{temp_min}°C
      </div>
      {children}
    </div>
  );
};

export default BigCard;
