import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getReservations from '../../services/reservation.service';
import convertDate from '../../helpers/dateFormatter';

const Reservations = () => {
  const dispatch = useDispatch();

  const reservation = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(getReservations());
  },
  []);

  const res = reservation.reservations;

  return (
    <>
      <h1>Reservations</h1>
      <div className="reservation-list">
        {res.map((res) => (
          <div className="reservation-card" key={res.id}>
            <p>
              Location:
              {res.city}
            </p>
            <p>
              Duration:
              {res.duration}
            </p>
            <p>
              Date:
              {convertDate(res.date_reserved)}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default Reservations;
