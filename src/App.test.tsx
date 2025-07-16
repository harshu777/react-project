import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './store/authSlice';
import App from './App';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Travel Booking/i);
  expect(linkElement).toBeInTheDocument();
});
