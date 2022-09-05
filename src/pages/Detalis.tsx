import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useReadLocalStorage } from 'usehooks-ts';
import BigCard from '../components/BigCard/BigCard';
import Button from '../components/common/Button';
import Forecast from '../components/Forecast/Forecast';
import InfoBox from '../components/InfoBox/InfoBox';
import useWeatherApi from '../hooks/useWeatherApi';
import './Details.css';

let div = (a: any, b: number) => a / b;

const Details = () => {
  const { id } = useParams();
  const predictions = useWeatherApi(id);
  const navigate = useNavigate();
  const dailyData = predictions.dailyPred;
  const nightlyData = predictions.nightlyPred;
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

  return (
    <>
      <main className="details-container">
        <BigCard
          dailyData={dailyData[0]}
          nightlyData={nightlyData[0]}
          cityName={id}
        ></BigCard>
        <div className="descriptive-info">
          Feels like {dailyData[0].main?.feels_like?.toFixed(0)}
          {isMetric ? '°C' : '°F'}, {dailyData[0].weather[0].description} with a
          minimum temprature of {nightlyData[0].main?.temp_min?.toFixed(0)}
          {isMetric ? '°C' : '°F'} and a maximum of{' '}
          {nightlyData[0].main?.temp_max?.toFixed(0)}
          {isMetric ? '°C' : '°F'}
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
        <div className="label">5 day forecast</div>
        <div>
          <Forecast predDaily={dailyData} predNightly={nightlyData} />
        </div>
      </main>
      <footer className="footer">
        <div></div>
        <div className="nav-button">
          <Button shape="circle" onClick={() => navigate(`/`)}>
            <FiMenu />
          </Button>
        </div>
      </footer>
      <Outlet />
    </>
  );
};

export default Details;
