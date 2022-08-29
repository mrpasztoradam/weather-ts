import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../interfaces/ICard';
import './SmallCard.css';

const SmallCard = ({
  locationName,
  temp_current,
  temp_min,
  temp_max,
  weatherDescription,
  id,
  children,
  onClick,
}: ICard) => {
  return (
    <div className="card" onClick={onClick} key={id}>
      <div className="card--location">{locationName}</div>
      <div className="card--temp-current">{temp_current}°C</div>
      <div className="card--weather-item">
        <img
          className="card--weather-icon"
          src="https://placehold.co/50"
          alt="TODO"
        />
        <div className="card--weather-description">{weatherDescription}</div>
      </div>
      <div className="card--minmax">
        H:{temp_max}°C L:{temp_min}°C
      </div>
      {children}
    </div>
  );
};

export default SmallCard;
