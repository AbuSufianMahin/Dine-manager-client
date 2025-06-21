import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import LoadingBars from '../Common/LoadingBars';
import MyAddedFoodsCard from '../MyAddedFoodsLayout/MyAddedFoodsCard';

const MyAddedFoods = () => {
    const { user } = use(AuthContext);
    const [myAddedFoods, setMyAddedFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/my-added-food?email=${user.email}`).then(res => res.json()).then(data => {
            setMyAddedFoods(data)
            setLoading(false);
        });
    }, [user.email])

    return (
        <section className='py-5 md:py-10 lg:py-20'>
            <h1 className='text-center text-2xl md:text-4xl font-bold'>Your Added Food</h1>
            <div className='mt-10 w-11/12 md:w-10/12 mx-auto'>
                {
                    loading ?
                        <LoadingBars></LoadingBars>
                        :
                        <>
                            {
                                myAddedFoods.length === 0 ?
                                    <>
                                    No food Added by you
                                    </>
                                    :
                                    <div className='min-h-[30vh] grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                        {
                                           myAddedFoods.map(foodData => <MyAddedFoodsCard key={foodData._id} foodData={foodData} myAddedFoods={myAddedFoods} setMyAddedFoods={setMyAddedFoods}></MyAddedFoodsCard>) 
                                        }
                                    </div>
                            }
                        </>
                }
            </div>
        </section>
    );
};

export default MyAddedFoods;