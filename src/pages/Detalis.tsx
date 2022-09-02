import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import BigCard from '../components/BigCard';
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

const Details = () => {
  const { id } = useParams();
  const predictions = useWeatherApi(id);
  const dailyData: IDayListItem[] = predictions.dailyPred;
  const nightlyData: IDayListItem[] = predictions.nightlyPred;
  return (
    <>
      <main>
        <BigCard
          temp={Math.round(dailyData[0].main.temp)}
          tempMaxDay={Math.round(dailyData[0].main.temp_max)}
          tempMinNight={Math.round(nightlyData[0].main.temp_min)}
          weatherDescription={dailyData[0].weather[0].description}
          cityName={id}
        ></BigCard>
        <div>
          <p>Itt lesz a szöveg, ami elmondja szövegesen az érdekes infókat</p>
        </div>
        <div>Details</div>
        <div>
          Ez egy Info Card konténer lesz, 6 info kártyával
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
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
