import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../interfaces/ICard';
import './Card.css';

const Card = ({ name, temp, temp_min, temp_max, id, children }: ICard) => {
  return (
    <React.Fragment key={id}>
      <div className="card--location">
        <h2>{name}</h2>
      </div>
      <div className="card--temp">
        <p>Current:{temp}°</p>
      </div>
      <div className="card--alert">
        <p>Current:{temp}°</p>
      </div>
      <div className="card--minmax">
        <p>
          Minimum:{temp_min}° Maximum: {temp_max}° Key: {id}
        </p>
      </div>
      {children}
    </React.Fragment>
  );
};

export default Card;
