import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../interfaces/ICard';
import './Card.css';

const Card = ({ name, temp, temp_min, temp_max, id }: ICard) => {
  return (
    <div className="card" key={id}>
      <h2>{name}</h2>
      <p>Current:{temp}°</p>
      <p>
        Minimum:{temp_min}° Maximum: {temp_max}° Key: {id}
      </p>
      <Link to={`/details/${id}`}>Link</Link>
    </div>
  );
};

export default Card;
