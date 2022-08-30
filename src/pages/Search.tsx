import React, { ChangeEvent, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../components/common/Button';
import './Search.css';
import { FiMenu } from 'react-icons/fi';
import { useDebounce } from 'usehooks-ts';
import styled from 'styled-components';
import { IMapsAutocomplete } from '../interfaces/IMapsAutocomplete';

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #e9e9e9;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  font-size: 24px;
  text-indent: 1rem;
`;

function Search() {
  const [cities, setState] = useState([]);
  const [error, setError] = useState('');
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 1000);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (debouncedValue) {
      fetch(
        `https://fast-dawn-89938.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${debouncedValue}&inputtype=textquery&key=${process.env.REACT_APP_PLACES_API}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Sorry something went wrong');
          }
        })
        .then((data) => {
          console.log(data);
          setState(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [debouncedValue]);

  return (
    <React.Fragment>
      <header className="header">
        <p className="page-title">Add Location</p>
      </header>
      <main className="main">
        <div className="search-container">
          <div className="search-box">
            <>
              <StyledInput type="text" value={value} onChange={handleChange} />
              {console.log(cities.length)}
            </>
            <div className="results-container">
              {cities.length > 0 ? (
                cities.map((city: IMapsAutocomplete, index) => (
                  <div
                    className="result"
                    key={index}
                    onClick={() =>
                      console.log(
                        `Clicked the city: ${city.predictions[0].structured_formatting.main_text}`
                      )
                    }
                  >
                    <>
                      {console.log(cities.length.toString())}
                      {city.predictions[index].structured_formatting.main_text}
                    </>
                  </div>
                ))
              ) : (
                <div>Akkor jelenek meg, ha üres a találati lista tömb...</div>
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
