import React, { ReactNode } from 'react';
import { ICity, IDayListItem } from '../interfaces/IOpenWeatherApi';
import './BigCard.css';

const BigCard = (
  { weather, main }: IDayListItem,
  { name }: ICity,
  children?: ReactNode
) => {
  return (
    <div className="bigcard" key={0}>
      <div className="bigcard--location">{name}</div>
      <img
        className="bigcard--weather-icon"
        src="https://placehold.co/100"
        alt="TODO"
      />
      <div className="bigcard--weather-description">
        {/* {weather[0].description} */}
      </div>
      {/* <div className="bigcard--temp-current">{main[0].temp}°C</div>
      <div className="bigcard--minmax">
        H:{main[0].temp_max}°C L:{main[0].temp_min}°C
      </div> */}
      {children}
    </div>
  );
};

export default BigCard;
