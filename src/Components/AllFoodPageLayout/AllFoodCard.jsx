import React from 'react';
import { Link } from 'react-router';

const AllFoodCard = ({ foodDetails }) => {

    const {_id, foodName, foodImageURL, foodCategory, foodDescription, price } = foodDetails;
    // console.log(_id)
    return (
        <div className='shadow-md border border-secondary p-5 rounded-lg'>
            <div className='h-full flex flex-col justify-between space-y-2'>
                <div>
                    <img src={foodImageURL} alt="food image" className='w-full rounded-xl' />
                    <div className='space-y-2 flex-2 col-span-2 flex justify-between mt-5'>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-bold'>{foodName}</h3>
                            <p className='text-center rounded-xl bg-sky-400 w-fit px-3'>{foodCategory}</p>
                        </div>
                        <p className='text-lg'>Price : {price} BDT</p>
                    </div>
                    <p className='line-clamp-3 my-2'>{foodDescription}</p>
                </div>

                <div className='flex gap-2'>
                    <a className='btn btn-sm' to={`/food/${_id}`}>View Details</a>
                </div>
            </div>
        </div>
    );
};

export default AllFoodCard;