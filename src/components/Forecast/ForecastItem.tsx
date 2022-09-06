import WeatherIcon from '../../components/WeatherIcon/WeatherIcon';
import React from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { IDayListItem } from '../../interfaces/IOpenWeatherApi';

const ForecastItem = (props: {
  predDay: IDayListItem;
  predNight: IDayListItem;
}) => {
  const date = new Date(props.predDay.dt * 1000);
  const weekday = date.toLocaleString('default', { weekday: 'short' });
  const day = date.getDate();
  const isMetric = useReadLocalStorage('isMetric');

  return (
    <div className="forecast-item">
      <div className="forecast-item-title">
        {weekday} {day}
      </div>
      <div className="forecast--weather-icon">
        <WeatherIcon id={props.predDay.weather[0].id}></WeatherIcon>
      </div>
      <div className="forecast-item-tempmax">
        {props.predDay.main?.temp_max?.toFixed(0)}
        {isMetric ? '°C' : '°F'}
      </div>
      <div className="forecast-item-tempmin">
        {props.predNight.main?.temp_min?.toFixed(0)}
        {isMetric ? '°C' : '°F'}
      </div>
    </div>
  );
};

export default ForecastItem;
