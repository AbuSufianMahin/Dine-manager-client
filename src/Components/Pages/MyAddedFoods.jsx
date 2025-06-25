import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import LoadingBars from '../Common/LoadingBars';
import MyAddedFoodsCard from '../MyAddedFoodsLayout/MyAddedFoodsCard';
import NoFoodAdded from '../MyAddedFoodsLayout/NoFoodAdded';

import useAccessAlert from '../../Hooks/useAccessAlert';

const MyAddedFoods = () => {
    const { user } = use(AuthContext);
    const [myAddedFoods, setMyAddedFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    const showAccessAlert = useAccessAlert();


    useEffect(() => {
        fetch(`http://localhost:3000/my-added-food?email=${user.email}`,
            {
                headers: {
                    'Authorization': `Bearer ${user.accessToken}`
                }
            }
        ).then(res => res.json()).then(data => {
            if (data.errorCode) {
                showAccessAlert(data);
                return;
            }

            setLoading(false);
            setMyAddedFoods(data);
            setLoading(false);
        });
    }, [user.email, user.accessToken, showAccessAlert])

    return (
        <section className='py-5 md:py-10 lg:py-20 min-h-[50vh]'>
            {
                !myAddedFoods.errorCode &&
                <>
                    <h1 className='text-center text-2xl md:text-4xl font-bold'>Your Added Food</h1>
                    <div className='my-5 md:my-10 w-11/12 md:w-10/12 mx-auto'>
                        {
                            loading ?
                                <LoadingBars></LoadingBars>
                                :
                                <>
                                    {
                                        myAddedFoods.length === 0 ?
                                            <NoFoodAdded></NoFoodAdded>
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
                </>
            }
        </section>
    );
};

export default MyAddedFoods;