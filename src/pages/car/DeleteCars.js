import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteCars, getCars } from '../../services/car.service';

const DeleteCars = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user.data);
	const {carsList, isCarsStored} = useSelector((state) => state.cars);
	useEffect(() => {
    if (!isCarsStored) { dispatch(getCars()); }
  }, []);

	return (
		<ul>
		{ carsList && carsList.map((car) => (
			<li key={car.id}>
			<h4>{car.name}</h4>
			<button type="button">delete</button>
		  </li>
		))}
		</ul>
	)
}

export default DeleteCars
