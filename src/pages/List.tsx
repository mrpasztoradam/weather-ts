import React from 'react';
import { Outlet } from 'react-router-dom';
import ToggleSwitch from '../components/common/ToggleSwitch';
import SmallCard from '../components/SmallCard';
import { getDummyData } from '../data/DummyData';
import '../data/DummyData.ts';
import { ICard } from '../interfaces/ICard';

let dummydata = getDummyData();

function List() {
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
                  onClick={() => console.log(`Clicked card index: ${index}`)}
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
        <ToggleSwitch />
      </footer>
      <Outlet />
    </React.Fragment>
  );
}

export default List;
