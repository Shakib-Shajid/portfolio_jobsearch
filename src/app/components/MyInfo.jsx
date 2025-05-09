'use client';
import React, { useState, useRef } from 'react';
import cseskills from '@/../public/cseskills.json';
import categories from '@/../public/category.json';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyInfo = () => {

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

    const addRequirement = () => {
        if (requirementInput.trim() && !requirements.includes(requirementInput.trim())) {
            setRequirements([...requirements, requirementInput.trim()]);
            setRequirementInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission on Enter
            addRequirement();   // Call the addRequirement function
        }
    };

    const removeRequirement = (req) => {
        setRequirements(requirements.filter(r => r !== req));
    };



    return (
        <div>
            <h3 className='text-3xl md:text-5xl font-bold text-center text-info mb-10'>Your Info</h3>
            <div className="flex flex-col gap-5" ref={formRef}>
                <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-full mx-auto p-5' placeholder='Name' />
                <input type="email" className='input input-info border-2 rounded-xl w-80 md:w-full mx-auto p-5' placeholder='email' />
                <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-full mx-auto p-5' placeholder='Current Company Name' />
                <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-full mx-auto p-5' placeholder='Current Company Designation' />
                <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-full mx-auto p-5' placeholder='Company Website' name="wname" />

                <select defaultValue="Select Category" className="select input-info border-2 rounded-xl w-80 md:w-full mx-auto text-gray-400" name="category">
                    <option disabled={true}>Select Category</option>
                    {categories.map((category, index) => (
                        <option key={index}>{category}</option>
                    ))}
                </select>

                {/* Requirement Input + Button */}
                <div className="relative w-80 md:w-full mx-auto">
                    <input
                        type="text"
                        value={requirementInput}
                        onChange={(e) => setRequirementInput(e.target.value)}
                        onKeyDown={handleKeyDown}  // Added onKeyDown handler
                        className="input input-info border-2 rounded-xl w-full p-5 pr-12 focus:outline-none"
                        placeholder="Company Task"
                    />
                    <button
                        type="button"
                        onClick={addRequirement}
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-info text-white btn-sm rounded-full text-xl px-2 shadow-md z-10">
                        +
                    </button>
                </div>

                {/* Requirements Display */}
                <div className="flex flex-wrap gap-2 w-80 md:w-full mx-auto">
                    {requirements.map((req, index) => (
                        <div key={index} className='text-gray-500 border rounded-2xl px-2 py-1 inline-flex text-sm hover:bg-accent hover:text-white' onClick={() => removeRequirement(req)}>
                            {req} ✕
                        </div>
                    ))}
                </div>

                {/* Skill Selector */}
                <select onChange={handleSkillSelect} defaultValue="My Skills" className="select input-info border-2 rounded-xl w-80 md:w-full mx-auto text-gray-400">
                    <option disabled>My Skills</option>
                    {cseskills.map((cseskill, index) => (
                        <option key={index} value={cseskill}>{cseskill}</option>
                    ))}
                </select>

                {/* Selected Skills Display */}
                <div className="flex flex-wrap gap-2 w-80 md:w-full mx-auto">
                    {selectedSkills.map((skill, index) => (
                        <div key={index} className='text-gray-500 border rounded-2xl px-2 py-1 inline-flex text-sm hover:bg-accent hover:text-white' onClick={() => removeSkill(skill)}>
                            {skill} ✕
                        </div>
                    ))}
                </div>

                <h3 className='text-3xl md:text-5xl font-bold text-blue-600 text-center my-3'>About Myself</h3>
                <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-full mx-auto p-5' placeholder='Your Expertice like frontend, backend (Show as title)' />

                <textarea placeholder="About yourself" className="text-sm textarea textarea-lg input-info border-2 rounded-xl w-80 md:w-full mx-auto p-5"></textarea>
            </div>
        </div>
    );
};

export default MyInfo;