"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";


const Page = () => {
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        router.push("/"); // redirect to protected route
      });
    }
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col mt-10 h-[75vh]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-success mb-5">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-80 md:w-96 shadow-2xl border-success border-2">
            <div className="card-body">
              <form className="fieldset" onSubmit={handleLogin}>
                <label className="label">Email</label>
                <input type="email" className="input input-success" placeholder="Email" name="email" required />

                <label className="label">Password</label>
                <input type="password" className="input input-success" placeholder="Password" name="password" required />

                <div><a className="link link-hover">Forgot password?</a></div>

                <button type="submit" className="btn btn-success mt-4 text-white">Login</button>
              </form>
              <p className='text-xs mt-2'>Don't have an account? <Link href="/register" className='text-green-500 font-bold'>Register Now</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
