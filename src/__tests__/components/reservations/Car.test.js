import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import CarsList from '../../../pages/car/CarsList';

it('should render Cars List component', () => {
const tree = renderer.create(
	<Provider store={store}>
		<CarsList />
	</Provider>
)
expect(tree).toMatchSnapshot();
});
