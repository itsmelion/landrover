require('dotenv-extended').load(); // Expose environment variables on this document
import React from 'react';
import { render } from 'react-dom';
import VehicleList from './components/VehicleList';

render(<VehicleList />, document.getElementById('app'));
