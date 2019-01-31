import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Loading from './Loading';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(Loading, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Displays a Loading message', () => {
  const wrapper = shallow(Loading);
  expect(wrapper.text()).toBe('Loading ...');
});
