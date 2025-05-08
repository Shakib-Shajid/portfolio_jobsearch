'use client';
import React, { useState } from 'react';
import cseskills from '@/../public/cseskills.json';
import categories from '@/../public/category.json';
import axios from 'axios';

const Page = () => {
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

    const addRequirement = () => {
        if (requirementInput.trim() && !requirements.includes(requirementInput.trim())) {
            setRequirements([...requirements, requirementInput.trim()]);
            setRequirementInput('');
        }
    };

    const removeRequirement = (req) => {
        setRequirements(requirements.filter(r => r !== req));
    };

    const handleCreate = async (event) => {
        event.preventDefault();
        // Prepare form data here or handle API logic
        const evTar = event.target;
        const newHire = {
            name: evTar.cname.value,
            position: evTar.pname.value,
            website: evTar.wname.value,
            email: evTar.email.value,
            category: evTar.category.value,
            requirements: requirements,
            skills: selectedSkills
        }

        axios.post('http://localhost:3000/hiring/api',newHire)
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    };

    return (
        <div className='flex w-full'>
            <div className='flex flex-col gap-5 mx-auto border-info rounded-2xl border-2 pt-10 md:p-20 w-96 md:w-[80%] lg:w-[50%]'>
                <h3 className='text-3xl font-bold text-center text-info'>Hiring Form</h3>

                <form onSubmit={handleCreate} className="flex flex-col gap-5">
                    <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-96 mx-auto p-5' placeholder='Company Name' name="cname" />
                    <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-96 mx-auto p-5' placeholder='Position Name' name="pname" />
                    <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-96 mx-auto p-5' placeholder='Website Name' name="wname" />
                    <input type="email" className='input input-info border-2 rounded-xl w-80 md:w-96 mx-auto p-5' placeholder='Company Email' name="email" />

                    <select defaultValue="Select Category" className="select input-info border-2 rounded-xl w-80 md:w-96 mx-auto text-gray-400" name="category">
                        <option disabled={true}>Select Category</option>
                        {categories.map((category, index) => (
                            <option key={index}>{category}</option>
                        ))}
                    </select>

                    {/* Requirement Input + Button */}
                    <div className="relative w-80 md:w-96 mx-auto">
                        <input
                            type="text"
                            value={requirementInput}
                            onChange={(e) => setRequirementInput(e.target.value)}
                            className="input input-info border-2 rounded-xl w-full p-5 pr-12 focus:outline-none"
                            placeholder="Enter a requirement"
                        />
                        <button
                            type="button"
                            onClick={addRequirement}
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-info text-white btn-sm rounded-full text-xl px-2 shadow-md z-10">
                            +
                        </button>
                    </div>

                    {/* Requirements Display */}
                    <div className="flex flex-wrap gap-2 w-80 md:w-96 mx-auto">
                        {requirements.map((req, index) => (
                            <div key={index} className='text-gray-500 border rounded-2xl px-2 py-1 inline-flex text-sm hover:bg-accent hover:text-white' onClick={() => removeRequirement(req)}>
                                {req} ✕
                            </div>
                        ))}
                    </div>

                    {/* Skill Selector */}
                    <select onChange={handleSkillSelect} defaultValue="Pick required skills" className="select input-info border-2 rounded-xl w-80 md:w-96 mx-auto text-gray-400">
                        <option disabled>Pick required skills</option>
                        {cseskills.map((cseskill, index) => (
                            <option key={index} value={cseskill}>{cseskill}</option>
                        ))}
                    </select>

                    {/* Selected Skills Display */}
                    <div className="flex flex-wrap gap-2 w-80 md:w-96 mx-auto">
                        {selectedSkills.map((skill, index) => (
                            <div key={index} className='text-gray-500 border rounded-2xl px-2 py-1 inline-flex text-sm hover:bg-accent hover:text-white' onClick={() => removeSkill(skill)}>
                                {skill} ✕
                            </div>
                        ))}
                    </div>

                    <input type="submit" value="Submit" className='btn btn-info text-white rounded-xl w-80 md:w-96 mx-auto mb-10 md:mb-0' />
                </form>
            </div>
        </div>
    );
};

export default Page;
