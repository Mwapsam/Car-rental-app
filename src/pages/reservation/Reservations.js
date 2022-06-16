import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getReservations from '../../services/reservation.service';
import convertDate from '../../helpers/dateFormatter';

const Reservations = () => {
  const dispatch = useDispatch();

  const reservation = useSelector((state) => state.reservations);

  useEffect(() => {
    if (!reservation) {
      dispatch(getReservations());
    }
  },
  []);

  const res = reservation.reservations;

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center top-0 md:sticky border-b-2 border-neutral-2 w-full py-4 mb-8 bg-zinc-50">
          <h4 className="font-black text-lg md:text-2xl uppercase p-0 m-0 ">My Reservations</h4>
        </div>

        <div className="grid grid-cols-3 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
          {res && res.map((res) => (
            <div key={res.id} className="bg-white border border-neutral-300">
              <div>
                <div className="flex gap-8 p-4">
                  <div className="">
                    <img className="w-52" src={`${process.env.REACT_APP_SERVER}${res.car.pictures}`} alt="Sunset in the mountains" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold">
                      {res.car.name}
                    </p>
                    <p>
                      <span className="font-bold">Location:</span>

                      {' '}
                      {res.city}

                    </p>
                    <p>
                      <span className="font-bold">Duration:</span>
                      {' '}
                      {res.duration}
                      {' '}
                      days
                    </p>
                  </div>

                </div>
              </div>
              <p className="p-4 bg-emerald-500">
                Reserved for -
                {' '}
                <span className="font-bold">
                  {convertDate(res.date_reserved)}
                </span>

              </p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Reservations;
