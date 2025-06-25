import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import LoadingBars from '../Common/LoadingBars';
import MyAddedFoodsCard from '../MyAddedFoodsLayout/MyAddedFoodsCard';
import NoFoodAdded from '../MyAddedFoodsLayout/NoFoodAdded';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const MyAddedFoods = () => {
    const { user } = use(AuthContext);
    const [myAddedFoods, setMyAddedFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/my-added-food?email=${user.email}`,
            {
                headers: {
                    'Authorization': `Bearer ${user.accessToken}`
                }
            }
        ).then(res => res.json()).then(data => {
            if (data.errorCode === 401) {
                Swal.fire({
                    icon: 'error',
                    title: 'Unauthorized',
                    text: data.message,
                    confirmButtonText: 'Login'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(-1);
                    }
                })
            }
            else if (data.errorCode === 403) {
                Swal.fire({
                    icon: 'error',
                    title: data.message,
                    text: "You do not have permission to access this resource",
                    confirmButtonText: 'Okay'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(-1);
                    }
                })
            }
            setMyAddedFoods(data);
            setLoading(false);
        });
    }, [user.email, user.accessToken, navigate])

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