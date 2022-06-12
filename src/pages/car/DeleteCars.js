import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteCars } from '../../services/car.service';

const DeleteCars = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user.data);
	const cars = useSelector((state) => state.cars);
  console.log(cars);

	return (
		<>
			<div>DeleteCars</div>
			<button type="button">delete</button>
		</>
	)
}

export default DeleteCars
