import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import Reservations from '../../../pages/reservation/Reservations';

it('Should render Reservations list component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Reservations />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
