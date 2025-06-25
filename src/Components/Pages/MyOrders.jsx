import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import LoadingBars from '../Common/LoadingBars';
import NoOrders from '../MyOrdersLayout/NoOrders';
import OrderCardContainer from '../MyOrdersLayout/OrderCardContainer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const MyOrders = () => {
    const { user } = use(AuthContext);
    const [allOrders, setAllOrders] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/my-orders?email=${user.email}`, {
            headers: {
                'Authorization': `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.errorCode === 401) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Unauthorized',
                        text: data.message,
                        confirmButtonText: 'Login'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate(-1);
                        }
                    })
                }
                else if (data.errorCode === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: data.message,
                        text: "You do not have permission to access this resource",
                        confirmButtonText: 'Okay'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate(-1);
                        }
                    })
                }

                setAllOrders(data);
                setLoading(false);
            })
    }, [user.email, user.accessToken, navigate]);

    return (
        <section className='py-5 md:py-10 lg:py-20 min-h-[50vh]'>
            {
                !allOrders.errorCode &&

                <div className='w-11/12 md:w-10/12 lg:w-2/3 xl:w-1/2 mx-auto'>
                    {
                        isLoading ?
                            <div className='mt-5 min-h-[30vh]'>
                                <LoadingBars></LoadingBars>
                            </div>
                            :
                            <>
                                {
                                    allOrders.length === 0 ?
                                        <NoOrders></NoOrders>
                                        :
                                        <OrderCardContainer allOrders={allOrders} setAllOrders={setAllOrders}></OrderCardContainer>
                                }
                            </>
                    }
                </div>


            }
        </section>
    );
};

export default MyOrders;