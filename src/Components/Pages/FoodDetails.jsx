import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const FoodDetails = () => {

    const navigate = useNavigate();
    const { foodName, foodImageURL, foodDescription, foodCategory, price, foodOrigin, quantity } = useLoaderData();


    return (
        <section>
            <div className="w-11/12 lg:w-1/2 mx-auto py-5 md:py-10 lg:py-15">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 text-sm hover:underline hover:cursor-pointer"
                >
                    ← Back to list
                </button>

                <div className="shadow-md rounded-2xl overflow-hidden grid items-center md:grid-cols-2 gap-6 p-6 border border-primary">
                    {/* Image */}
                    <img
                        src={foodImageURL}
                        alt={foodName}
                        className="w-full object-cover rounded-xl"
                    />

                    {/* Content */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className='flex gap-4 items-center'>
                                <h2 className="text-2xl font-bold mb-2">{foodName}</h2>
                                <p className="text-center rounded-xl bg-sky-400 w-fit px-3">{foodCategory}</p>
                            </div>

                            <div className='my-2 space-y-2'>
                                <p className="text-sm">{foodDescription}</p>
                                <p className="rounded-xl"><span className='font-semibold'>Price:</span> {price} BDT</p>
                                <p className="rounded-xl"><span className='font-semibold'>Origin:</span> {foodOrigin}</p>
                                <p className="rounded-xl"><span className='font-semibold'>Remaining Quantity:</span> {quantity}</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="btn btn-primary w-full text-white">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodDetails;