import React from 'react';

const Category = () => {

    const categories = [
        "Software Development",
        "Web Development",
        "Mobile App Development",
        "Cloud Computing",
        "Cybersecurity",
        "Data Science",
        "Artificial Intelligence",
        "Machine Learning",
        "Blockchain Technology",
        "DevOps",
        "IT Support",
        "Network Administration",
        "Database Management",
        "UI/UX Design",
        "Game Development",
        "Embedded Systems",
        "QA & Testing",
        "Business Intelligence",
        "IT Consultancy",
        "System Administration"
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-primary">Explore Job Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    categories.map((category, index) => (
                        <div key={index} className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                            <div className="card-body flex flex-col justify-between">
                                <div className="flex items-center gap-2">
                                    <h3 className="card-title text-base">{category}</h3>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-sm btn-outline btn-primary">Explore Here</button>
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
