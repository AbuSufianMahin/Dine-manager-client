import React from 'react';
import { Link } from 'react-router';
import ThemeToggler from './ThemeToggler';
import NavBarLinks from './NavBarLinks';

const Navbar = () => {
    return (
        <section className='bg-accent'>
            <nav className="navbar justify-between w-11/12 md:w-10/12 mx-auto px-0">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavBarLinks></NavBarLinks>
                    </ul>
                </div>
                <div className='flex-1'>
                    <Link className="text-xl font-bold" to='/'>Dine Manager</Link>
                </div>

                <div className="flex items-center justify-end lg:justify-between flex-1">
                    <div className='hidden lg:flex'>
                        <ul className='menu menu-horizontal text-lg'>
                            <NavBarLinks></NavBarLinks>
                        </ul>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div>
                            <ThemeToggler></ThemeToggler>
                        </div>

                        <div className="dropdown dropdown-end">

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><Link to='/my-added-food'>My Foods</Link></li>
                                <li><Link to='/my-orders'>My Orders</Link></li>
                                <li><Link to='/add-food'>Add Food</Link></li>
                                <li><Link>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section >
    );
};

export default Navbar;