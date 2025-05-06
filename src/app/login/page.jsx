import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col mt-10 h-[75vh]">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-success mb-5">Login now!</h1>
                        
                    </div>
                    <div className="card bg-base-100 w-80 md:w-96 shadow-2xl border-success border-2">
                        <div className="card-body">
                            <form className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input input-success" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input input-success" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-success mt-4 text-white">Login</button>
                            </form>
                            <p className='text-xs'>Do not have an account? <Link href="/register" className='text-green-500 font-bold'>Register Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;