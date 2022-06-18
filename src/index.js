import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoriteContexProvider } from './store/favorites-contex'

ReactDOM.render(
  <FavoriteContexProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoriteContexProvider>,
  document.getElementById('root')
);
