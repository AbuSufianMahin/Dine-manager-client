import React from 'react';
import { MdOutlineAssignmentLate } from 'react-icons/md';

const NoFoodAdded = () => {
    return (
        <div className="col-span-4 flex flex-col items-center justify-center py-20 px-4 text-center text-gray-500">
            <MdOutlineAssignmentLate className="text-6xl text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Foods Found</h2>
            <p className="text-gray-500 max-w-md">
                Looks like there's nothing on the menu right now.
            </p>
        </div>
    );
};

export default NoFoodAdded;