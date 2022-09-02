import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Outlet, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import ToggleSwitch from '../components/common/ToggleSwitch';
import SmallCard from '../components/SmallCard';
import { getDummyData } from '../data/DummyData';
import '../data/DummyData.ts';
import { ICard } from '../interfaces/ICard';

let dummydata = getDummyData();

const List = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <header className="header">
        <p className="page-title">Locations</p>
      </header>
      <main className="main">
        <div className="card-container">
          {dummydata.length > 0 &&
            dummydata.map((city: ICard, index) => (
              <>
                <SmallCard
                  onClick={() => navigate(`/details/${city.locationName}`)}
                  locationName={city.locationName}
                  temp_current={city.temp_current}
                  temp_max={city.temp_max}
                  temp_min={city.temp_min}
                  weatherDescription={city.weatherDescription}
                  id={index}
                ></SmallCard>
              </>
            ))}
        </div>
      </main>
      <footer className="footer">
        <div>
          <ToggleSwitch />
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
