import React, { useEffect, useState } from 'react';
import TopFoodCardContainer from './TopFoodCard';
import TopFoodCard from './TopFoodCard';

const TopFoodSection = () => {
    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/top-food-details')
            .then(res => res.json())
            .then(data => setTopFoods(data))
    },[])

    return (
        <section className='py-10 lg:py-20'>
            <div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto'>
                <div className='text-center space-y-2'>
                    <h1 className='text-center text-3xl md:text-4xl font-bold'>Customer Favorites</h1>
                    <p className='md:text-lg'>Tried, tested, and loved. These are the meals our customers can't get enough of — now it's your turn to dig in!</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                    {
                        topFoods.map(foodData => <TopFoodCard key={foodData._id} foodData={foodData}></TopFoodCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default TopFoodSection;