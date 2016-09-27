import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App source="http://localhost:8080/auctions"/>,
  document.getElementById('root')
);
