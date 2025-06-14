import React from 'react';
import { NavLink } from 'react-router';

const NavBarLinks = () => {


    const allLinkInfo = [
        { name: "Home", path: "/" },
        { name: "All foods", path: "/all-food" },
        { name: "Gallery", path: "/food-gallery" },
    ]


    return (
        <>
            {
                allLinkInfo.map(
                    (linkInfo, index) =>
                        <li key={index} className='mr-5 font-semibold'><NavLink
                            to={linkInfo.path}
                            className={({ isActive }) =>
                                isActive ? "text-base-100 border-b-2 border-base-100 rounded-none" : ""
                            }>
                            {linkInfo.name}
                        </NavLink>
                        </li>
                )
            }
        </>
    );
};

export default NavBarLinks;