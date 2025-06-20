import React from 'react';
import { CgMoreO } from 'react-icons/cg';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router';

const MyAddedFoodsCard = ({ foodData }) => {

    const { _id, foodImageURL, foodName, foodCategory, foodDescription, price, foodOrigin, quantity } = foodData;
    return (
        <div className='border border-primary p-5 rounded-xl flex flex-col md:flex-row justify-between items-center gap-5'>
            <div className='flex flex-col md:flex-row gap-5'>
                <img src={foodImageURL} alt={`${foodName} image`} className='rounded-xl w-full md:w-1/2 lg:w-full' />
                <div>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-xl font-bold'>{foodName}</h1>
                        <p className='text-center rounded-xl bg-sky-400 w-fit px-2'>{foodCategory}</p>
                    </div>
                    
                    <p className='line-clamp-3 my-3'>{foodDescription}</p>

                    <p><span className='font-semibold'>Price: </span>{price} BDT</p>
                    <p><span className='font-semibold'>Origin: </span>{foodOrigin}</p>
                    <p><span className='font-semibold'>Quantity: </span>{quantity}</p>


                </div>
            </div>

            <div className='flex md:flex-col justify-between gap-3'>
                <Link to={`/food-details/${_id}`}><button className='btn btn-sm btn-info text-white'><CgMoreO size={20} /></button></Link>
                <button className='btn btn-sm bg-gray-700 text-white'><MdEdit size={20} /></button>
                <button className='btn btn-sm btn-error text-white'><MdDelete size={20} /></button>
            </div>
        </div>
    );
};

export default MyAddedFoodsCard;