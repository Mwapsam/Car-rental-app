import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import getCars from '../../services/car.service';

const Car = () => {
  const { carsList } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const { carId } = useParams();
	const carDetail = carsList.filter((car) => car.id === +carId)

	useEffect(() => {
    dispatch(getCars());
  }, []);
	

	return (
	<div>Show single Car</div>
	)};

export default Car;
