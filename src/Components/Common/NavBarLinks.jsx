import { NavLink } from 'react-router';

const NavBarLinks = ({ user }) => {

    const commonLinks = [
        { name: "Home", path: "/" },
        { name: "All foods", path: "/food-details" },
        { name: "Gallery", path: "/food-gallery" },
    ]

    const privateLinks = [
        { name: "My Added Foods", path: "/my-added-food" },
        { name: "My Orders", path: "/my-orders" },
    ]


    return (
        <>
            {
                commonLinks.map(
                    (linkInfo, index) =>
                        <li key={index} className='font-semibold text-base w-1/2 md:w-fit'><NavLink
                            to={linkInfo.path}
                            className={({ isActive }) =>
                                isActive ? "border-b-2 rounded-none" : ""
                            }>
                            {linkInfo.name}
                        </NavLink>
                        </li>
                )
            }
            {
                user &&
                privateLinks.map(
                    (linkInfo, index) =>
                        <li key={index} className='font-semibold text-base w-1/2 md:w-fit'><NavLink
                            to={linkInfo.path}
                            className={({ isActive }) =>
                                isActive ? "border-b-2 rounded-none" : ""
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