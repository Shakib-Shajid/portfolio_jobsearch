import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col mt-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card bg-base-100 w-96 shadow-2xl">
                        <div className="card-body">
                            <form className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                            <p className='text-xs'>Do not have an account? <Link href="/register">Register Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;