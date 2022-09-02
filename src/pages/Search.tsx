import React, { ChangeEvent, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../components/common/Button';
import './Search.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { useBoolean, useDebounce, useReadLocalStorage } from 'usehooks-ts';
import styled from 'styled-components';
import {
  IMapsAutocomplete,
  IPrediction,
} from '../interfaces/IMapsAutocomplete';
import ReactModal from 'react-modal';
import ModalContent from '../components/ModalContent/ModalContent';
import './Search.css';

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
  const [modalCity, setModalCity] = useState<string>('');
  const [inputValue, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(inputValue, 1000);
  const cities = useAutocomplete(debouncedValue);
  const { value, setTrue, setFalse } = useBoolean(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSelection = (city: string) => {
    setModalCity(city);
    setTrue();
  };

  const storedObject: any = useReadLocalStorage('storedCities');
  const storedCities = JSON.parse(storedObject);
  console.log(storedCities);

  return (
    <React.Fragment>
      <header className="header">
        <p className="page-title">Add Location</p>
      </header>
      <main className="main">
        <div className="search-container">
          <div className="search-box">
            <StyledInput
              type="text"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <div className="results-container">
            {cities.length > 0 ? (
              cities.map((city: IPrediction, index) => (
                <div
                  onClick={() =>
                    handleSelection(city.structured_formatting.main_text)
                  }
                >
                  {city.structured_formatting.main_text}
                </div>
              ))
            ) : (
              <div className="empty-results">
                <div style={{ fontSize: '24px' }}>Search for a city</div>
                <div style={{ fontSize: '20px', color: '#FFFFFF80' }}>
                  E.g. London, New York, Berlin
                </div>
              </div>
            )}
          </div>
        </div>
        <ReactModal
          className="modal"
          overlayClassName="modal-overlay"
          isOpen={value}
          shouldCloseOnOverlayClick={true}
          onRequestClose={setFalse}
          shouldCloseOnEsc={true}
          ariaHideApp={false}
          preventScroll={true}
        >
          <div className="close-button">
            <Button shape="circle" onClick={setFalse}>
              <FiX />
            </Button>
          </div>
          <ModalContent value={modalCity} storedCities={storedCities} />
        </ReactModal>
      </main>
      <footer className="footer"></footer>
      <Outlet />
    </React.Fragment>
  );
};

export default Search;
