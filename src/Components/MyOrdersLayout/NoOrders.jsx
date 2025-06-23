import Lottie from 'lottie-react';
import React from 'react';
import emptyCartAnimation from "../../assets/LottieAnimations/emptyCartAnimation.json"
import { Link } from 'react-router';
const NoOrders = () => {
    return (
        <div className='md:my-10'>
            <div className='w-fit mx-auto'>
                <Lottie animationData={emptyCartAnimation}
                    style={{ height: '30vh' }}
                    loop={false}
                >
                </Lottie>
            </div>
            <div className='text-center space-y-5'>
                <p className='mt-5 text-2xl font-semibold'>You haven't made any orders yet.</p>
                <Link to="/food-details"><button className='btn btn-primary text-white'>Buy Food</button></Link>
            </div>
        </div>
    );
};

export default NoOrders;