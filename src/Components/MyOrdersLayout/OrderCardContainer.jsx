import React from 'react';
import OrderCard from './OrderCard';

const OrderCardContainer = ({ allOrders, setAllOrders }) => {
    // console.log(allOrders)
    return (
        <div className='my-5 space-y-5 min-h-[35vh]'>
            {
                allOrders.map(orderData => <OrderCard key={orderData.orderId} orderData={orderData} allOrders={allOrders} setAllOrders={setAllOrders}></OrderCard>)
            }
        </div>
    );
};

export default OrderCardContainer;