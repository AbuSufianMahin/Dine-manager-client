import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { errorToastAlert } from '../../Utility/toastAlert';
import { getTodayDate } from '../../Utility/liveDateGenerator';

const PurchaseFoodPage = () => {
    const { user } = use(AuthContext);
    const foodDetails = useLoaderData();
    const { quantity, foodAuthorEmail, foodName, price } = foodDetails;

    const [remainingQuantity, setRemainingQuantity] = useState(quantity);
    const [date, setDate] = useState({});

    const handleQuantityOnChange = (e) => {
        if (quantity - e.target.value < 0) {
            e.target.value = quantity;
            errorToastAlert("You cannot order more than the available stock.");
        }
        else {
            setRemainingQuantity(quantity - e.target.value);
        }
    }

    useEffect(() => {
        const dateToday = getTodayDate();
        setDate(dateToday);
    }, [setDate])

    return (
        <div className='mt-10 mb-20'>
            <h1 className='text-center text-2xl md:text-4xl font-bold'>Order food</h1>
            <div className='w-11/12 lg:w-6/12 mx-auto'>
                <form>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Food Name</legend>
                        <input name="foodName" type="text" className="input w-full" placeholder="Enter Food Name" defaultValue={foodName} required readOnly/>
                    </fieldset>


                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-3'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg">Quantity</legend>
                            <input name="quantity" type="Number" min='0' className="input w-full" placeholder="Enter Quantity" onChange={handleQuantityOnChange} required />
                            {
                                quantity === 0 ? 
                                <p className='text-sm text-error'>Item is not available</p>
                                :
                                <p>Remaining Quantity: {remainingQuantity}</p>
                            }

                            
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg">Price</legend>
                            <input name="price" type='text' min='0' className="input w-full" placeholder="Enter Food Price (BDT)" defaultValue={`${price} BDT`} required readOnly/>
                        </fieldset>
                    </div>

                    <h1 className='text-lg font-bold mt-5 border-b pb-2 text-center'>Buyers Info</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg">User Name</legend>
                            <input name="foodAuthorName" type="text" className="input w-full" placeholder="User Name" defaultValue={user.displayName} title='You can not change this input field' required readOnly />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg">User Email</legend>
                            <input name="foodAuthorEmail" type="text" className="input w-full" placeholder="User Email" defaultValue={user.email} title='You can not change this input field' required readOnly />
                        </fieldset>
                        <div>
                            <p><span className='font-semibold'>Buying date (DD-MM-YYYY):</span> {`${date.day}-${date.month}-${date.year}`}</p>
                        </div>
                    </div>

                    <button type='submit' className={`btn text-white btn-primary btn-block mt-5 
                    ${(quantity === 0 || user.email === foodAuthorEmail) && "btn-disabled"}`}>
                        Purchase Food
                    </button>
                    {
                        user.email === foodAuthorEmail && <p className='text-sm text-error'>You can not purchase your own items</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default PurchaseFoodPage;