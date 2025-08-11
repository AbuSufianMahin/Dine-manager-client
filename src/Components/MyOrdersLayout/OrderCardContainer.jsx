import React from 'react';
import OrderCard from './OrderCard';

const OrderCardContainer = ({ allOrders, setAllOrders }) => {
    return (
        <div className='min-h-[35vh]'>
            <h1 className='text-center text-3xl md:text-4xl font-bold'>Active orders</h1>
            <div className='mt-5 md:mt-10 grid gap-4 grid-cols-1 lg:grid-cols-2'>
                {
                    allOrders.map(orderData => <OrderCard key={orderData.orderId} orderData={orderData} allOrders={allOrders} setAllOrders={setAllOrders}></OrderCard>)
                }
            </div>
        </div>
    );
};

export default OrderCardContainer;