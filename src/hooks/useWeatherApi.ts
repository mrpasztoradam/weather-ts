import { useEffect, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { IDayListItem, IFiveDayForecast } from '../interfaces/IOpenWeatherApi';

const useWeatherApi = (userInput?: string) => {
  const [dailyPred, setDaily] = useState<IDayListItem[]>([]);
  const [nightlyPred, setNightly] = useState<IDayListItem[]>([]);
  const isMetric = useReadLocalStorage('isMetric');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (userInput) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${
          process.env.REACT_APP_WEATHER_API
        }&units=${isMetric ? 'metric' : 'imperial'}`
      ).then((response) =>
        response
          .json()
          .then((data: IFiveDayForecast) => {
            const predictions: IDayListItem[] = data.list;
            const daily = predictions.filter(
              (data) => data.dt % 86400 === 43200
            );
            const nightly = predictions.filter((data) => data.dt % 86400 === 0);
            setNightly(nightly);
            setDaily(daily);
          })
          .catch((err) => {
            setError(err.message);
          })
          .finally(() => {
            setLoading(false);
          })
      );
    }
  }, [userInput]);
  return { dailyPred, nightlyPred, error };
};

export default useWeatherApi;
