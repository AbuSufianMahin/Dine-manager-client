import React, { use, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import axios from 'axios';
import { successAlert } from '../../Utility/sweetAlert';

const AddFoodPage = () => {
    const { user } = use(AuthContext);
    const [category, setCategory] = useState(false);

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const foodDetails = Object.fromEntries(formData.entries());
        foodDetails.price = parseFloat(foodDetails.price);
        foodDetails.quantity = parseInt(foodDetails.quantity);

        axios.post('http://localhost:3000/add-food', foodDetails)
            .then(res => {
                if (res.data.acknowledged) {
                    successAlert('Food Added!', 'Your food item has been successfully added to the menu.')
                        .then(() => {
                            form.reset();
                            setCategory(false);
                        })
                }
            })

    }
    return (
        <section className='mt-10 mb-20'>
            <div className='w-11/12 lg:w-7/12 mx-auto'>
                <div className='my-5'>
                    <Link to='/' className='flex items-center gap-2'>
                        <IoArrowBack />
                        <p className='underline font-semibold'>Go back to home</p>
                    </Link>
                </div>
                <div className='p-5 md:p-10 lg:p-15 bg-base-300 rounded-2xl border border-primary'>
                    <h1 className='text-center text-2xl md:text-4xl font-bold'>Fillup information to add food</h1>
                    <div className='mt-5'>
                        <form onSubmit={handleAddFood}>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Food Name</legend>
                                <input name="foodName" type="text" className="input w-full" placeholder="Enter Food Name" required />
                            </fieldset>
                            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-3'>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend text-lg">Food Image</legend>
                                    <input name="foodImageURL" type="text" className="input w-full" placeholder="Enter Food Image URL" required />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend text-lg">Food Origin</legend>
                                    <input name="foodOrigin" type="text" className="input w-full" placeholder="Enter Food Origin" required />
                                </fieldset>
                            </div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Food Description</legend>
                                <textarea name="foodDescription" type="text" className="textarea w-full" placeholder="Enter Food Description" required />
                            </fieldset>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-3'>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend text-lg">Category</legend>
                                    <label className="select w-full">
                                        <select name="foodCategory" defaultValue="" className={category ? "" : "text-gray-500"} onChange={() => setCategory(true)} required>
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
                                    <input name="quantity" type="Number" min='0' className="input w-full" placeholder="Enter Quantity" required />
                                </fieldset>
                                <fieldset className="fieldset md:col-span-2 lg:col-span-1">
                                    <legend className="fieldset-legend text-lg">Price</legend>
                                    <input name="price" type="Number" min='0' className="input w-full" placeholder="Enter Food Price (BDT)" required />
                                </fieldset>
                            </div>

                            <h1 className='text-lg font-bold mt-5 border-b pb-2 text-center'>Added By</h1>
                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend text-lg">User Name</legend>
                                    <input name="foodAuthorName" type="text" className="input w-full" placeholder="User Name" defaultValue={user.displayName} title='You can not change this input field' required readOnly />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend text-lg">User Email</legend>
                                    <input name="foodAuthorEmail" type="text" className="input w-full" placeholder="User Email" defaultValue={user.email} title='You can not change this input field' required readOnly />
                                </fieldset>
                            </div>

                            <button type='submit' className='btn text-white btn-primary btn-block mt-5'>Add Food</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddFoodPage;