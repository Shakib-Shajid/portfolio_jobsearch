import React from 'react';
import hiring from '@/../public/hiring.json';
import skills from '@/../public/skills.json';

const calculateMatchPercentage = (jobSkills, userSkills) => {
  const jobSet = new Set(jobSkills.map(s => s.toLowerCase()));
  const userSet = new Set(userSkills.map(s => s.toLowerCase()));
  const matched = [...jobSet].filter(skill => userSet.has(skill));
  return Math.round((matched.length / jobSet.size) * 100);
};

const page = () => {
  return (
    <div>
      <h3 className="text-center font-bold text-2xl my-10">Find Jobs</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {hiring.map(data => {
          const percentage = calculateMatchPercentage(data.skills, skills);

          return (
            <div
              key={data.id}
              className="card w-[90%] mx-auto bg-base-100 card-xl border-blue-600 border-2 shadow-xl relative"
            >
              <div className="card-body relative">
                {/* Matching Percentage */}
                <div className="absolute right-4 top-4 text-center">
                  <p
                    className={`text-xs font-medium mb-1 ${percentage < 50 ? 'text-red-500' : 'text-green-500'
                      }`}
                  >
                    {percentage < 50 ? 'Not Matching' : 'Matching'}
                  </p>
                  <div
                    className={`radial-progress no-dot w-16 h-16 ${percentage < 50 ? "text-red-500" :"text-green-500"} `}
                    style={{ "--value": percentage }}
                    aria-valuenow={percentage}
                    role="progressbar"
                  >
                    {percentage}%
                  </div>
                </div>

                {/* Job Info */}
                <h2 className="card-title text-blue-500">{data.position}</h2>
                <p className="text-gray-500 text-lg">{data.name}</p>

                {/* Requirements */}
                <p className="font-bold text-base text-rose-600">
                  Requirements:
                  {data.requirements.map((require, index) => (
                    <span
                      className="block font-normal text-black my-2"
                      key={index}
                    >
                      - {require}
                    </span>
                  ))}
                </p>

                {/* Skills */}
                <p className="my-2">
                  <span className="block mb-2 font-bold text-green-500">
                    Skills:
                  </span>
                  {data.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-gray-500 border rounded-2xl px-2 py-1 mr-1 inline-flex text-sm my-2 md:my-0 hover:bg-accent hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </p>

                {/* Apply Button */}
                <div className="justify-end card-actions mt-2">
                  <button className={`btn text-white w-full mx-auto ${percentage < 50 ? "bg-red-600" : "btn-info"} `}>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
