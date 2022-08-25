import { useParams } from 'react-router-dom';
import { getDummyData } from '../data/DummyData';

let dummydata = getDummyData();

export default function CityDetails() {
  let params = useParams();

  return (
    <>
      <h2>Details {params.cityId}</h2>
      <p> City name: {dummydata[Number(params.cityId)].name}</p>
    </>
  );
}
