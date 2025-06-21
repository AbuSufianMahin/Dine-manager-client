import React from 'react';
import Lottie from 'lottie-react';
import noDataAnimation from '../../assets/LottieAnimations/noDataAnimation.json';
import { Link } from 'react-router';

const NoFoodAdded = () => {
    return (
        <div>
            <div className='w-fit mx-auto'>
                <Lottie animationData={noDataAnimation}
                    style={{
                        height: '40vh'
                    }}>
                </Lottie>
            </div>

            <div className='text-center '>
                <p className='text-xl mb-5'>Oops! It seems you haven't added any food yet.</p>
                <Link to='/add-food'><button className='btn btn-sm lg:btn-md btn-primary text-white mr-2'>Add Food</button></Link>
                <Link to='/'><button className='btn btn-sm lg:btn-md btn-primary text-white'>Go back to Home</button></Link>
            </div>
        </div>
    );
};

export default NoFoodAdded;