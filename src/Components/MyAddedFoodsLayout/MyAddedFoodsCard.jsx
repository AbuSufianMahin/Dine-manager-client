import axios from 'axios';
import React, { useState } from 'react';
import { CgMoreO } from 'react-icons/cg';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import EditFoodButton from './EditFoodButton';

const MyAddedFoodsCard = ({ foodData, myAddedFoods, setMyAddedFoods }) => {
    const [foodDetails, setFoodDetails] = useState(foodData);
    const { _id, foodImageURL, foodName, foodCategory, foodDescription, price, foodOrigin, quantity } = foodDetails;

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
                axios.delete(`http://localhost:3000/food/${foodId}`)
                    .then(res => {
                        console.log(res.data);
                        setMyAddedFoods(myAddedFoods.filter(food => food._id !== foodId));
                    });

                Swal.fire({
                    title: "Deleted!",
                    text: "Food Item has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className='border border-primary p-5 rounded-xl flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between items-center gap-5'>
            <div className='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center gap-5'>
                <div className='flex-1'>
                    <img src={foodImageURL} alt={`${foodName} image`} className='rounded-xl w-full'/>
                </div>
                <div className='flex-1'>
                    <div className='flex items-center gap-3'>
                        <Link><h1 className='text-2xl font-bold transition duration-200 hover:text-primary'>{foodName}</h1></Link>
                        <p className='text-center rounded-xl bg-sky-400 w-fit px-2'>{foodCategory}</p>
                    </div>

                    <p className='line-clamp-3 my-3'>{foodDescription}</p>

                    <p><span className='font-semibold'>Price: </span>{price} BDT</p>
                    <p><span className='font-semibold'>Origin: </span>{foodOrigin}</p>
                    <p><span className='font-semibold'>Quantity: </span>{quantity}</p>


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