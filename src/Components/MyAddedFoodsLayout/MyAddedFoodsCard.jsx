import axios from 'axios';
import React, { use, useState } from 'react';
import { CgMoreO } from 'react-icons/cg';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import EditFoodButton from './EditFoodButton';
import { AuthContext } from '../../Provider/AuthContext';
import useAccessAlert from '../../Hooks/useAccessAlert';

const MyAddedFoodsCard = ({ foodData, myAddedFoods, setMyAddedFoods }) => {
    const { user } = use(AuthContext);
    const [foodDetails, setFoodDetails] = useState(foodData);
    const { _id, foodImageURL, foodName, foodCategory, foodDescription, price, quantity, totalSold } = foodDetails;
    const showAccessAlert = useAccessAlert();

    const handleDelete = (foodId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/food/${foodId}?email=${user.email}`, {
                    headers: {
                        'Authorization': `Bearer ${user.accessToken}`
                    }
                })
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Food Item has been deleted.",
                                icon: "success"
                            });
                            setMyAddedFoods(myAddedFoods.filter(food => food._id !== foodId));
                        }
                    })
                    .catch(error => {
                        showAccessAlert(error.response.data, "You do not have permission to modify this content.");
                    });

            }
        });
    }

    return (
        <div className='border border-primary p-5 rounded-xl flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between items-center gap-5'>
            <div className='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center gap-3 lg:gap-5'>
                <div className='flex-2'>
                    <img src={foodImageURL} alt={`${foodName} image`} className='rounded-lg w-full' />
                </div>
                <div className='flex-3'>
                    <div className='flex items-center gap-3'>
                        <Link to={`/food-details/${_id}`}><h1 className='text-2xl font-bold transition duration-200 hover:text-primary'>{foodName}</h1></Link>
                        <p className='text-center rounded-xl bg-sky-400 w-fit px-2'>{foodCategory}</p>
                    </div>

                    <p className='line-clamp-2 lg:my-3'>{foodDescription}</p>

                    <p><span className='font-semibold'>Price: </span>{price} BDT</p>

                    <p><span className='font-semibold'>Total Sold : </span>{totalSold}</p>
                    <p><span className='font-semibold'>Remaining : </span>{quantity}</p>


                </div>
            </div>

            <div className='flex md:flex-col lg:flex-row xl:flex-col justify-between gap-3'>
                <Link to={`/food-details/${_id}`}><button className='btn btn-sm btn-info text-white'><CgMoreO size={20} /></button></Link>
                <EditFoodButton foodDetails={foodDetails} setFoodDetails={setFoodDetails}></EditFoodButton>
                <button className='btn btn-sm btn-error text-white' onClick={() => handleDelete(_id)}><MdDelete size={20} /></button>
            </div>
        </div>
    );
};

export default MyAddedFoodsCard;