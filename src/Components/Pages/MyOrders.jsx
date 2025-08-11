import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import LoadingBars from '../Common/LoadingBars';
import NoOrders from '../MyOrdersLayout/NoOrders';
import OrderCardContainer from '../MyOrdersLayout/OrderCardContainer';
import useAccessAlert from '../../Hooks/useAccessAlert';

const MyOrders = () => {
    const { user } = use(AuthContext);
    const [allOrders, setAllOrders] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const showAccessAlert = useAccessAlert();

    useEffect(() => {
        
        fetch(`https://restaurant-management-server-tan-pi.vercel.app/my-orders?email=${user.email}`, {
            headers: {
                'Authorization': `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.errorCode){
                    showAccessAlert(data);
                    return;
                }
                setAllOrders(data);
                setLoading(false);
            })
    }, [user.email, user.accessToken]);

    return (
        <section className='py-5 md:py-10 lg:py-20 min-h-[50vh]'>
            {
                !allOrders.errorCode &&

                <div className='w-11/12 md:w-10/12 max-w-7xl mx-auto'>
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