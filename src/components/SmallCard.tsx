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
}: ICard) => {
  return (
    <React.Fragment key={id}>
      <div className="card--location">
        <p>{locationName}</p>
      </div>
      <div className="card--temp">
        <p>{temp_current}°C</p>
      </div>
      <div className="card--alert">
        <p>{weatherDescription}</p>
      </div>
      <div className="card--minmax">
        <p>
          H:{temp_max}°C L:{temp_min}°C
        </p>
      </div>
      {children}
    </React.Fragment>
  );
};

export default SmallCard;
