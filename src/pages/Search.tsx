import React, { ChangeEvent, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { getCities } from '../data/DummyData';
import './Search.css';
import { FiMenu } from 'react-icons/fi';
import Modal from '../components/Modal';
import { useBoolean, useDebounce } from 'usehooks-ts';

let cities = getCities();
interface ICity {
  name: string;
}
function Search() {
  const [unis, setUnis] = useState([]);
  const [error, setError] = useState('');

  const [value, setValue] = useState('');

  function handleChange(newValue: string) {
    setValue(newValue);
    console.log('handling the change from Search component');
    console.log(value.toString());
    console.log(newValue.toString());
  }

  // fetch(
  //   `https://fast-dawn-89938.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Budape&inputtype=textquery&key=${process.env.REACT_APP_PLACES_API}`
  // )
  //   .then((response) => {
  //     // If the HTTP response is 2xx then it response.ok will have a value of true
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       // If the API responds meaningful error message,
  //       // then you can get it by calling response.statusText
  //       throw new Error('Sorry something went wrong');
  //     }
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     setUnis(data);
  //   })
  //   .catch((error) => {
  //     // It is always recommended to define the error messages
  //     // in the client side rather than simply relying on the server messages,
  //     // since server messages might not make sense to end user most of the time.
  //     setError(error.message);
  //   });

  return (
    <React.Fragment>
      <header className="header">
        <p className="page-title">Add Location</p>
      </header>
      <main className="main">
        <div className="search-container">
          <div className="search-box">
            <Input onMOTHAFUKA={() => handleChange}></Input>
            <div className="results-container">
              {cities.length > 1 ? (
                cities.map((city: ICity, index) => (
                  <div
                    className="result"
                    key={index}
                    onClick={() =>
                      console.log(`Clicked the city: ${city.name}`)
                    }
                  >
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
        <Button shape="circle">
          <FiMenu />
        </Button>
        <Button shape="rectangle">Button</Button>
      </footer>
      <Outlet />
    </React.Fragment>
  );
}

export default Search;
