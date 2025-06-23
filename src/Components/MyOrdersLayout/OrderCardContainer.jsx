import React from 'react';
import OrderCard from './OrderCard';

const OrderCardContainer = ({ allOrders, setAllOrders }) => {
    return (
        <div className='my-5 space-y-5 min-h-[35vh]'>
            <h1 className='text-center text-3xl md:text-4xl font-bold'>Active orders</h1>
            {
                allOrders.map(orderData => <OrderCard key={orderData.orderId} orderData={orderData} allOrders={allOrders} setAllOrders={setAllOrders}></OrderCard>)
            }
        </div>
    );
};

export default OrderCardContainer;