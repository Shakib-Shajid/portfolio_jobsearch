'use client';
import React, { useState,useRef  } from 'react';
import cseskills from '@/../public/cseskills.json';
import categories from '@/../public/category.json';
import axios from 'axios';
import Swal from 'sweetalert2';

const Page = () => {
    const formRef = useRef(null);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [requirements, setRequirements] = useState([]);
    const [requirementInput, setRequirementInput] = useState('');

    const handleSkillSelect = (e) => {
        const value = e.target.value;
        if (value && !selectedSkills.includes(value)) {
            setSelectedSkills([...selectedSkills, value]);
        }
        e.target.value = "Pick required skills";
    };

    const removeSkill = (skill) => {
        setSelectedSkills(selectedSkills.filter(s => s !== skill));
    };

    const addRequirement = (e) => {
        e.preventDefault();
        if (requirementInput.trim() && !requirements.includes(requirementInput.trim())) {
            setRequirements([...requirements, requirementInput.trim()]);
            setRequirementInput('');
        }
    };

    const removeRequirement = (req) => {
        setRequirements(requirements.filter(r => r !== req));
    };

    const createPost = async (event) => {
        event.preventDefault();

        // Show SweetAlert2 confirmation dialog
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, submit it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Proceed with form submission if confirmed
                const newCreate = {
                    cname: event.target.cname.value,
                    pname: event.target.pname.value,
                    email: event.target.email.value,
                    wname: event.target.wname.value,
                    category: event.target.category.value,
                    requirements: requirements,
                    skills: selectedSkills
                }

                axios.post('http://localhost:3000/hiring/api', newCreate)
                    .then(res => {
                        Swal.fire({
                            title: "Success!",
                            text: "Your hiring post has been created.",
                            icon: "success"
                        });
                        formRef.current.reset();          // ✅ Resets all form inputs
                        setRequirements([]);             // ✅ Clear requirements
                        setSelectedSkills([]);           // ✅ Clear selected skills
                        setRequirementInput('');
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Error!",
                            text: "There was an issue with your submission.",
                            icon: "error"
                        });
                        console.log(error);
                    });
            }
        });
    }

    return (
        <div className='flex w-full'>
            <div className='flex flex-col gap-5 mx-auto border-info rounded-2xl border-2 pt-10 md:p-20 w-96 md:w-[80%] lg:w-[50%]'>
                <h3 className='text-3xl font-bold text-center text-info'>Hiring Form</h3>

                <form onSubmit={createPost} ref={formRef} className="flex flex-col gap-5 items-center">

                    <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-96 p-5' name="cname" placeholder='Company Name' required />

                    <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-96 p-5' name="pname" placeholder='Position Name' required />

                    <input type="email" className='input input-info border-2 rounded-xl w-80 md:w-96 p-5' name="email" placeholder='Company Email' required />

                    <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-96 p-5' name="wname" placeholder='Website Name' required />

                    <select defaultValue="Select Category" className="select input-info border-2 rounded-xl w-80 md:w-96 text-gray-400" name="category" required>
                        <option disabled={true}>Select Category</option>
                        {categories.map((category, index) => (
                            <option key={index}>{category}</option>
                        ))}
                    </select>

                    {/* Requirement Input */}
                    <div className="relative w-80 md:w-96">
                        <input
                            type="text"
                            value={requirementInput}
                            onChange={(e) => setRequirementInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault(); // Prevent form submission
                                    addRequirement(e); // Optional: directly add if you want enter to work as "add"
                                }
                            }}
                            className="input input-info border-2 rounded-xl w-full p-5 pr-12 focus:outline-none"
                            placeholder="Enter a requirement"
                        />
                        <button
                            type="button"
                            onClick={addRequirement}
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-info text-white btn-sm rounded-full text-xl px-2 shadow-md z-10"
                        >
                            +
                        </button>
                    </div>

                    {/* Requirements Display */}
                    <div className="flex flex-wrap gap-2 w-80 md:w-96">
                        {requirements.map((req, index) => (
                            <div key={index} className='text-gray-500 border rounded-2xl px-2 py-1 inline-flex text-sm hover:bg-accent hover:text-white' onClick={() => removeRequirement(req)}>
                                {req} ✕
                            </div>
                        ))}
                    </div>

                    {/* Skill Selector */}
                    <select onChange={handleSkillSelect} defaultValue="Pick required skills" className="select input-info border-2 rounded-xl w-80 md:w-96 text-gray-400" required>
                        <option disabled>Pick required skills</option>
                        {cseskills.map((cseskill, index) => (
                            <option key={index} value={cseskill}>{cseskill}</option>
                        ))}
                    </select>

                    {/* Selected Skills Display */}
                    <div className="flex flex-wrap gap-2 w-80 md:w-96">
                        {selectedSkills.map((skill, index) => (
                            <div key={index} className='text-gray-500 border rounded-2xl px-2 py-1 inline-flex text-sm hover:bg-accent hover:text-white' onClick={() => removeSkill(skill)}>
                                {skill} ✕
                            </div>
                        ))}
                    </div>

                    {/* <input type="" className='btn btn-info text-white rounded-xl w-80 md:w-96 mb-10 md:mb-0' /> */}
                    <button className='btn btn-info text-white rounded-xl w-80 md:w-96 mb-10 md:mb-0'>Submit</button>
                </form>
            </div>
        </div>

    );
};

export default Page;
