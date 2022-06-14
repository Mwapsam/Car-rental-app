/* eslint-disable react/prop-types */
import React from 'react';
import TextTruncate from 'react-text-truncate';

const CarCard = ({
  name, description, id, deleteCar, picture,
}) => (
  <div className="max-w-sm overflow-hidden shadow-lg border border-neutral-300 bg-white">
    <div className="flex justify-center  border-neutral-300">
      <img className="w-auto p-2 h-52" src={`${process.env.REACT_APP_SERVER}${picture}`} alt="Sunset in the mountains" />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name || 'Audi Jeep Q3'}</div>
      {!id && (
      <p className="text-gray-700 text-base">
        <TextTruncate
          line={1}
          element="span"
          truncateText="…"
          text={description}
        />
      </p>
      )}
    </div>
    {!id && (
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-emerald-500  px-3 py-1 text-sm font-bold text-neutral-900 mr-2 mb-2">AC</span>
      <span className="inline-block bg-emerald-500  px-3 py-1 text-sm font-bold text-neutral-900 mr-2 mb-2">4 DOORS</span>
      <span className="inline-block bg-emerald-500  px-3 py-1 text-sm font-bold text-neutral-900 mr-2 mb-2">TINTED</span>
    </div>
    )}

    {id ? (<button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 w-full" onClick={(e) => deleteCar(e, id)}>Delete</button>) : (<></>)}

  </div>
);

export default CarCard;
