"use client";

import Link from 'next/link';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { signOut, useSession } from "next-auth/react";


const Navbar = () => {

    const session = useSession()
    const [search, setSearch] = useState("");
    const router = useRouter();
    console.log(session)

    const handleSearch = () => {
        if (search.trim()) {
            router.push(`/jobs?search=${encodeURIComponent(search.trim())}`);
            setSearch('')
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/jobs">Jobs</Link></li>
                            <li><Link href="/hiring">Hiring</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-lg md:text-xl -ml-5 lg:ml-0">Portfolio & Job</Link>
                </div>

                <div className="navbar-center hidden lg:flex gap-5">
                    <Link href="/">Home</Link>
                    <Link href="/jobs">Jobs</Link>
                    <Link href="/hiring">Hiring</Link>
                </div>

                <div className="flex gap-2 navbar-end relative">
                    <input
                        type="text"
                        placeholder="Search Job"
                        className="input input-bordered w-36 md:w-auto rounded-full text-xs md:text-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className="absolute z-10 right-14 text-xs btn btn-xs btn-success rounded-full shadow-none"
                        onClick={handleSearch}
                    >
                        Search
                    </button>

                    {/* 
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Profile" src="https://rb.gy/c28gf3" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/profile">Profile</Link></li>
                            <li><Link href="/">Settings</Link></li>
                            <li><Link href="/">Logout</Link></li>
                        </ul>

                        
                    </div> */}

               
                </div>
            </div>
        </div>
    );
};

export default Navbar;
