import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import useWeatherApi from '../../hooks/useWeatherApi';
import BigCard from '../BigCard/BigCard';
import Button from '../common/Button';
import InfoBox from '../InfoBox/InfoBox';
import './ModalContent.css';

let div = (a: any, b: number) => a / b;

interface IModal {
  value: string;
  storedCities: string[];
}

const ModalContent = ({ value, storedCities }: IModal) => {
  const predictions = useWeatherApi(value);
  const navigate = useNavigate();
  const dailyData = predictions.dailyPred;
  const nightlyData = predictions.nightlyPred;
  const [values, setLocalStorage] = useLocalStorage('storedCities', '');
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

  const handleCityAdd = (cityName: string) => {
    console.log(storedCities);
    storedCities.push(cityName);
    console.log(storedCities);
    setLocalStorage(JSON.stringify(storedCities));
    navigate('/');
  };

  return (
    <div className="modal-container">
      <BigCard
        dailyData={dailyData[0]}
        nightlyData={nightlyData[0]}
        cityName={value}
      ></BigCard>
      <div className="descriptive-info">
        Feels like {dailyData[0].main?.feels_like?.toFixed(0)}
        {isMetric ? '°C' : '°F'}, {dailyData[0].weather[0].description} with a
        minimum temprature of {nightlyData[0].main?.temp_min?.toFixed(0)}
        {isMetric ? '°C' : '°F'} and a maximum of{' '}
        {nightlyData[0].main?.temp_max?.toFixed(0)}
        {isMetric ? '°C' : '°F'}
      </div>
      <div className="details-label">Details</div>
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
      <div className="modal-nav-button">
        <Button shape="rectangle" onClick={() => handleCityAdd(value)}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default ModalContent;
