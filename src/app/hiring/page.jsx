'use client';
import React, { useState } from 'react';
import cseskills from '@/../public/cseskills.json';

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

    return (
        <div className='flex w-96 md:w-full mx-auto'>
            <div className='flex flex-col gap-5 mx-auto border-info rounded-2xl border-2 pt-10 md:p-20'>
                <h3 className='text-3xl font-bold text-center text-info'>Hiring Form</h3>

                <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-96 mx-auto p-5' placeholder='Company Name' />
                <input type="text" className='input input-info border-2 rounded-xl w-80 md:w-96 mx-auto p-5' placeholder='Position Name' />

                {/* Requirement Input + Button */}
                <form onSubmit={addRequirement} className="relative w-80 md:w-96 mx-auto">
                    <input
                        type="text"
                        value={requirementInput}
                        onChange={(e) => setRequirementInput(e.target.value)}
                        className="input input-info border-2 rounded-xl w-full p-5 pr-12 focus:outline-none"
                        placeholder="Enter a requirement"
                    />
                    <button
                        type="submit"
                        className="absolute right-1 top-5 transform -translate-y-1/2 bg-info text-white btn-sm rounded-full text-xl px-2  shadow-md z-10">
                        
                        +
                    </button>
                </form>


                {/* Requirements Display */}
                <div className="flex flex-wrap gap-2 w-96 mx-auto">
                    {requirements.map((req, index) => (
                        <div key={index} className="badge badge-outline badge-primary p-3 cursor-pointer hover:badge-error" onClick={() => removeRequirement(req)}>
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
                <div className="flex flex-wrap gap-2 w-96 mx-auto">
                    {selectedSkills.map((skill, index) => (
                        <div key={index} className="badge badge-outline badge-info p-3 cursor-pointer hover:badge-error" onClick={() => removeSkill(skill)}>
                            {skill} ✕
                        </div>
                    ))}
                </div>

                <input type="submit" className='btn btn-info text-white rounded-xl w-80 md:w-96 mx-auto mb-10 md:mb-0' />
            </div>
        </div>
    );
};

export default Page;
