"use client"
import Link from 'next/link';
import React from 'react';
import axios from 'axios';

const page = () => {

  const handleSignUp = async (event) => {
    event.preventDefault();
    
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post("http://localhost:3000/register/api", newUser);

      if (response.status === 200) {
        event.target.reset();
        alert("User registered successfully!");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong during registration.");
    }
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col mt-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-primary mb-5">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-80 md:w-96 shadow-2xl border-primary border-2">
            <div className="card-body">
              <form className="fieldset" onSubmit={handleSignUp}>
                <label className="label">Name</label>
                <input type="text" className="input input-primary" placeholder="Name" name="name" />

                <label className="label">Email</label>
                <input type="email" className="input input-primary" placeholder="Email" name="email" />

                <label className="label">Create a Password</label>
                <input type="password" className="input input-primary" placeholder="Password" name="password" />

                <label className="label">Repeat Password</label>
                <input type="password" className="input input-primary" placeholder="Password" name="rpass" />

                <fieldset className="fieldset">
                  <legend className="fieldset-legend font-normal text-gray-500">Pick a image</legend>
                  <input type="file" className="file-input input-primary" />
                  <label className="label">Max size 2MB</label>
                </fieldset>

                <button className="btn btn-primary mt-4 text-white">Register</button>
              </form>
              <p className='text-xs'>Already have an account? <Link href="/login" className='text-primary font-bold'>Login Now</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
