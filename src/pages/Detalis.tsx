import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import BigCard from '../components/BigCard';
import {
  ICity,
  IDayListItem,
  IFiveDayForecast,
} from '../interfaces/IOpenWeatherApi';

const useWeatherApi = (userInput?: string) => {
  const [result, setResult] = useState<IDayListItem[]>([]);
  useEffect(() => {
    if (userInput) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`
      ).then((response) =>
        response.json().then((data: IFiveDayForecast) => {
          const predictions: IDayListItem[] = data.list;
          const daily = predictions.filter((data) => data.dt % 86400 === 43200);
          console.log(daily);
          return setResult(predictions);
        })
      );
    }
  }, [userInput]);
  return result;
};

function Details() {
  const { id } = useParams();
  const predictions = useWeatherApi(id);
  return (
    <>
      <main>
        <p>Teszt, hogy legyen itt valami</p>
        <div className="detail-card">
          <>
            {predictions?.length > 0 ? (
              predictions?.map((day: IDayListItem, index) => (
                <div key={index}>
                  <p>{day.main?.temp}</p>
                </div>
              ))
            ) : (
              <p>Itt még nincs adat</p>
            )}
          </>
          {/* <SmallCard
            locationName={results[1].dt?.toString()}
            temp_current={results[1].main?.temp}
            temp_max={results[1].main?.temp_max}
            temp_min={results[1].main?.temp_min}
            weatherDescription={results[1].weather?.main}
            id={1}
          ></SmallCard> */}
        </div>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Details;
