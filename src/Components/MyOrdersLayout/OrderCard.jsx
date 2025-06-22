import React from 'react';
import { Link } from 'react-router';

const OrderCard = ({ orderData, allOrders, setAllOrders }) => {
    console.log(orderData);
    const {_id, orderId, foodAuthorName, foodImageURL, foodName, orderDate, orderQuantity, price } = orderData;

    const handleCancelOrder = (orderId) => {
        console.log(orderId);
    }

    return (
        <div className='border border-secondary p-5 rounded-lg flex flex-col md:flex-row items-center gap-5 shadow-md'>
            <div className='md:flex-2 lg:flex-1'>
                <img src={foodImageURL} alt={foodName} className='mx-auto rounded-xl' />
            </div>
            <div className='flex-3'>
                <div className='flex justify-between'>
                    <Link to={`/food-details/${_id}`}><h2><span className='text-2xl md:text-3xl font-bold transition duration-200 hover:text-primary'>{foodName}</span> x {orderQuantity}</h2></Link>
                    <p className='md:text-lg font-semibold'>BDT {price * orderQuantity}</p>
                </div>
                <div className='mt-2 md:text-lg'>
                    <p><span className='font-semibold'>Order ID: </span>{orderId}</p>
                    <p><span className='font-semibold'>Food owner: </span>  {foodAuthorName} </p>
                    <p><span className='font-semibold'>Order Date: </span>{orderDate.day}-{orderDate.month}-{orderDate.year}</p>
                </div>
                <div className='flex gap-2 mt-2'>
                    <Link to={`/food-details/${_id}`}><button className='btn btn-primary text-white'>Food Details</button></Link>
                    <button className='btn btn-primary text-white' onClick={() => handleCancelOrder(orderId)}>Cancel Order</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;