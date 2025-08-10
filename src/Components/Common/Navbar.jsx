import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import ThemeToggler from './ThemeToggler';
import NavBarLinks from './NavBarLinks';
import { AuthContext } from '../../Provider/AuthContext';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const dropDownLinks = [
        { path: '/my-added-food', name: 'My Added Foods' },
        { path: '/my-orders', name: 'My Orders' },
        { path: '/add-food', name: 'Add Food' },
    ]

    return (
        <section className='bg-accent'>

            <nav className="w-11/12 md:w-10/12 max-w-7xl mx-auto navbar px-0 py-2 md:py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost px-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm gap-1 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 border-2">
                            <NavBarLinks></NavBarLinks>

                            <div className="divider my-2 md:hidden"></div>

                            <div className='md:hidden'>
                                <p>Theme Controller: </p>
                                <div className='mt-2'>
                                    <ThemeToggler></ThemeToggler>
                                </div>
                            </div>
                        </ul>


                    </div>
                    <Link className="md:text-xl font-bold" to='/'>Dine Manager</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg lg:gap-1 xl:gap-2">
                        <NavBarLinks user={user}></NavBarLinks>
                    </ul>
                </div>
                <div className="navbar-end items-center gap-2 md:gap-4">
                    <div className='hidden md:flex'>
                        <ThemeToggler></ThemeToggler>
                    </div>

                    {
                        user ?
                            <div className="dropdown dropdown-end">

                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            referrerPolicy='no-referrer'
                                            alt="Tailwind CSS Navbar component"
                                            src={user.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 md:w-56 p-2 gap-1 shadow">
                                    {
                                        dropDownLinks.map((linkInfo, index) =>
                                            <li key={index}>
                                                <NavLink to={linkInfo.path} className={({ isActive }) => isActive ? "border-b-2 rounded-none" : ""}>
                                                    {linkInfo.name}
                                                </NavLink>
                                            </li>
                                        )
                                    }
                                    <li className='mt-3 border-t'><button onClick={signOutUser}>Logout</button></li>
                                </ul>
                            </div>
                            :
                            <div className='flex gap-1 md:gap-2'>
                                <Link className='btn btn-sm' to='/authentication/login'>Login</Link>
                                <Link className='btn btn-sm' to='/authentication/register'>Register</Link>
                            </div>

                    }
                </div>

            </nav>
        </section >
    );
};

export default Navbar;