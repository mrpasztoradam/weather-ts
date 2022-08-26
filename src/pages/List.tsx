import React from 'react';
import { Outlet } from 'react-router-dom';
import BigCard from '../components/BigCard';
import ToggleSwitch from '../components/common/ToggleSwitch';
import SmallCard from '../components/SmallCard';
import { getDummyData } from '../data/DummyData';
import '../data/DummyData.ts';
import { ICard } from '../interfaces/ICard';

let dummydata = getDummyData();

function Home() {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Locations</h1>
      </header>
      <main className="main">
        <div className="card-container">
          {dummydata.length > 0 &&
            dummydata.map((city: ICard, index) => (
              <>
                <SmallCard
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
      <Outlet />
    </React.Fragment>
  );
}

export default Home;
