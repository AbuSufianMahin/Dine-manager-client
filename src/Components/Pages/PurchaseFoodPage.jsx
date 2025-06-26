import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { errorToastAlert } from '../../Utility/toastAlert';
import { getTodayDate } from '../../Utility/liveDateGenerator';
import axios from 'axios';
import { successAlert } from '../../Utility/sweetAlert';
import useAccessAlert from '../../Hooks/useAccessAlert';

const PurchaseFoodPage = () => {
    const { user } = use(AuthContext);
    const foodDetails = useLoaderData();
    const { _id, quantity, foodAuthorEmail, foodName, price } = foodDetails;

    const [initialQuantity, setInitialQunatity] = useState(quantity);
    const [remainingQuantity, setRemainingQuantity] = useState(quantity);
    const [orderDate, setOrderDate] = useState({});

    const showAccessAlert = useAccessAlert();

    useEffect(() => {
        const dateToday = getTodayDate();
        setOrderDate(dateToday);
    }, []);


    const handleQuantityOnChange = (e) => {
        if (initialQuantity - e.target.value < 0) {
            errorToastAlert("You can not purchase more than the stoke available!");
            e.target.value = initialQuantity;

        }
        else {
            setRemainingQuantity(initialQuantity - e.target.value);
        }
    }

    const handlePurchase = (e) => {
        e.preventDefault();
        const orderQuantity = parseInt(e.target.orderQuantity.value);
        const buyerName = e.target.buyerName.value;
        const buyerEmail = e.target.buyerEmail.value;
        if (parseInt(orderQuantity) === 0) {
            errorToastAlert("You can not order 0 items!");
            return;
        }

        axios.post(`https://restaurant-management-server-tan-pi.vercel.app/purchase-food?email=${user.email}`, { _id, orderQuantity, buyerName, buyerEmail, orderDate },
            {
                headers: {
                    'Authorization': `Bearer ${user.accessToken}`
                }

            })
            .then((res) => {
                if (res.data.acknowledged) {
                    successAlert("Order Confirmed!", "Your food order has been placed successfully.")
                    e.target.reset();
                    setInitialQunatity(initialQuantity - orderQuantity);
                }
            })
            .catch((error) => {
                setRemainingQuantity(remainingQuantity + orderQuantity)
                showAccessAlert(error.response.data,  "You do not have permission to do this operation");
                e.target.reset();
            })
    }
    return (
        <section className='py-5 md:py-10 lg:py-20'>
            <h1 className='text-center text-2xl md:text-4xl font-bold'>Order food</h1>
            <div className='w-11/12 lg:w-6/12 mx-auto'>
                <form onSubmit={handlePurchase}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Food Name</legend>
                        <input name="foodName" type="text" className="input w-full" placeholder="Enter Food Name" defaultValue={foodName} required readOnly />
                    </fieldset>


                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-3'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg">Quantity</legend>
                            <input name="orderQuantity" type="Number" min='0' className="input w-full" placeholder="Enter Quantity" onChange={handleQuantityOnChange} required />
                            {
                                quantity === 0 ?
                                    <p className='text-sm text-error'>Item is not available</p>
                                    :
                                    <p>Remaining Quantity: {remainingQuantity}</p>
                            }
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg">Price</legend>
                            <input name="price" type='text' min='0' className="input w-full" placeholder="Enter Food Price (BDT)" defaultValue={`${price} BDT`} required readOnly />
                        </fieldset>
                    </div>

                    <h1 className='text-lg font-bold mt-5 border-b pb-2 text-center'>Your Information</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg">User Name</legend>
                            <input name="buyerName" type="text" className="input w-full" placeholder="User Name" defaultValue={user.displayName} title='You can not change this input field' required readOnly />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg">User Email</legend>
                            <input name="buyerEmail" type="text" className="input w-full" placeholder="User Email" defaultValue={user.email} title='You can not change this input field' required readOnly />
                        </fieldset>
                        <div>
                            <p><span className='font-semibold'>Buying date (DD-MM-YYYY):</span> {`${orderDate.day}-${orderDate.month}-${orderDate.year}`}</p>
                        </div>
                    </div>

                    <button type='submit' className={`btn text-white btn-primary btn-block mt-5 
                    ${(quantity === 0 || user.email === foodAuthorEmail) && "btn-disabled"}`}
                    >
                        Purchase Food
                    </button>
                    {
                        user.email === foodAuthorEmail && <p className='text-sm text-error'>You can not purchase your own items</p>
                    }
                </form>
            </div>
        </section>
    );
};

export default PurchaseFoodPage;