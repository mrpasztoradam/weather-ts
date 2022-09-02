import React from 'react';
import { IDayListItem } from '../../interfaces/IOpenWeatherApi';
import ForecastItem from './ForecastItem';
import './Forecast.css';

const Forecast = (props: {
  predDaily: IDayListItem[];
  predNightly: IDayListItem[];
}) => {
  return (
    <div className="forecast-container">
      {props.predDaily.length > 0 ? (
        props.predDaily.map((day: IDayListItem, index) => (
          <ForecastItem
            predDay={day}
            predNight={props.predNightly[index]}
            key={index}
          ></ForecastItem>
        ))
      ) : (
        <p>Itt még nincs adat</p>
      )}
    </div>
  );
};

export default Forecast;
