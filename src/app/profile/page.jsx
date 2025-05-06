import Link from 'next/link';
import React from 'react';
import experiences from "../../../public/experiences.json"
import projects from "../../../public/projects.json"
import skills from "../../../public/skills.json"


const page = () => {

    return (
        <div>

            <div className='flex gap-5 flex-col md:flex-row mt-5 justify-center w-[80%] mx-auto md:w-[90%] lg:w-full'>
                <img src="https://rb.gy/c28gf3" className="max-w-sm w-80 lg:w-full shadow-2xl border-blue-700 rounded-full border-4" alt="" />
                <div className="bg-white overflow-hidden shadow rounded-lg border md:w-full lg:w-1/3">
                    <div className="px-4 py-5 sm:px-4">
                        <h3 className="text-lg leading-6 font-bold text-green-900">
                            User Profile
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Information about the user.
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Full Name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    ABCD EFGH
                                </dd>
                            </div>

                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Current Company
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    IJKL MNOP
                                </dd>
                            </div>

                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Designation
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Junior Web Developer
                                </dd>
                            </div>

                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Experience
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    2 years 3 months
                                </dd>
                            </div>

                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Social Links
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <Link href="https://www.linkedin.com/" className="mr-6 border-b-2 border-black hover:font-bold hover:text-blue-600" target="_blank">LinkedIn</Link >
                                    <Link href="https://github.com/" className="mr-6 border-b-2 border-black hover:font-bold hover:text-blue-600" target="_blank">GitHub</Link >
                                    <Link href="https://www.google.com/" className=' border-b-2 border-black hover:font-bold hover:text-blue-600' target="_blank">Portfolio</Link >
                                </dd>

                            </div>

                        </dl>
                    </div>
                </div>
            </div>

            <p className=' text-3xl font-bold my-10 w-3/4 lg:w-2/3 mx-auto'><span className='block mb-2 font-bold text-green-500'>My Skills:</span>
                {skills.map((skill, index) => (
                    <span key={index} className='text-gray-500 border rounded-2xl px-2 py-1 mr-2 inline-flex text-sm my-2 hover:bg-accent hover:text-white'>
                        {skill}
                    </span>
                ))}
            </p>


            <div className='w-3/4 md:w-3/4 lg:w-2/3 mx-auto'>
                <h3 className='text-3xl md:text-5xl font-bold text-blue-600 text-center my-3'>About Myself</h3>


                <div className="card bg-base-100 w-full shadow-xl my-5 border-l-4 border-b-4 border-pink-500">
                    <div className="card-body">
                        <p className='text-xl md:text-2xl font-bold text-pink-600'>Full Stack Web Develoepr </p>

                        <p className='text-lg text-[#4B5563] md:text-justify'>I am a results-driven Senior Full-Stack Developer with over 7 years of experience designing, developing, and deploying scalable web applications across a variety of industries. My expertise spans both frontend and backend technologies, including JavaScript (React, Next.js), TypeScript, Node.js, Express, and database systems like MongoDB and PostgreSQL. <br /><br />

                            I&apos;m passionate about building clean, maintainable code and delivering high-performance, user-focused solutions. I&apos;ve led cross-functional teams, architected large systems from scratch, and collaborated closely with stakeholders to transform business requirements into robust digital products. <br /><br />

                            On the frontend, I specialize in crafting intuitive user interfaces with Tailwind CSS, Next.js App Router, and modern design systems. On the backend, I ensure security, scalability, and performance through RESTful APIs, JWT authentication, microservices, and cloud deployment (e.g., AWS, Vercel, or Docker-based infrastructure). <br /><br />

                            I'm a continuous learner, open-source contributor, and mentor who enjoys solving complex problems and optimizing workflows. My goal is to build impactful software that drives business growth and delivers a seamless user experience.</p>




                        {/* <div className="dropdown dropdown-bottom dropdown-end absolute top-0 right-0 mx-2">
                                    <div tabIndex={0} role="button" className="">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                            <path d="M2.25 12C2.25 10.4812 3.48122 9.25 5 9.25C6.51878 9.25 7.75 10.4812 7.75 12C7.75 13.5188 6.51878 14.75 5 14.75C3.48122 14.75 2.25 13.5188 2.25 12ZM5 10.75C4.30964 10.75 3.75 11.3096 3.75 12C3.75 12.6904 4.30964 13.25 5 13.25C5.69036 13.25 6.25 12.6904 6.25 12C6.25 11.3096 5.69036 10.75 5 10.75Z" fill="#1C274C" />
                                            <path d="M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12ZM12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75Z" fill="#1C274C" />
                                            <path d="M19 9.25C17.4812 9.25 16.25 10.4812 16.25 12C16.25 13.5188 17.4812 14.75 19 14.75C20.5188 14.75 21.75 13.5188 21.75 12C21.75 10.4812 20.5188 9.25 19 9.25ZM17.75 12C17.75 11.3096 18.3096 10.75 19 10.75C19.6904 10.75 20.25 11.3096 20.25 12C20.25 12.6904 19.6904 13.25 19 13.25C18.3096 13.25 17.75 12.6904 17.75 12Z" fill="#1C274C" />
                                        </svg>
                                    </div>

                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li>
                                                <Link to={`/updatePost/${experience.id}`}>Edit</Link>
                                            </li>
                                            <li>
                                                <button onClick={() => handleDelete(experience.id)}>Delete</button>
                                            </li>
                                        </ul>

                                </div> */}

                    </div>
                </div>


            </div>




            <div className='w-3/4 md:w-3/4 lg:w-2/3 mx-auto'>
                <h3 className='text-3xl md:text-5xl font-bold text-violet-600 text-center my-10'>Experience</h3>

                {
                    experiences.map((experience, index) =>
                        <div className="card bg-base-100 w-full shadow-xl my-5 border-l-4 border-b-4 border-indigo-500" key={index}>
                            <div className="card-body ">
                                <div className='flex flex-col md:flex-row items-baseline'>
                                    <p className='text-xl md:text-2xl font-bold text-violet-600'>{experience.designation} </p>
                                    <p className='text-xs md:text-sm font-bold text-indigo-400 text-end'>{experience.duration}</p>
                                </div>
                                <p className='text-lg font-bold text-green-400'>{experience.company}</p>
                                <div className='space-y-2'>{experience.responsibilities.map((result, index) =>
                                    <p className='text-gray-800' key={index}>- {result}</p>
                                )}</div>

                                <p className=' text-3xl font-bold'>
                                    {experience.technologies.map((skill, index) => (
                                        <span key={index} className='text-gray-500 border rounded-2xl px-2 py-1 mr-2 inline-flex text-sm my-2 hover:bg-accent hover:text-white'>
                                            {skill}
                                        </span>
                                    ))}
                                </p>

                                {/* <div className="dropdown dropdown-bottom dropdown-end absolute top-0 right-0 mx-2">
                                    <div tabIndex={0} role="button" className="">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                            <path d="M2.25 12C2.25 10.4812 3.48122 9.25 5 9.25C6.51878 9.25 7.75 10.4812 7.75 12C7.75 13.5188 6.51878 14.75 5 14.75C3.48122 14.75 2.25 13.5188 2.25 12ZM5 10.75C4.30964 10.75 3.75 11.3096 3.75 12C3.75 12.6904 4.30964 13.25 5 13.25C5.69036 13.25 6.25 12.6904 6.25 12C6.25 11.3096 5.69036 10.75 5 10.75Z" fill="#1C274C" />
                                            <path d="M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12ZM12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75Z" fill="#1C274C" />
                                            <path d="M19 9.25C17.4812 9.25 16.25 10.4812 16.25 12C16.25 13.5188 17.4812 14.75 19 14.75C20.5188 14.75 21.75 13.5188 21.75 12C21.75 10.4812 20.5188 9.25 19 9.25ZM17.75 12C17.75 11.3096 18.3096 10.75 19 10.75C19.6904 10.75 20.25 11.3096 20.25 12C20.25 12.6904 19.6904 13.25 19 13.25C18.3096 13.25 17.75 12.6904 17.75 12Z" fill="#1C274C" />
                                        </svg>
                                    </div>

                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li>
                                                <Link to={`/updatePost/${experience.id}`}>Edit</Link>
                                            </li>
                                            <li>
                                                <button onClick={() => handleDelete(experience.id)}>Delete</button>
                                            </li>
                                        </ul>

                                </div> */}

                            </div>
                        </div>
                    )
                }


            </div>

            <div className='w-3/4 md:w-3/4 lg:w-2/3 mx-auto'>
                <h3 className='text-3xl md:text-5xl font-bold  text-center my-10 text-green-500'>Projects</h3>

                {
                    projects.map((project, index) =>
                        <div className="card bg-base-100 w-full shadow-2xl my-5 border-l-4 border-t-4 border-green-500" key={index}>
                            <div className="card-body ">
                                <div className='flex flex-col md:flex-row items-baseline'>
                                    <p className='text-lg md:text-xl font-bold text-green-500 max-w-lg'>{project.name} </p>
                                    <div className='flex gap-10 lg:ml-16'>
                                        <p className='text-xs md:text-sm text-indigo-400 border-b-2 font-extrabold'><Link href={project.github} target="_blank">GitHub Link</Link></p>
                                        <p className='text-xs md:text-sm text-indigo-400 border-b-2 font-extrabold'><Link href={project.live} target="_blank">Live Link</Link></p>
                                    </div>
                                </div>

                                <p className='text-lg font-bold text-green-400'>{project.company}</p>
                                <div className='space-y-2'>{project.features.map((result, index) =>
                                    <p className='text-gray-800' key={index}>- {result}</p>
                                )}
                                    <p className=' text-3xl font-bold'>
                                        {project.technologies.map((skill, index) => (
                                            <span key={index} className='text-gray-500 border rounded-2xl px-2 py-1 mr-2 inline-flex text-sm my-2 hover:bg-accent hover:text-white'>
                                                {skill}
                                            </span>
                                        ))}
                                    </p>
                                </div>



                                {/* <div className="dropdown dropdown-bottom dropdown-end absolute top-0 right-0 mx-2">
                                    <div tabIndex={0} role="button" className="">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                            <path d="M2.25 12C2.25 10.4812 3.48122 9.25 5 9.25C6.51878 9.25 7.75 10.4812 7.75 12C7.75 13.5188 6.51878 14.75 5 14.75C3.48122 14.75 2.25 13.5188 2.25 12ZM5 10.75C4.30964 10.75 3.75 11.3096 3.75 12C3.75 12.6904 4.30964 13.25 5 13.25C5.69036 13.25 6.25 12.6904 6.25 12C6.25 11.3096 5.69036 10.75 5 10.75Z" fill="#1C274C" />
                                            <path d="M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12ZM12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75Z" fill="#1C274C" />
                                            <path d="M19 9.25C17.4812 9.25 16.25 10.4812 16.25 12C16.25 13.5188 17.4812 14.75 19 14.75C20.5188 14.75 21.75 13.5188 21.75 12C21.75 10.4812 20.5188 9.25 19 9.25ZM17.75 12C17.75 11.3096 18.3096 10.75 19 10.75C19.6904 10.75 20.25 11.3096 20.25 12C20.25 12.6904 19.6904 13.25 19 13.25C18.3096 13.25 17.75 12.6904 17.75 12Z" fill="#1C274C" />
                                        </svg>
                                    </div>

                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li>
                                                <Link to={`/updatePost/${experience.id}`}>Edit</Link>
                                            </li>
                                            <li>
                                                <button onClick={() => handleDelete(experience.id)}>Delete</button>
                                            </li>
                                        </ul>

                                </div> */}

                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    );
};

export default page;