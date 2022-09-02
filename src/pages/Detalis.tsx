import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import BigCard from '../components/BigCard';
import Forecast from '../components/Forecast';
import InfoBox from '../components/InfoBox';
import { IDayListItem, IFiveDayForecast } from '../interfaces/IOpenWeatherApi';
import './Details.css';

const useWeatherApi = (userInput?: string) => {
  const [dailyPred, setDaily] = useState<IDayListItem[]>([]);
  const [nightlyPred, setNightly] = useState<IDayListItem[]>([]);
  useEffect(() => {
    if (userInput) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`
      ).then((response) =>
        response.json().then((data: IFiveDayForecast) => {
          const predictions: IDayListItem[] = data.list;
          const daily = predictions.filter((data) => data.dt % 86400 === 43200);
          console.log(daily);
          const nightly = predictions.filter((data) => data.dt % 86400 === 0);
          console.log(nightly);
          setNightly(nightly);
          setDaily(daily);
        })
      );
    }
  }, [userInput]);
  return { dailyPred, nightlyPred };
};

let div = (a: any, b: number) => a / b;

const Details = () => {
  const { id } = useParams();
  const predictions = useWeatherApi(id);
  const dailyData = predictions.dailyPred;
  const nightlyData = predictions.nightlyPred;
  return (
    <>
      <main>
        <BigCard
          dailyData={dailyData[0]}
          nightlyData={nightlyData[0]}
          cityName={id}
        ></BigCard>
        <div className="descriptive-info">
          Feels like {dailyData[0].main?.feels_like?.toFixed(0)}°C, with a
          minimum temprature of {nightlyData[0].main?.temp_min?.toFixed(0)}°C
          and a maximum of {dailyData[0].main?.temp_max?.toFixed(0)}°C
        </div>
        <div>Details</div>
        <div className="info-container">
          <InfoBox
            className="info-item"
            title="Pressure"
            value={dailyData[0].main?.pressure?.toFixed(0)}
            unit="kPa"
          ></InfoBox>
          <InfoBox
            className="info-item"
            title="Humidity"
            value={dailyData[0].main?.humidity?.toFixed(0)}
            unit="%"
          ></InfoBox>
          <InfoBox
            className="info-item"
            title="Wind"
            value={dailyData[0].wind?.speed?.toFixed(0)}
            unit="km/h"
          ></InfoBox>
          <InfoBox
            className="info-item"
            title="Visibility"
            value={div(dailyData[0].visibility, 1000)}
            unit="km"
          ></InfoBox>
          <InfoBox
            className="info-item"
            title="Clouds"
            value={dailyData[0].clouds?.all?.toFixed(0)}
            unit="percent"
          ></InfoBox>
          <InfoBox
            className="info-item"
            title="Wind dir."
            value={dailyData[0].wind?.deg?.toFixed(0)}
            unit="degrees"
          ></InfoBox>
        </div>
        <div>5 day forecast</div>
        <div>
          <Forecast predDaily={dailyData} predNightly={nightlyData} />
        </div>
      </main>
      <nav>{/* <Link to="/">Home</Link> */}</nav>
      <Outlet />
    </>
  );
};

export default Details;
