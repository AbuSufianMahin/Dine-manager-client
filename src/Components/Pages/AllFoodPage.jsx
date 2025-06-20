import React, { useEffect, useState } from 'react';
import LoadingBars from '../Common/LoadingBars';
import AllFoodCard from '../AllFoodPageLayout/AllFoodCard';
import NoFoodAdded from '../AllFoodPageLayout/NoFoodAdded';
import SortByOptions from '../AllFoodPageLayout/SortByOptions';


const AllFoodPage = () => {
    const [allFoodData, setAllFoodData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:3000/food-details").then(res => res.json()).then(data => {
            setAllFoodData(data);
            setDataLoading(false);
        });
    }, []);
    
    return (
        <section className='py-5 md:py-10 lg:py-20'>
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <h1 className='text-center text-2xl md:text-4xl font-bold'>Explore All Delicious Foods</h1>
                {
                    dataLoading ?
                        <div className='py-20'>
                            <LoadingBars></LoadingBars>
                        </div>
                        :
                        <div className='mt-5 md:mt-10'>
                            <div className='flex justify-center md:justify-end'>
                                <SortByOptions  allFoodData={allFoodData} setAllFoodData={setAllFoodData} dataLoading={dataLoading} setDataLoading={setDataLoading}></SortByOptions>
                            </div>
                            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5'>
                                {
                                    allFoodData.length === 0 ?
                                        <NoFoodAdded></NoFoodAdded>
                                        :
                                        allFoodData.map(foodDetails => <AllFoodCard key={foodDetails._id} foodDetails={foodDetails}></AllFoodCard>)
                                }
                            </div>
                        </div>
                }
            </div>
        </section>


    );
};

export default AllFoodPage;