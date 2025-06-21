import Lottie from 'lottie-react';
import React from 'react';

import errorAnimation from '../../assets/LottieAnimations/errorAnimation.json';
import { Link } from 'react-router';

const Error404Page = () => {
    return (
        <section class="bg-base-100">
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                <div>
                    <Lottie animationData={errorAnimation}
                        style={{
                            height: "50vh"
                        }}
                        loop='false'
                    ></Lottie>

                </div>

                <div className=''>
                    <h1 className="text-2xl md:text-4xl font-extrabold mt-4">404 - Page Not Found</h1>
                    <p className=" mt-2 text-sm md:text-lg">
                        The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                <Link
                    to="/"
                    className="mt-6 px-6 py-3 btn bg-[#e11d48] rounded-4xl  transition duration-300 hover:bg-[#e11d47b0] hover:shadow-md"
                >
                    Go back to home
                </Link>
            </div>
        </section>

    );
};

export default Error404Page;