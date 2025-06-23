import React from 'react';
import { Link } from 'react-router';

const AllFoodCard = ({ foodDetails }) => {

    const { _id, foodName, foodImageURL, foodOrigin, foodCategory, price, } = foodDetails;

    return (
        <div className='shadow-md border border-secondary p-5 rounded-lg'>
            <div className='h-full flex flex-col justify-between'>
                <img src={foodImageURL} alt={foodName} className='w-full rounded-xl' />
                <div className='mt-5 flex flex-col md:flex-row md:items-center gap-2'>
                    <Link to={`/food-details/${_id}`}><h3 className='text-xl font-bold transition duration-200 hover:text-primary '>{foodName}</h3></Link>
                    <p className='text-center rounded-xl bg-sky-400 w-fit px-2'>{foodCategory}</p>
                </div>

                <div className='my-3'>
                    <p>Price : {price} BDT</p>
                    <p>Origin : {foodOrigin}</p>
                </div>
                <div className='flex gap-2'>
                    <Link className='flex-1 btn btn-primary text-white' to={`/food-details/${_id}`}>View Details</Link>
                    <Link className='flex-1 btn btn-primary text-white' to={`/purchase-food/${_id}`}>Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default AllFoodCard;