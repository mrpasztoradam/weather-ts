import React from 'react';
import { ICard } from '../interfaces/ICard';
import './Card.css';

const Card = ({ name, temp, temp_min, temp_max, key }: ICard) => {
  return (
    <div className="card" key={key}>
      {/* <img className="card-image" src={imgUrl} alt="" /> */}
      <h2>{name}</h2>
      <p>Current:{temp}°</p>
      <p>
        Minimum:{temp_min}° Maximum: {temp_max}°
      </p>
      {/* <Paragraph text={name} /> */}
      {/* <Button className="raise" buttonText="Tesztelek" /> */}
    </div>
  );
};

export default Card;
