import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteCars, getCars } from '../../services/car.service';

const DeleteCars = () => {
	const dispatch = useDispatch()
	const {token} = useSelector((state) => state.user.data);
	const {carsList, isCarsStored} = useSelector((state) => state.cars);
	useEffect(() => {
    if (!isCarsStored) { dispatch(getCars()); }
  }, []);

	const deleteCar = (id) => {
		dispatch(deleteCars({id, token}))
	}

	return (
		<ul>
		{ carsList && carsList.map((car) => (
			<li key={car.id}>
			<h4>{car.name}</h4>
			<button type="button"
			onClick={() => deleteCar(car.id)}
			>delete</button>
		  </li>
		))}
		</ul>
	)
}

export default DeleteCars
