import axios from 'axios';
import React, { use } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthContext';
import useAccessAlert from '../../Hooks/useAccessAlert';

const OrderCard = ({ orderData, allOrders, setAllOrders }) => {
    const { user } = use(AuthContext);
    const { _id, orderId, foodAuthorName, foodImageURL, foodName, orderDate, orderQuantity, price } = orderData;

    const showAccessAlert = useAccessAlert();
    const handleCancelOrder = (orderId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm Cancellation",
            cancelButtonText: "Dismiss"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://restaurant-management-server-tan-pi.vercel.app/cancel-order/${orderId}?email=${user.email}`, {
                    headers: {
                        'Authorization': `Bearer ${user.accessToken}`
                    }
                })
                    .then(res => {
                        if (res.data.deletedCount) {
                            setAllOrders(allOrders.filter(order => order.orderId !== orderId));
                            Swal.fire({
                                title: "Deleted!",
                                text: "Food Item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        showAccessAlert(error.response.data, "You do not have permission to modify this content.");
                    })
                    ;
            }
        });
    }

    return (
        <div className='border border-secondary p-5 w-fit md:w-auto mx-auto rounded-lg flex flex-col md:flex-row items-center gap-5 shadow-md'>
            <div className='md:flex-2 lg:flex-1'>
                <img src={foodImageURL} alt={foodName} className='mx-auto rounded-xl w-full' />
            </div>
            <div className='flex-3 lg:flex-2'>
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