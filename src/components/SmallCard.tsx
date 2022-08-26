import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../interfaces/ICard';
import './SmallCard.css';

const SmallCard = ({
  name,
  temp,
  temp_min,
  temp_max,
  alert,
  id,
  children,
}: ICard) => {
  return (
    <React.Fragment key={id}>
      <div className="card--location">
        <p>{name}</p>
      </div>
      <div className="card--temp">
        <p>{temp}°C</p>
      </div>
      <div className="card--alert">
        <p>{alert}</p>
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
