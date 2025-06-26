import React, { useRef, useState } from 'react';
import InfiniteSpinner from '../Common/InfiniteSpinner';

const SearchBar = ({ setAllFoodData }) => {
    const [isSearching, setIsSearching] = useState(false);

    const timerRef = useRef(null);

    const handleOnChange = (e) => {
        const foodName = e.target.value;
        setIsSearching(true);

        clearTimeout(timerRef.current);
        
        timerRef.current = setTimeout(() => {
            fetch(`https://restaurant-management-server-tan-pi.vercel.app/search-food?foodName=${foodName}`)
                .then(res => res.json())
                .then(data => {
                    setAllFoodData(data);
                    setIsSearching(false);
                });

        }, 300);
    }

    return (
        <div className='w-full md:w-1/2 lg:w-1/3 flex gap-2 items-center'>
            <p>Search:</p>
            <label className="input w-full">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="text" placeholder="Search by food name" onChange={(e) => handleOnChange(e)} />

                {
                    isSearching && <InfiniteSpinner></InfiniteSpinner>
                }
            </label>
        </div>
    );
};

export default SearchBar;