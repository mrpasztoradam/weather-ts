import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import { getDummyData } from '../data/DummyData';
import { FiMail, FiPlus } from 'react-icons/fi';
import Button from '../components/common/Button';
import ToggleSwitch from '../components/common/ToggleSwitch';
import SmallCard from '../components/SmallCard';
import './List.css';
import { ICard } from '../interfaces/ICard';

const List = () => {
  const [values, setLocalStorage] = useLocalStorage('storedCities', '');
  const storedObject: any = useReadLocalStorage('storedCities');
  const storedCities = JSON.parse(storedObject);
  //console.log(storedCities);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <header className="header">
        <p className="page-title">Locations</p>
      </header>
      <main className="main">
        <div className="card-container">
          {storedCities.length > 0 &&
            storedCities.map((city: string, index: number) => (
              <>
                <SmallCard
                  onClick={() => navigate(`/details/${city}`)}
                  cityName={city}
                  id={index}
                ></SmallCard>
              </>
            ))}
        </div>
      </main>
      <footer className="footer">
        <div>
          <ToggleSwitch />
        </div>
        <div className="nav-button">
          <Button shape="circle" onClick={() => navigate(`search`)}>
            <FiPlus />
          </Button>
        </div>
      </footer>
      <Outlet />
    </React.Fragment>
  );
};

export default List;
