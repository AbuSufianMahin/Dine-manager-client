import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <section className='bg-accent'>
            <nav className="navbar w-11/12 md:w-11/12 mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
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
                            <li><Link>My Food</Link></li>
                            <li><Link>My Orders</Link></li>
                            <li><Link to='/add-food'>Add Food</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;