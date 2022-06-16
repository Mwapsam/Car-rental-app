/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCars, updateCar } from '../../services/car.service';
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

  const createReserve = (status) => {
    dispatch(CreateReservations({
      user_id: user.id,
      car_id: car.id,
      city: reserve.city,
      duration: reserve.duration,
      date_reserved: reserve.date_reserved,
    }));
    dispatch(updateCar({ id: car.id, token: user.token, status }));
    toast.success('You have successfully reserved the car!');
  };
  const handleChange = (e) => {
    setReserve({ ...reserve, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center top-0 md:sticky border-b-2 border-neutral-2 w-full py-4 mb-8 bg-zinc-50">
        <h4 className="font-black text-lg md:text-2xl uppercase p-0 m-0 ">{car.name}</h4>
        <h4 className="font-black text-emerald-500 text-lg md:text-2xl p-0 m-0 ">
          $
          {car.price}
          /day
        </h4>
      </div>
      <div />
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-8">
          {' '}
          <img className="w-full p-2" src={`${process.env.REACT_APP_SERVER}/${car.pictures}`} alt="Sunset in the mountains" />
        </div>
        <div className="w-full md:w-2/6">

          <h4 className="font-black text-lg uppercase border-b border-neutral-300 pb-2 mb-4">Reserve Car</h4>
          {user
          && (
          <form onSubmit={(e) => handleSubmit(e)}>

            <div className="w-full ">
              <label className="block uppercase tracking-wide text-neutral-800 text-xs font-bold mb-2">
                City
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-neutral-800 border border-gray-200 py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="city" onChange={handleChange} />
            </div>

            <div className="w-full">
              <label className="block uppercase tracking-wide text-neutral-800 text-xs font-bold mb-2">
                Duration
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-neutral-800 border border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="duration" onChange={handleChange} />
            </div>

            <div className="w-full ">
              <label className="block uppercase tracking-wide text-neutral-800 text-xs font-bold mb-2">
                Date
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-neutral-800 border border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="date_reserved" onChange={handleChange} />
            </div>

            { car.reserved ? (<button className="bg-emerald-700 text-white font-bold py-2 px-6" type="button" disabled>Reserved</button>)
              : (<button type="submit" className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-6" onClick={() => createReserve(car.reserved)}>Reserve</button>)}

          </form>
          )}

          <h4 className="font-black text-lg uppercase border-b border-neutral-300 pb-2 mt-8 mb-4">Details</h4>
          <p>{car.description}</p>
        </div>
      </div>

    </div>
  );
};

export default Car;
