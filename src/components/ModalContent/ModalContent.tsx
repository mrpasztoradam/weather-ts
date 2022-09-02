import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useWeatherApi } from '../../hooks/useWatherApi';
import BigCard from '../BigCard/BigCard';
import Button from '../common/Button';
import InfoBox from '../InfoBox/InfoBox';
import './ModalContent.css';

let div = (a: any, b: number) => a / b;

interface IModal {
  value: string;
}

const ModalContent = ({ value }: IModal) => {
  const predictions = useWeatherApi(value);
  const navigate = useNavigate();
  const dailyData = predictions.dailyPred;
  const nightlyData = predictions.nightlyPred;

  if (
    !dailyData ||
    !nightlyData ||
    dailyData.length <= 0 ||
    nightlyData.length <= 0
  ) {
    // Display a message or Show a Loading Gif here
    return <div>Loading...</div>;
  }

  return (
    <div className="modal-content">
      <BigCard
        dailyData={dailyData[0]}
        nightlyData={nightlyData[0]}
        cityName={value}
      ></BigCard>
      <div className="descriptive-info">
        Feels like {dailyData[0].main?.feels_like?.toFixed(0)}°C,{' '}
        {dailyData[0].weather[0].description} with a minimum temprature of{' '}
        {nightlyData[0].main?.temp_min?.toFixed(0)}°C and a maximum of{' '}
        {nightlyData[0].main?.temp_max?.toFixed(0)}°C
      </div>
      <div className="label">Details</div>
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
      <div className="nav-button">
        <Button shape="rectangle">Add</Button>
      </div>
    </div>
  );
};

export default ModalContent;
