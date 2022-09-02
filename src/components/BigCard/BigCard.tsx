import React, { ReactNode } from 'react';
import { IDayListItem } from '../../interfaces/IOpenWeatherApi';
import './BigCard.css';

interface IBigCard {
  cityName?: string;
  children?: ReactNode;
  dailyData?: IDayListItem;
  nightlyData?: IDayListItem;
}

const BigCard = ({ cityName, dailyData, nightlyData, children }: IBigCard) => {
  return (
    <div className="bigcard">
      <div className="bigcard--location">{cityName}</div>
      <img
        className="bigcard--weather-icon"
        src="https://placehold.co/100"
        alt="TODO"
      />
      <div className="bigcard--weather-description">
        {dailyData?.weather[0].main}
      </div>
      <div className="bigcard--temp-current">
        {dailyData?.main?.temp?.toFixed(0)}°C
      </div>
      <div className="bigcard--minmax">
        H:{dailyData?.main?.temp_max?.toFixed(0)}°C L:
        {nightlyData?.main?.temp_min?.toFixed(0)}°C
      </div>
    </div>
  );
};

export default BigCard;
