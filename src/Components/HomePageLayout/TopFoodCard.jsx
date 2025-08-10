import React from 'react';
import { NavLink } from 'react-router';

const TopFoodCard = ({ foodData }) => {
    const { _id, foodName, foodImageURL, totalSold, foodCategory } = foodData;
    return (
        <div
            className='shadow-md border border-secondary p-3 xl:p-4 rounded-lg'>

            <div className='flex flex-col justify-between h-full'>
                <div className="relative">
                    <img
                        src={foodImageURL}
                        alt={foodName}
                        className="w-full rounded-lg"
                    />
                    <p className="absolute top-0 right-0 m-2 rounded-xl bg-sky-400 px-2 py-1 text-sm font-medium">
                        {foodCategory}
                    </p>
                </div>

                <div className='space-y-2 py-2'>
                    <div>
                        <NavLink to={`/food-details/${_id}`}><h3 className='text-xl font-bold transition duration-200 hover:text-primary '>{foodName}</h3></NavLink>
                    </div>
                    <div>
                        <p>Total Sold x {totalSold}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <NavLink className='flex-1 btn btn-md btn-primary py-1 btn-outline' to={`/food-details/${_id}`}>View Details</NavLink>
                    <NavLink className='flex-1 btn btn-md btn-primary py-1 text-white' to={`/purchase-food/${_id}`}>Order Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default TopFoodCard;