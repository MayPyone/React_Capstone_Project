import './home.css';
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { fetchDetail } from '../redux/cuisine/detailSlice';

export default function Detail() {
  const { detailCuisine, ingredient, instruction } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetail());
  }, [dispatch]);

  return (
    <>
      <div key={uuidv4()}>
        <div className="detail-container">
          <div className="button-container">
            <NavLink to="/">
              <IoIosArrowBack size={23} color="white" />
            </NavLink>

            <p className="glance">Recipe at a glance</p>
          </div>
          <div className="img-background">
            <div className="container">
              <Card.Img src={detailCuisine.image} className="detail-img" />
              <p className="recipe-title">{detailCuisine.title}</p>
            </div>
          </div>

          <div className="container">
            <div className="ingredient-container">
              <p>Time taken</p>
              <p>
                {detailCuisine.readyInMinutes}
                minutes
              </p>
              <p>Ingredients</p>
              <p>
                {ingredient.map((item) => (
                  <span key={uuidv4()}>
                    {item.original}
                    ,
                    {' '}
                  </span>
                ))}
              </p>
              <p>Instruction</p>
              <p>
                {
                instruction
              }
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
