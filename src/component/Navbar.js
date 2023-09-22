import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchCuisine, search } from '../redux/cuisine/cuisineSlice';

export default function Navbar() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const { value } = event.target;
    setData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(data));
    dispatch(fetchCuisine());
    document.querySelector('input').value = '';
  };

  return (
    <>
      <header>
        <h1>Born your appetite!</h1>
        <form onSubmit={handleSubmit}>
          <input className="search" type="search" placeholder="Search" onChange={handleSearch} />
        </form>
        <span className="try"> You can try the following types of cuisine.</span>
        <ul>
          <li>African</li>
          <li>Asian</li>
          <li>American</li>
          <li>British</li>

          <li>Chinese</li>
          <li>Eastern European</li>
          <li>European</li>
          <li>French</li>

          <li>German</li>
          <li>Greek</li>
          <li>Indian</li>
          <li>Italian</li>

          <li>Japanese</li>
          <li>Korean</li>
          <li>European</li>
          <li>Jewish</li>

          <li>Irish</li>
          <li>Latin American</li>
          <li>Mexican</li>
          <li>Middle Eastern</li>

          <li>Cajun</li>
          <li>Mediterranean</li>
          <li>Nordic</li>
          <li>Spanish</li>

          <li>Thai</li>
          <li>Vietnamese</li>
        </ul>
      </header>
    </>
  );
}
