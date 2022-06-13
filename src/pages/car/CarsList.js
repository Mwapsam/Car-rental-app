import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCars } from '../../services/car.service';

const CarsList = () => {
  const dispatch = useDispatch();
  const { carsList, isCarsStored } = useSelector((state) => state.cars);
  useEffect(() => {
    if (!isCarsStored) { dispatch(getCars()); }
  }, []);

  return (
    <div>
      <h1>Cars</h1>
      {carsList && carsList.map((car) => (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-card">
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CarsList;
