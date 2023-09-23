import React from 'react';
import { render } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
describe('Check redux store connection', () => {
  const detailReducer = {
    detailCuisine: {
      title: 'Apple Juice',
      readyInMinutes: '15',
      image: 'img.jpg',
    },
    ingredient: 'apple',
    instructions: 'Instructions',
  };
  test('renders the components', () => {
    const store = mockStore({
      reducer: {
        detail: detailReducer,
      },
    });

    const Detail = () => {
      const data = useSelector((state) => state.detailReducer);
      return <div>{data}</div>;
    };

    render(
      <Provider store={store}>
        <Detail />
      </Provider>,
    );
  });
});
