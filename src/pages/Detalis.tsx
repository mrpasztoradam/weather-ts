import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Forecast from '../components/Forecast';
import { IDayListItem, IFiveDayForecast } from '../interfaces/IOpenWeatherApi';

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

function Details() {
  const { id } = useParams();
  const predictions = useWeatherApi(id);
  const dailyData: IDayListItem[] = predictions.dailyPred;
  const nightlyData: IDayListItem[] = predictions.nightlyPred;
  return (
    <>
      <main>
        <p>Teszt, hogy legyen itt valami</p>
        <div className="detail-card">
          <Forecast predDaily={dailyData} predNightly={nightlyData} />
        </div>
      </main>
      <nav>{/* <Link to="/">Home</Link> */}</nav>
      <Outlet />
    </>
  );
}

export default Details;
