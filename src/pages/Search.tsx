import React from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { getCities } from '../data/DummyData';
import './Search.css';
import { FiMenu } from 'react-icons/fi';
import Modal from '../components/Modal';
import { useBoolean } from 'usehooks-ts';

let cities = getCities();

interface ICity {
  name: string;
}
function Search() {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean();

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
                  <div className="result" key={index}>
                    {city.name}
                  </div>
                ))
              ) : (
                <div>sadasdasd</div>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <Button shape="circle" onClick={setTrue}>
          <FiMenu />
        </Button>
        <Button shape="rectangle" onClick={toggle}>
          Button
        </Button>
      </footer>
      <Modal isHidden={value} />
      <Outlet />
    </React.Fragment>
  );
}

export default Search;
