import WeatherIcon from '../../components/WeatherIcon/WeatherIcon';
import React, { ReactNode } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import useWeatherApi from '../../hooks/useWeatherApi';
import { IDayListItem } from '../../interfaces/IOpenWeatherApi';
import './SmallCard.css';

interface ISmallCard {
  cityName?: string;
  children?: ReactNode;
  dailyData?: IDayListItem;
  nightlyData?: IDayListItem;
  id: number;
  onClick?: () => void;
}

const SmallCard = ({ cityName, children, id, onClick }: ISmallCard) => {
  const predictions = useWeatherApi(cityName);
  const dailyData = predictions.dailyPred;
  const nightlyData = predictions.nightlyPred;
  const isMetric = useReadLocalStorage('isMetric');

  if (
    !dailyData ||
    !nightlyData ||
    dailyData.length <= 0 ||
    nightlyData.length <= 0
  ) {
    // Display a message or Show a Loading Gif here
    return <div>Loading...</div>;
  }

  return (
    <div className="card" onClick={onClick} key={id}>
      <div className="card--location">{cityName}</div>
      <div className="card--temp-current">
        {dailyData[0].main?.temp?.toFixed(0)}
        {isMetric ? '°C' : '°F'}
      </div>
      <div className="card--weather-item">
        <div className="card--weather-icon">
          <WeatherIcon id={dailyData[0].weather[0].id}></WeatherIcon>
        </div>
        <div className="card--weather-description">
          {dailyData[0].weather[0].description}
        </div>
      </div>
      <div className="card--minmax">
        H:{dailyData[0].main?.temp_max?.toFixed(0)}
        {isMetric ? '°C' : '°F'} L:
        {nightlyData[0].main?.temp_min?.toFixed(0)}
        {isMetric ? '°C' : '°F'}
      </div>
      {children}
    </div>
  );
};

export default SmallCard;
