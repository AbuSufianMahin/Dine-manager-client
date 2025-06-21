import axios from 'axios';
import React from 'react';
import { CgMoreO } from 'react-icons/cg';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyAddedFoodsCard = ({ foodData, myAddedFoods, setMyAddedFoods }) => {

    const { _id, foodImageURL, foodName, foodCategory, foodDescription, price, foodOrigin, quantity } = foodData;

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
        <div className='border border-primary p-5 rounded-xl flex flex-col md:flex-row justify-between items-center gap-5'>
            <div className='flex flex-col md:flex-row gap-5'>
                <img src={foodImageURL} alt={`${foodName} image`} className='rounded-xl w-full md:w-1/2 lg:w-full' />
                <div>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-xl font-bold'>{foodName}</h1>
                        <p className='text-center rounded-xl bg-sky-400 w-fit px-2'>{foodCategory}</p>
                    </div>

                    <p className='line-clamp-3 my-3'>{foodDescription}</p>

                    <p><span className='font-semibold'>Price: </span>{price} BDT</p>
                    <p><span className='font-semibold'>Origin: </span>{foodOrigin}</p>
                    <p><span className='font-semibold'>Quantity: </span>{quantity}</p>


                </div>
            </div>

            <div className='flex md:flex-col justify-between gap-3'>
                <Link to={`/food-details/${_id}`}><button className='btn btn-sm btn-info text-white'><CgMoreO size={20} /></button></Link>
                <button className='btn btn-sm bg-gray-700 text-white'><MdEdit size={20} /></button>
                <button className='btn btn-sm btn-error text-white' onClick={() => handleDelete(_id)}><MdDelete size={20} /></button>
            </div>
        </div>
    );
};

export default MyAddedFoodsCard;