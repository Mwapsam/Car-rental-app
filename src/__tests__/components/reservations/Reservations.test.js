import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import Reservations from '../../../pages/reservation/Reservations';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Reservation', () => {
  it('should render correctly', () => {
    const tree = render(<Reservations />);
    expect(tree).toMatchSnapshot();
  });

  it('should render the title', () => {
    const { getByText } = render(<Reservations />);
    expect(getByText('My Reservations')).toBeInTheDocument();
  });
});
