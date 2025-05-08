'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';
import getAllPosts from '@/lib/getAllPost';

const calculateMatchPercentage = (jobSkills, userSkills) => {
  if (!jobSkills?.length || !userSkills?.length) return 0;
  const jobSet = new Set(jobSkills.map(s => s.toLowerCase()));
  const userSet = new Set(userSkills.map(s => s.toLowerCase()));
  const matched = [...jobSet].filter(skill => userSet.has(skill));
  return Math.round((matched.length / jobSet.size) * 100);
};

const JobList = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const [users, setUsers] = useState([]);
  const [userSkills, setUserSkills] = useState([]);
  const [clickedJobs, setClickedJobs] = useState({});
  const [toastMessage, setToastMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch your skills from public/skills.json
  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch('/skills.json');
      const skills = await res.json();
      setUserSkills(skills);
    };
    fetchSkills();
  }, []);

  // Fetch job data from API using getAllPosts function
  useEffect(() => {
    const fetchData = async () => {
      const { users } = await getAllPosts();
      setUsers(users);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const filteredJobs = users.filter(job => {
    const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
    const matchesSearch =
      job.position.toLowerCase().includes(searchQuery) ||
      job.name.toLowerCase().includes(searchQuery) ||
      job.category.toLowerCase().includes(searchQuery) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  if (toastMessage) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Applied Successfully',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div>
      <h3 className="text-center font-bold text-2xl my-10">
        {selectedCategory ? `Jobs in ${selectedCategory}` : 'Find All Jobs'}
        {searchQuery && ` — "${searchQuery}"`}
      </h3>

      {isLoading ? (
        <p className="text-center text-gray-500 text-xl">Loading jobs...</p>
      ) : filteredJobs.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredJobs.map(data => {
            const percentage = calculateMatchPercentage(data.skills, userSkills);

            return (
              <div key={data._id} className="card w-[90%] mx-auto bg-base-100 card-xl border-blue-600 border-2 shadow-xl relative">
                <div className="card-body relative">
                  <div className="absolute right-4 top-4 text-center">
                    <p className={`text-xs font-medium mb-1 ${percentage < 50 ? 'text-red-500' : 'text-green-500'}`}>
                      {percentage < 50 ? 'Not Matching' : 'Matching'}
                    </p>
                    <div
                      className={`radial-progress no-dot w-16 h-16 ${percentage < 50 ? 'text-red-500' : 'text-green-500'}`}
                      style={{ "--value": percentage }}
                    >
                      {percentage}%
                    </div>
                  </div>

                  <h2 className="card-title text-blue-500">{data.position}</h2>
                  <a
                    href={data.website ? (data.website.startsWith('http') ? data.website : `https://${data.website}`) : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-lg"
                  >
                    {data.name}
                  </a>

                  <p className="font-bold text-base text-rose-600">
                    Requirements:
                    {data.requirements.map((require, index) => (
                      <span className="block font-normal text-black my-2" key={index}>
                        - {require}
                      </span>
                    ))}
                  </p>

                  <p className="my-2">
                    <span className="block mb-2 font-bold text-green-500">Skills:</span>
                    {data.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-gray-500 border rounded-2xl px-2 py-1 mr-1 inline-flex text-sm my-2 md:my-0 hover:bg-accent hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </p>
                  <p className='text-lg text-violet-600 font-bold'>Salary: {new Intl.NumberFormat('en-IN').format(data.salary)} BDT</p>

                  <div className="justify-end card-actions mt-2">
                    <button
                      onClick={() => {
                        if (!clickedJobs[data._id]) {
                          setClickedJobs(prev => ({ ...prev, [data._id]: true }));
                          setToastMessage(`You have applied to ${data.position} at ${data.name}`);
                          setTimeout(() => setToastMessage(''), 3000);
                        }
                      }}
                      className={`btn text-white w-full mx-auto
                      ${clickedJobs[data._id] ? 'bg-green-600' : percentage < 50 ? 'bg-red-600' : 'btn-info'}
                      ${clickedJobs[data._id] ? 'opacity-100' : ''}`}
                    >
                      {clickedJobs[data._id] ? 'Applied' : 'Apply'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default JobList;
