import Link from 'next/link';
import React from 'react';

const page = () => {

    return (
        <div>

            <div className='flex gap-5 flex-col md:flex-row mt-5 justify-center w-[80%] mx-auto md:w-full'>
                <img src="https://rb.gy/c28gf3" className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div className="bg-white overflow-hidden shadow rounded-lg border md:w-1/3">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            User Profile
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            This is some information about the user.
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Full name
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
                                    <Link href="https://www.linkedin.com/" className="mr-6 border-b-2 border-black hover:font-bold">LinkedIn</Link >
                                    <Link href="https://github.com/" className="mr-6 border-b-2 border-black hover:font-bold">GitHub</Link >
                                    <Link href="https://www.google.com/" className=' border-b-2 border-black hover:font-bold'>Portfolio</Link >
                                </dd>

                            </div>

                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;