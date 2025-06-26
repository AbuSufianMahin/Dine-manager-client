import React from 'react';

const SortByOptions = ({setAllFoodData, setDataLoading}) => {

    const handleSortByOnChange = (option) => {
        setDataLoading(true);
        fetch(`https://restaurant-management-server-tan-pi.vercel.app/sorted-food-data?sortBy=${option}`).then(res => res.json()).then(data => {
            setAllFoodData(data);
            setDataLoading(false);
        });
        
    }

    return (
        <div className='flex items-center gap-2'>
            <p>sort by: </p>
            <select defaultValue="Default" className="select w-44" onChange={(e) => handleSortByOnChange(e.target.value)}>
                <option>Default</option>
                <option>Food Category</option>
                <option>Food Origin</option>
                <option value="PriceAsc">Price (Low {'>'} High)</option>
                <option value="PriceDsc">Price (High {'>'} Low)</option>
            </select>
        </div>
    );
};

export default SortByOptions;