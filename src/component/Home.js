import './home.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import CuisineList from './CuisineList';
import { fetchCuisine } from '../redux/cuisine/cuisineSlice';

export default function Home() {
  const { totalcuisines } = useSelector((state) => state.cuisine);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCuisine());
  }, [dispatch]);
  return (
    <>
      <div>
        {totalcuisines.length <= 0 ? <div className="showError">Sorry We can&apos;t support that!</div>
          : (
            <div className="container1">
              {totalcuisines.map((cuisine) => (
                <CuisineList
                  title={cuisine.title}
                  image={cuisine.image}
                  id={cuisine.id}
                  key={uuidv4()}
                />
              ))}
            </div>
          )}

      </div>
    </>
  );
}
