import WeatherIcon from '../../components/WeatherIcon/WeatherIcon';
import React, { ReactNode } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { IDayListItem } from '../../interfaces/IOpenWeatherApi';
import './BigCard.css';

interface IBigCard {
  cityName?: string;
  children?: ReactNode;
  dailyData?: IDayListItem;
  nightlyData?: IDayListItem;
}

const BigCard = ({ cityName, dailyData, nightlyData, children }: IBigCard) => {
  const isMetric = useReadLocalStorage('isMetric');
  return (
    <div className="bigcard">
      <div className="bigcard--location">{cityName}</div>
      <div className="bigcard--icon">
        <WeatherIcon id={dailyData?.weather[0].id}></WeatherIcon>
      </div>
      <div className="bigcard--weather-description">
        {dailyData?.weather[0].main}
      </div>
      <div className="bigcard--temp-current">
        {dailyData?.main?.temp?.toFixed(0)}
        {isMetric ? '°C' : '°F'}
      </div>
      <div className="bigcard--minmax">
        H:{dailyData?.main?.temp_max?.toFixed(0)}
        {isMetric ? '°C' : '°F'} L:
        {nightlyData?.main?.temp_min?.toFixed(0)}
        {isMetric ? '°C' : '°F'}
      </div>
    </div>
  );
};

export default BigCard;
