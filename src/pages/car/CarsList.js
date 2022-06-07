import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCars } from '../../store/car';

const CarsList = () => {
  const dispatch = useDispatch();
  //   const { cars } = useSelector((state) => state.cars);
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <div>
      <h1>Cars</h1>
      {/* <p>{cars.name}</p> */}
    </div>
  );
};

export default CarsList;
