import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../../store/car';

const CarsList = () => {
  const dispatch = useDispatch();
  const { carsList } = useSelector((state) => state.cars);
  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div>
      <h1>Cars</h1>
      {carsList && carsList.map((car) => <p key={car.id}>{car.name}</p>)}
    </div>
  );
};

export default CarsList;
