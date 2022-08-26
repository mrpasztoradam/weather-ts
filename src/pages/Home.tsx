import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SmallCard from '../components/SmallCard';
import { getDummyData } from '../data/DummyData';
import '../data/DummyData.ts';
import { ICard } from '../interfaces/ICard';
import Input from '../components/common/Input';

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
              <div className="card">
                <SmallCard
                  name={city.name}
                  temp={city.temp}
                  temp_max={city.temp_max}
                  temp_min={city.temp_min}
                  alert={city.alert}
                  id={index}
                ></SmallCard>
              </div>
            ))}
        </div>
      </main>
      <Outlet />
    </React.Fragment>
  );
}

export default Home;
