import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Card from '../components/Card';
import { getDummyData } from '../data/DummyData';
import '../data/DummyData.ts';
import { ICard } from '../interfaces/ICard';
import Input from '../components/common/Input';

let dummydata = getDummyData();

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <Input />
        {dummydata.length > 0 &&
          dummydata.map((city: ICard, index) => (
            <div className="card">
              <Card
                name={city.name}
                temp={city.temp}
                temp_max={city.temp_max}
                temp_min={city.temp_min}
                id={index}
              >
                <Link to={`/details/${city.id}`} key={index.toString()}>
                  Link
                </Link>
              </Card>
            </div>
          ))}
      </main>
      <nav>
        <Link to="/details">About</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Home;
