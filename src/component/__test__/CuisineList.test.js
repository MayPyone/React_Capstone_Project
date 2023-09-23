import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Test from './Test';
import CuisineList from '../CuisineList';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for NavLink


jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('CuisineList Component', () => {
  it('renders all after fetching data', () => {
    const cuisine = {

      title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
      image: 'img.jpg',
      id: 716426,
    };
    
    const {getByText,getByTestId } = render(
      <Router>
      <CuisineList title={cuisine.title } image={cuisine.image} id={cuisine.id}/>
      </Router>
  );
    const imageElement = screen.getByAltText('cuisine image');
     expect(getByText('Cauliflower, Brown Rice, and Vegetable Fried Rice')).toBeInTheDocument();
     expect(imageElement).toHaveAttribute('src', 'img.jpg');
     expect(getByTestId('back-button')).toBeInTheDocument();
  });
});
