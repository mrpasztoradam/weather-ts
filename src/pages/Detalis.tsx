import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Card from '../components/Card';
import { getDummyData } from '../data/DummyData';

let dummydata = getDummyData();

function Details() {
  let params = useParams();
  let cityId = Number(params.cityId);
  return (
    <>
      <main>
        <div className="detail-card">
          <Card
            name={dummydata[cityId].name}
            temp={dummydata[cityId].temp}
            temp_max={dummydata[cityId].temp_max}
            temp_min={dummydata[cityId].temp_min}
            id={cityId}
          >
            {/* <Link to={`/details/${cityId}`}>Link</Link> */}
          </Card>
        </div>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Details;