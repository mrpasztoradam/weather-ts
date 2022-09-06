import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import { FiPlus } from 'react-icons/fi';
import Button from '../components/common/Button';
import ToggleSwitch from '../components/common/ToggleSwitch';
import SmallCard from '../components/SmallCard/SmallCard';
import './List.css';
import { mainModule } from 'process';
import { render } from '@testing-library/react';

const List = () => {
  const storedObject: any = useReadLocalStorage('storedCities');
  let storedCities: string[] =
    storedObject !== null ? JSON.parse(storedObject) : ['London'];
  const navigate = useNavigate();
  const [isMetric, setUnits] = useLocalStorage('isMetric', true);
  const [switchState, setSwitchState] = useState(true);
  const [values, setLocalStorage] = useLocalStorage('storedCities', '');

  const toggleUnits = () => {
    setUnits((prevValue) => !prevValue);
    setSwitchState((prevValue) => !prevValue);
    window.location.reload();
  };

  useEffect(() => {
    if (storedObject == null) {
      setLocalStorage(JSON.stringify(storedCities));
    }
  });

  return (
    <React.Fragment>
      <header className="header">
        <p className="page-title">Locations</p>
      </header>
      <main className="main">
        <div className="card-container">
          {storedCities.length > 0 &&
            storedCities.map((city: string, index: number) => (
              <>
                <SmallCard
                  onClick={() => navigate(`/details/${city}`)}
                  cityName={city}
                  id={index}
                  key={index}
                ></SmallCard>
              </>
            ))}
        </div>
      </main>
      <footer className="footer">
        <div className="nav-button">
          <div>°C/°F</div>
          <ToggleSwitch isOn={isMetric} handleToggle={toggleUnits} />
        </div>
        <div className="nav-button">
          <Button shape="circle" onClick={() => navigate(`search`)}>
            <FiPlus />
          </Button>
        </div>
      </footer>
      <Outlet />
    </React.Fragment>
  );
};

export default List;
