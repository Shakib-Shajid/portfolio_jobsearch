"use client";
import { signIn } from "next-auth/react"; // Import signIn from next-auth
import Link from "next/link";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; // Import useRouter for redirection

const Page = () => {
  const router = useRouter();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const rpassword = event.target.rpassword.value;

    // Check if password and confirm password match
    if (password !== rpassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Password and Confirm Password do not match.",
      });
      return; // Stop further execution if passwords don't match
    }

    const newUser = { name, email, password };

    try {
      // Send user data to the registration API
      const response = await axios.post("http://localhost:3000/register/api", newUser);

      if (response.status === 200) {
        event.target.reset();

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User registered successfully!",
          showConfirmButton: false,
          timer: 1500,
        }).then(async () => {
          // Auto-login after successful registration
          const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
          });

          if (res.ok) {
            // Redirect to the previous page or default page after successful login
            const redirectUrl = new URL(window.location.href).searchParams.get('redirect') || "/";
            router.push(redirectUrl); // Redirect to the target page
          } else {
            Swal.fire({
              icon: "error",
              title: "Login Failed",
              text: "Something went wrong during login.",
            });
          }
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
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
                <input type="text" className="input input-primary" placeholder="Name" name="name" required />

                <label className="label">Email</label>
                <input type="email" className="input input-primary" placeholder="Email" name="email" required />

                <label className="label">Create a Password</label>
                <input type="password" className="input input-primary" placeholder="Password" name="password" required />

                <label className="label">Repeat Password</label>
                <input type="password" className="input input-primary" placeholder="Confirm Password" name="rpassword" required />

                <fieldset className="fieldset">
                  <legend className="fieldset-legend font-normal text-gray-500">Pick a Image</legend>
                  <input type="file" className="file-input input-primary" />
                  <label className="label">Max size 2MB</label>
                </fieldset>

                <button className="btn btn-primary mt-4 text-white">Register</button>
              </form>
              <p className="text-xs mt-2">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-bold">
                  Login Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
