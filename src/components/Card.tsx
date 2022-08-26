import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../interfaces/ICard';
import './Card.css';

const Card = ({ name, temp, temp_min, temp_max, id, children }: ICard) => {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <p>Current:{temp}°</p>
      <p>
        Minimum:{temp_min}° Maximum: {temp_max}° Key: {id}
      </p>
      {children}
    </div>
  );
};

export default Card;
