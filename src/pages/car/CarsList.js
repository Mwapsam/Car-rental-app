import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getCars from '../../services/car.service';

const CarsList = () => {
  const dispatch = useDispatch();
  const { carsList } = useSelector((state) => state.cars);
  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div>
      <h1>Cars</h1>
      {carsList && carsList.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
          <p>{car.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CarsList;