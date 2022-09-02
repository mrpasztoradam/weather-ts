import React from 'react';
import { IDayListItem } from '../../interfaces/IOpenWeatherApi';

const ForecastItem = (props: {
  predDay: IDayListItem;
  predNight: IDayListItem;
}) => {
  const date = new Date(props.predDay.dt * 1000);
  const weekday = date.toLocaleString('default', { weekday: 'short' });
  const day = date.getDate();

  return (
    <div className="forecast-item">
      <div className="forecast-item-title">
        {weekday} {day}
      </div>
      <div>
        <img
          className="card--weather-icon"
          src="https://placehold.co/50"
          alt="TODO"
        />
      </div>
      <div className="forecast-item-tempmax">
        {props.predDay.main?.temp_max?.toFixed(0)}°C
      </div>
      <div className="forecast-item-tempmin">
        {props.predNight.main?.temp_min?.toFixed(0)}°C
      </div>
    </div>
  );
};

export default ForecastItem;
