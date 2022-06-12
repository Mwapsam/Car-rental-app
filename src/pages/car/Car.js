/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCars } from '../../services/car.service';
import LocalStorage from '../../helpers/localStorage';
import { CreateReservations } from '../../services/reservation.service';

const initState = {
  user_id: '', car_id: '', city: '', duration: '', date_reserved: '',
};

const Car = () => {
  const [reserve, setReserve] = useState(initState);

  const dispatch = useDispatch();
  const { carsList, isCarsStored } = useSelector((state) => state.cars);
  const { carId } = useParams();
  const carDetail = carsList.filter((car) => car.id === +carId);
  const car = { ...carDetail[0] };
  const user = LocalStorage.getUser();
  useEffect(() => {
    if (!isCarsStored) { dispatch(getCars()); }
  }, []);

  const createReserve = () => {
    dispatch(CreateReservations({
      user_id: user.id,
      car_id: car.id,
      city: reserve.city,
      duration: reserve.duration,
      date_reserved: reserve.date_reserved,
    }));
  };

  const handleChange = (e) => {
    setReserve({ ...reserve, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <h1>{car.name}</h1>
      <img src={car.image} alt={car.name} />
      <p>
        $
        {car.price}
        /day
      </p>
      <form onReset={handleSubmit}>
        <label>
          City:
          <input type="text" name="city" onChange={handleChange} />
        </label>
        <label>
          Duration:
          <input type="text" name="duration" onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="text" name="date_reserved" onChange={handleChange} />
        </label>
        { car.reserved ? (<button type="button" disabled>Reserved</button>)
          : (<button type="button" onClick={createReserve}>Reserve</button>)}
      </form>
      <p>{car.description}</p>
    </>
  );
};

export default Car;
