import React from 'react';
import { Link } from 'react-router';

const TopFoodCard = ({ foodData }) => {
    console.log(foodData);

    const { _id, foodName, foodImageURL, foodOrigin, price, totalSold, foodCategory } = foodData;
    return (
        <div
            className='shadow-md border border-secondary p-5 rounded-lg'>

            <div className='flex flex-col justify-between'>
                <img src={foodImageURL} alt={foodName} className='w-full rounded-xl' />

                <div className='flex justify-between items-center mt-5'>
                    <div className='flex flex-col md:flex-row md:items-center gap-2'>
                        <Link to={`/food-details/${_id}`}><h3 className='text-xl font-bold transition duration-200 hover:text-primary '>{foodName}</h3></Link>
                        <p className='text-center rounded-xl bg-sky-400 w-fit px-2'>{foodCategory}</p>
                    </div>
                    <p className='font-semibold'>{price} BDT</p>
                </div>

                <div className='my-3'>
                    <p>Total Sold x {totalSold}</p>
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

export default TopFoodCard;