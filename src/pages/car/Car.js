import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import getCars from '../../services/car.service';

const Car = () => {
  const dispatch = useDispatch();
  const { carsList } = useSelector((state) => state.cars);
  const isCarsStored = useSelector((state) => state.cars.isCarsStored);
  const { carId } = useParams();
  const carDetail = carsList.filter((car) => car.id === +carId);
  const car = { ...carDetail[0] };
  useEffect(() => {
    if (!isCarsStored) { dispatch(getCars()); }
  }, []);

  return (
    <>
      <h1>{car.name}</h1>
      <img src={car.image} alt={car.name} />
      <p>
        $
        {car.price}
        /day
      </p>
      <p>{car.description}</p>
      { car.reserved ? (<button type="button" disabled>Reserved</button>)
        : (<button type="button">Reserve</button>)}
    </>
  );
};

export default Car;
