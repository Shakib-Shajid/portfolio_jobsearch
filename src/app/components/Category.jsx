import Link from 'next/link';
import React from 'react';
import categories from '@/../public/category.json';

const Category = () => {

    

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-primary">Explore IT Job Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    categories.map((category, index) => (
                        <div key={index} className="card bg-base-100 shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                            <div className="card-body flex flex-col justify-between">
                                <div className="flex items-center gap-2">
                                    <h3 className="card-title text-base">{category}</h3>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <Link href={`/jobs?category=${encodeURIComponent(category)}`} className="btn btn-sm btn-outline btn-primary">Explore Here</Link>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;
