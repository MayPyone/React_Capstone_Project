import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

test('Testing included links', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,

  );
  const homeLink = getByText('Born your appetite!');
  expect(homeLink).toBeInTheDocument();
});
