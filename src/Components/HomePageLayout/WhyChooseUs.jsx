import React from 'react';

import { FiCheckCircle } from 'react-icons/fi';

const WhyChooseUs = () => {
    const reasons = [
        "Fresh Ingredients Daily",
        "Fast & Reliable Delivery",
        "Authentic International Recipes",
        "100% Customer Satisfaction"
    ];
    return (
        <section className="py-5 md:py-10 lg:py-20 bg-base-300">
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <div className='text-center'>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
                    <p className=" mb-10 max-w-2xl mx-auto ">
                        We're committed to delivering delicious meals and top-notch service — here's why our customers love us!
                    </p>
                </div>
                <div className="grid gap-2 md:gap-3 lg:gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="flex items-center justify-start space-x-3 bg-base-100 p-5 rounded-md shadow-xl">
                            <FiCheckCircle className="text-green-500 text-2xl" />
                            <p className="md:text-lg">{reason}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;