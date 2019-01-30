import React from 'react';
import ReactDOM from 'react-dom';
import VehicleList from './VehicleList'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VehicleList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
