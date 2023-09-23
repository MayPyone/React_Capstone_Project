import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';  
import { useDispatch } from 'react-redux';

test('Testing included links', () => {
  const { getByText } = render(
   <Provider store={store}>
   <App />
   </Provider>
   
  );
  const homeLink = getByText('Born your appetite!');
  expect(homeLink).toBeInTheDocument();
});