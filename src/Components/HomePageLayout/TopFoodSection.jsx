import React, { useEffect, useState } from 'react';

const TopFoodSection = () => {
    const [topFoods, setTopFoods] = useState([]);
    
    useEffect(()=>{
        fetch()
    })

    return (
        <section className='py-10 lg:py-20'>
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <div className='text-center space-y-2'>
                    <h1 className='text-center text-3xl md:text-4xl font-bold'>Customer Favorites</h1>
                    <p className='md:text-lg'>Tried, tested, and loved. These are the meals our customers can't get enough of — now it's your turn to dig in!</p>
                </div>


            </div>
        </section>
    );
};

export default TopFoodSection;