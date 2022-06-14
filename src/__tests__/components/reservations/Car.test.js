import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import CarsList from '../../../pages/car/CarsList';
import AddCar from '../../../pages/car/AddCar';
import DeleteCars from '../../../pages/car/DeleteCars';

it('should render Cars List component', () => {
const tree = renderer.create(
	<Provider store={store}>
		<CarsList />
	</Provider>
)
expect(tree).toMatchSnapshot();
});

it('should render AddCar component', () => {
const tree = renderer.create(
	<Provider store={store}>
		<AddCar />
	</Provider>
)
expect(tree).toMatchSnapshot();
});

// it('should render DeleteCars component', () => {
// const tree = renderer.create(
// 	<Provider store={store}>
// 		<DeleteCars />
// 	</Provider>
// )
// expect(tree).toMatchSnapshot();
// });
