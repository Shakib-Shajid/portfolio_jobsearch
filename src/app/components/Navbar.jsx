import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className=" navbar-start">
                    <a className="btn btn-ghost text-xl">Portfolio & Job Search</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                   <Link href="/">Home</Link>
                </div>
                <div className="flex gap-2 navbar-end">
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
                            <li><Link href="/profile">Profile</Link></li>
                            <li><Link href="/">Settings</Link></li>
                            <li><Link href="/">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;