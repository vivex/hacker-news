import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import configureStore from "./configure-store";
import ReactDOM from "react-dom";
const store = configureStore({});

test('renders about link', () => {
  const { getByText } = render(<App store={store}/>);
  const linkElement = getByText(/news/i);
  expect(linkElement).toBeInTheDocument();
});
