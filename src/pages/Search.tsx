import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import SmallCard from '../components/SmallCard';
import { getDummyData } from '../data/DummyData';

let dummydata = getDummyData();

function Search() {
  let params = useParams();
  let cityId = Number(params.cityId);
  return (
    <>
      <main>
        <div className="detail-card">
          <SmallCard
            locationName={dummydata[cityId].locationName}
            temp_current={dummydata[cityId].temp_current}
            temp_max={dummydata[cityId].temp_max}
            temp_min={dummydata[cityId].temp_min}
            weatherDescription={dummydata[cityId].weatherDescription}
            id={cityId}
          >
            {/* <Link to={`/details/${cityId}`}>Link</Link> */}
          </SmallCard>
        </div>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Search;
