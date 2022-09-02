import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Button from '../components/common/Button';
import './Search.css';
import { FiMenu } from 'react-icons/fi';
import { useDebounce } from 'usehooks-ts';
import styled from 'styled-components';
import {
  IMapsAutocomplete,
  IPrediction,
} from '../interfaces/IMapsAutocomplete';

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

const useAutocomplete = (userInput: string) => {
  const [userData, setResult] = useState<IPrediction[]>([]);
  useEffect(() => {
    if (userInput) {
      fetch(
        `https://fast-dawn-89938.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${userInput}&inputtype=textquery&key=${process.env.REACT_APP_PLACES_API}`
      ).then((response) =>
        response.json().then((data: IMapsAutocomplete) => {
          console.log(data);
          const results: IPrediction[] = data.predictions;
          console.log(results);
          return setResult(results);
        })
      );
    }
  }, [userInput]);

  return userData;
};

const Search = () => {
  const [error, setError] = useState('');
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 1000);
  const cities = useAutocomplete(debouncedValue);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <header className="header">
        <p className="page-title">Add Location</p>
      </header>
      <main className="main">
        <div className="search-container">
          <div className="search-box">
            <StyledInput type="text" value={value} onChange={handleChange} />
          </div>
          <div className="results-container">
            {cities.length > 0 ? (
              cities.map((city: IPrediction, index) => (
                <Link
                  to={`/details/${city.structured_formatting.main_text}`}
                  className="result"
                  key={index}
                  // onClick={() =>
                  //   console.log(
                  //     `Clicked the city: ${city.structured_formatting.main_text}`
                  //   )
                  // }
                >
                  {/* <Link to={`/details/${city.structured_formatting.main_text}`}>
                    {city.structured_formatting.main_text}
                  </Link> */}
                  {city.structured_formatting.main_text}
                </Link>
              ))
            ) : (
              <div>Akkor jelenek meg, ha üres a találati lista tömb...</div>
            )}
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
};

export default Search;
