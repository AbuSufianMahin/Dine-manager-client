import React, { use } from 'react';
import { MdEdit } from 'react-icons/md';
import { AuthContext } from '../../Provider/AuthContext';

import Swal from 'sweetalert2';
import axios from 'axios';
import { successAlert } from '../../Utility/sweetAlert';
import useAccessAlert from '../../Hooks/useAccessAlert';

const EditFoodButton = ({ foodDetails, setFoodDetails }) => {
    const { user } = use(AuthContext);
    const { _id, foodImageURL, foodName, foodCategory, foodDescription, price, foodOrigin, quantity } = foodDetails;

    const showAccessAlert = useAccessAlert();

    const handleEditFood = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newFoodData = Object.fromEntries(formData.entries());
        newFoodData.price = parseInt(newFoodData.price);
        newFoodData.quantity = parseInt(newFoodData.quantity);

        const { _id, totalSold, ...foodData } = foodDetails;

        let isSame = true;
        for (const key in foodData) {
            if (foodData[key] !== newFoodData[key]) {
                isSame = false;
            }
        }

        if (isSame) {
            document.getElementById(`my_modal_${_id}`).close();
            Swal.fire({
                title: "Oops..",
                text: "Looks like you didn't edit anything!",
                icon: "error",
                confirmButtonText: "Retry",
                showDenyButton: true,
                denyButtonText: `Cancel`
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        document.getElementById(`my_modal_${_id}`).showModal();
                    }
                    else {
                        document.getElementById(`my_modal_${_id}`).close();
                    }
                })
        }
        else {
            newFoodData._id = _id;
            newFoodData.totalSold = totalSold;
            axios.put(`http://localhost:3000/edit-my-food?email=${user.email}`, newFoodData, {
                headers: {
                    'Authorization': `Bearer ${user.accessToken}`
                }
            })
                .then(res => {
                    const data = res.data;

                    console.log("NOT IN CATCH")
                    console.log(data);
                    if (res.data.modifiedCount) {
                        document.getElementById(`my_modal_${_id}`).close();
                        successAlert("Success!", "Your food data has been updated successfully.");
                        setFoodDetails(newFoodData);
                    }
                })
                .catch(error => {
                    document.getElementById(`my_modal_${_id}`).close();
                    showAccessAlert(error.response.data);
                    e.target.reset();
                });
        }
    }

    return (
        <>
            <button className='btn btn-sm bg-gray-700 text-white' onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}><MdEdit size={20} /></button>

            <dialog id={`my_modal_${_id}`} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-2xl mb-5 text-center">Edit task Details</h3>
                    <form onSubmit={handleEditFood}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg">Food Name</legend>
                            <input defaultValue={foodName} name="foodName" type="text" className="input w-full" placeholder="Enter Food Name" />
                        </fieldset>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-3'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Food Image</legend>
                                <input defaultValue={foodImageURL} name="foodImageURL" type="text" className="input w-full" placeholder="Enter Food Image URL" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Food Origin</legend>
                                <input defaultValue={foodOrigin} name="foodOrigin" type="text" className="input w-full" placeholder="Enter Food Origin" />
                            </fieldset>
                        </div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg">Food Description</legend>
                            <textarea defaultValue={foodDescription} name="foodDescription" type="text" className="textarea w-full" placeholder="Enter Food Description" />
                        </fieldset>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-3'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Category</legend>
                                <label className="select w-full">
                                    <select name="foodCategory" defaultValue={foodCategory}>
                                        <option value="" className='bg-[#C8C8C8] text-white' disabled>Select a category</option>

                                        <option value="Main Dishes" className='text-neutral'>Main Dishes</option>
                                        <option value="Appetizers" className='text-neutral'>Appetizers</option>
                                        <option value="Desserts" className='text-neutral'>Desserts</option>
                                        <option value="Snacks" className='text-neutral'>Snacks</option>
                                        <option value="Salads" className='text-neutral'>Salads</option>
                                        <option value="Seafood" className='text-neutral'>Seafood</option>
                                        <option value="Soups" className='text-neutral'>Soups</option>
                                        <option value="Sides" className='text-neutral'>Sides</option>

                                    </select>
                                </label>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Quantity</legend>
                                <input defaultValue={quantity} name="quantity" type="Number" min='0' className="input w-full" placeholder="Enter Quantity" />
                            </fieldset>
                            <fieldset className="fieldset md:col-span-2 lg:col-span-1">
                                <legend className="fieldset-legend text-lg">Price</legend>
                                <input defaultValue={price} name="price" type="Number" min='0' className="input w-full" placeholder="Enter Food Price (BDT)" />
                            </fieldset>
                        </div>

                        <h1 className='text-lg font-bold mt-5 border-b pb-2 text-center'>Added By</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">User Name</legend>
                                <input name="foodAuthorName" type="text" className="input w-full" placeholder="User Name" defaultValue={user.displayName} title='You can not change this input field' readOnly />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">User Email</legend>
                                <input name="foodAuthorEmail" type="text" className="input w-full" placeholder="User Email" defaultValue={user.email} title='You can not change this input field' readOnly />
                            </fieldset>
                        </div>

                        <div className='flex justify-end gap-2 mt-5'>
                            <button type='submit' className='btn btn-success text-white'>Submit</button>
                            <button type='button' className='btn text-white btn-primary' onClick={() => document.getElementById(`my_modal_${_id}`).close()}>Close</button>
                        </div>
                    </form>

                </div>
            </dialog>
        </>
    );
};

export default EditFoodButton;