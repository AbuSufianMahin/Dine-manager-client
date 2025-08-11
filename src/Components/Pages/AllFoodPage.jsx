import React, { useEffect, useState } from 'react';
import LoadingBars from '../Common/LoadingBars';
import AllFoodCard from '../AllFoodPageLayout/AllFoodCard';
import NoFoodAdded from '../AllFoodPageLayout/NoFoodAdded';
import SortByOptions from '../AllFoodPageLayout/SortByOptions';
import SearchBar from '../AllFoodPageLayout/SearchBar';


const AllFoodPage = () => {
    const [allFoodData, setAllFoodData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    useEffect(() => {
        fetch("https://restaurant-management-server-tan-pi.vercel.app/food-details").then(res => res.json()).then(data => {
            setAllFoodData(data);
            setDataLoading(false);
        });
    }, []);

    return (
        <section className='py-5 md:py-10 lg:py-20'>
            <div className='w-11/12 md:w-10/12 max-w-7xl mx-auto'>
                <h1 className='text-center text-2xl md:text-4xl font-bold'>Explore All Delicious Foods</h1>
                <div className='flex flex-col gap-5 md:flex-row md:items-center justify-center md:justify-between mt-5 md:mt-10'>
                    <SearchBar setAllFoodData={setAllFoodData}></SearchBar>
                    <SortByOptions setAllFoodData={setAllFoodData} setDataLoading={setDataLoading}></SortByOptions>
                </div>
                {
                    dataLoading ?
                        <div className='py-20 min-h-[30vh]'>
                            <LoadingBars></LoadingBars>
                        </div>
                        :

                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5'>
                            {
                                allFoodData.length === 0 ?
                                    <NoFoodAdded></NoFoodAdded>
                                    :
                                    allFoodData.map(foodDetails => <AllFoodCard key={foodDetails._id} foodDetails={foodDetails}></AllFoodCard>)
                            }
                        </div>
                }
            </div>
        </section>


    );
};

export default AllFoodPage;