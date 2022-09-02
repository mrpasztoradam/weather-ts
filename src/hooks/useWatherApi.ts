import { useEffect, useState } from 'react';
import { IDayListItem, IFiveDayForecast } from '../interfaces/IOpenWeatherApi';

export const useWeatherApi = (userInput?: string) => {
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
