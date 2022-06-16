import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCars } from '../../services/car.service';
import CarCard from '../../components/CarCard';

const CarsList = () => {
  const dispatch = useDispatch();
  const { carsList, isCarsStored } = useSelector((state) => state.cars);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!isCarsStored) {
      dispatch(getCars());
    }
  }, []);

  return (
    <div className="w-full">
      <h4 className="font-black text-lg md:text-2xl uppercase p-0 m-0 ">Available Cars</h4>
      {user.data && (
      <div className="flex justify-between items-center top-0 md:sticky border-b-2 border-neutral-2 w-full py-4 mb-8 bg-zinc-50">
        {user.data.role === 'admin' && (
        <div className="flex gap-x-4">
          <Link to="/cars/new" className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-6">Create</Link>
          <Link to="/cars/deleteCars" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6">Delete</Link>
        </div>
        )}

      </div>
      )}

      <div className="grid grid-cols-3 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
        {carsList
        && carsList.map((car) => (
          <Link to={`/cars/${car.id}`} key={car.id}>
            <CarCard
              name={car.name}
              description={car.description}
              picture={car.pictures}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CarsList;
