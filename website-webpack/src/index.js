import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.scss';
import ScrollToTop from './components/ScrollTop';
import VehicleList from './components/VehicleList/VehicleList';
import VehicleDetails from './components/VehicleDetails/VehicleDetails';

render(
  <Router>
    <ScrollToTop>
      <Route exact path="/" component={VehicleList} />
      <Route path="/:id" component={VehicleDetails} />
    </ScrollToTop>
  </Router>,
  document.getElementById('app')
);
