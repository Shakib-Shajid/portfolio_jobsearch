import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col mt-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-primary mb-5">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-96 shadow-2xl border-primary border-2">
                        <div className="card-body">
                            <form className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input input-primary" placeholder="Name" />

                                <label className="label">Email</label>
                                <input type="email" className="input input-primary" placeholder="Email" />

                                <label className="label">Create a Password</label>
                                <input type="password" className="input input-primary" placeholder="Password" />
                                
                                <label className="label">Repeat Password</label>
                                <input type="password" className="input input-primary" placeholder="Password" />

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-normal text-gray-500">Pick a image</legend>
                                    <input type="file" className="file-input input-primary" />
                                    <label className="label">Max size 2MB</label>
                                </fieldset>

                                <button className="btn btn-primary mt-4">Register</button>
                            </form>
                            <p className='text-xs'>Already have an account? <Link href="/login">Login Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;