import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Input from '../components/common/Input';
import { getCities } from '../data/DummyData';
import './Search.css';

let cities = getCities();

interface ICity {
  name: string;
}

function Search() {
  let params = useParams();
  return (
    <React.Fragment>
      <header className="header">
        <p className="page-title">Add Location</p>
      </header>
      <main className="main">
        <div className="search-container">
          <div className="search-box">
            <Input></Input>
            <div className="results-container">
              {cities.length > 1 ? (
                cities.map((city: ICity, index) => (
                  <div className="result">{city.name}</div>
                ))
              ) : (
                <div>sadasdasd</div>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <Link to="/">Home</Link>
      </footer>
      <Outlet />
    </React.Fragment>
  );
}

export default Search;
