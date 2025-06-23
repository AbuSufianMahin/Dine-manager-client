import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const FoodDetails = () => {

    const navigate = useNavigate();
    const { _id, foodName, foodImageURL, foodDescription, foodCategory, price, foodOrigin, quantity, foodAuthorName, foodAuthorEmail } = useLoaderData();


    return (
        <section>
            <div className="w-11/12 lg:w-4/5 xl:w-3/5 mx-auto py-5 md:py-10 lg:py-15">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 text-sm hover:underline hover:cursor-pointer"
                >
                    ← Back to list
                </button>

                <div className="shadow-md rounded-2xl overflow-hidden flex flex-col lg:flex-row lg:items-center gap-4 md:gap-6 p-4 md:p-6 border border-primary">

                    <div className='lg:flex-10'>
                        <img
                            src={foodImageURL}
                            alt={foodName}
                            className="w-full md:w-2/3 lg:w-full mx-auto object-cover rounded-xl"
                        />
                    </div>

                    <div className="flex flex-col justify-between lg:flex-12">
                        <div>
                            <div className='flex gap-4 items-center'>
                                <h2 className="text-2xl font-bold mb-2">{foodName}</h2>
                                <p className="text-center rounded-xl bg-sky-400 w-fit px-3">{foodCategory}</p>
                            </div>

                            <div className='my-1 space-y-2'>
                                <p className="text-sm">{foodDescription}</p>
                                <p className="rounded-xl"><span className='font-semibold'>Price:</span> {price} BDT</p>
                                <p className="rounded-xl"><span className='font-semibold'>Origin:</span> {foodOrigin}</p>
                                <p className="rounded-xl"><span className='font-semibold'>Remaining Quantity:</span> {quantity}</p>
                                <hr/>
                                <p className="rounded-xl"><span className='font-semibold'>Owner Name: </span>{foodAuthorName}</p>
                                <p className="rounded-xl"><span className='font-semibold'>Owner Email: </span>{foodAuthorEmail}</p>


                            </div>
                        </div>

                        <div className='mt-2'>
                            <Link to={`/purchase-food/${_id}`}>
                                <button className="btn btn-primary w-full text-white">Order Now</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FoodDetails;