/* eslint-disable max-len */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteCars, getCars } from '../../services/car.service';
import CarCard from '../../components/CarCard';

const DeleteCars = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user.data);
  const { carsList, isCarsStored } = useSelector((state) => state.cars);
  useEffect(() => {
    if (!isCarsStored) { dispatch(getCars()); }
  }, []);

  const deleteCar = (e, id) => {
    e.preventDefault();
    dispatch(deleteCars({ id, token }));
    toast.success("You've successfully deleted the car!");
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center top-0 md:sticky border-b-2 border-neutral-2 w-full py-4 mb-8 bg-zinc-50">
        <h4 className="font-black text-lg md:text-2xl uppercase p-0 m-0 ">Delete Car</h4>
      </div>
      <div className="grid grid-cols-3 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
        { carsList && carsList.map((car) => (
          <CarCard key={car.id} name={car.name} description={car.description} id={car.id} deleteCar={deleteCar} picture={car.pictures} />
        ))}
      </div>
    </div>
  );
};

export default DeleteCars;
