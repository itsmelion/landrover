import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import VehicleItem from './VehicleItem';

const mock = {
  id: 'xf',
  modelYear: 'k17',
  url: '/api/vehicle/xf',
  media: [{ name: 'vehicle', url: '/images/xf_k17.jpg' }],
  description: 'Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.',
  price: '£36,000',
  meta: {
    passengers: 5,
    drivetrain: [
      'AWD',
      'RWD'
    ],
    bodystyles: [
      'saloon'
    ],
    emissions: {
      template: 'CO2 Emissions $value g/km',
      value: 104
    }
  }
};

const wrapper = render(<Router><VehicleItem vehicle={mock} /></Router>);
const h4 = wrapper.find('h4');
const link = wrapper.find('a');

it('renders car name', () => {
  expect(h4.text()).toEqual('vehicle k17');
});

it('Has a link to Vehicle Details', () => {
  expect(link.prop('href')).toEqual('/xf');
});
