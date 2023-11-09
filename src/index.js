import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './App';
import Header from './Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Board />
  </React.StrictMode>
);

