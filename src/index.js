import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Board from './components/App/App';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Board />
  </React.StrictMode>
);

