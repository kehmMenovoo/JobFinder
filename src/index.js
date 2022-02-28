import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { DataProvider } from "./contexts/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <Route path="/" component={App} />
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

