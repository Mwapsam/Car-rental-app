/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createCar } from '../../services/car.service';

const AddCar = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [imageData, setImageData] = useState(null);
  const form = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('car[name]', name);
    formData.append('car[description]', description);
    formData.append('car[price]', price);
    formData.append('car[pictures]', imageData);

    dispatch(createCar(formData));
  };

  const handleChange = () => {
    form.current.reset();
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center top-0 md:sticky border-b-2 border-neutral-2 w-full py-4 mb-8 bg-zinc-50">
        <h4 className="font-black text-lg md:text-2xl uppercase p-0 m-0 ">Create Car</h4>
      </div>

      <form ref={form} onSubmit={handleSubmit}>

        <div className="w-full ">
          <label className="block uppercase tracking-wide text-neutral-800 text-xs font-bold mb-2">
            Name
          </label>
          <input value={name} className="appearance-none block w-full bg-gray-200 text-neutral-800 border border-gray-200 py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="w-full">
          <label className="block uppercase tracking-wide text-neutral-800 text-xs font-bold mb-2">
            Description
          </label>
          <textarea value={description} className="appearance-none block w-full bg-gray-200 text-neutral-800 border border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="w-full ">
          <label className="block uppercase tracking-wide text-neutral-800 text-xs font-bold mb-2">
            price
          </label>
          <input value={price} className="appearance-none block w-full bg-gray-200 text-neutral-800 border border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className="w-full ">
          <label className="block uppercase tracking-wide text-neutral-800 text-xs font-bold mb-2">
            Image
          </label>
          <input type="file" accept="image/*" className="appearance-none block w-full bg-gray-200 text-neutral-800 border border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => setImageData(e.target.files[0])} />
        </div>

        <button type="submit" className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-6" onClick={handleChange}>Create</button>
      </form>
    </div>
  );
};

export default AddCar;
