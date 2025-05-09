'use client';
import React, { useState, useRef } from 'react';
import cseskills from '@/../public/cseskills.json';
import axios from 'axios';
import Swal from 'sweetalert2';

const Experience = () => {
    const formRef = useRef(null);
    const [experiences, setExperiences] = useState([
        { cname: '', pname: '', start: '', end: '', requirements: [], selectedSkills: [], requirementInput: '' }
    ]);

    const handleExperienceChange = (index, field, value) => {
        const updated = [...experiences];
        updated[index][field] = value;
        setExperiences(updated);
    };

    const handleSkillSelect = (index, value) => {
        const updated = [...experiences];
        if (value && !updated[index].selectedSkills.includes(value)) {
            updated[index].selectedSkills.push(value);
        }
        setExperiences(updated);
    };

    const removeSkill = (index, skill) => {
        const updated = [...experiences];
        updated[index].selectedSkills = updated[index].selectedSkills.filter(s => s !== skill);
        setExperiences(updated);
    };

    const addRequirement = (index) => {
        const updated = [...experiences];
        const input = updated[index].requirementInput.trim();
        if (input && !updated[index].requirements.includes(input)) {
            updated[index].requirements.push(input);
            updated[index].requirementInput = '';
        }
        setExperiences(updated);
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addRequirement(index);
        }
    };

    const removeRequirement = (index, req) => {
        const updated = [...experiences];
        updated[index].requirements = updated[index].requirements.filter(r => r !== req);
        setExperiences(updated);
    };

    const addExperience = () => {
        setExperiences([...experiences, { cname: '', pname: '', start: '', end: '', requirements: [], selectedSkills: [], requirementInput: '' }]);
    };

    const handleCreate = async (event) => {
        event.preventDefault();

        try {
            for (let exp of experiences) {
                const newExperience = {
                    cname: exp.cname,
                    pname: exp.pname,
                    start: exp.start,
                    end: exp.end,
                    requirements: exp.requirements,
                    skills: exp.selectedSkills,
                };

                await axios.post('http://localhost:3000/experience/api', newExperience);
            }

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Experiences Submitted!",
                showConfirmButton: false,
                timer: 1500
            });

            formRef.current.reset();
            setExperiences([
                { cname: '', pname: '', start: '', end: '', requirements: [], selectedSkills: [], requirementInput: '' }
            ]);

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleCreate} className="flex flex-col gap-5" ref={formRef}>
                <h3 className='text-3xl md:text-5xl font-bold text-violet-600 text-center my-5'>Experience</h3>

                {experiences.map((exp, index) => (
                    <div key={index} className=''>
                        <input
                            type="text"
                            className='input input-info border-2 rounded-xl w-full mb-3 p-5'
                            placeholder='Company Name'
                            value={exp.cname}
                            onChange={e => handleExperienceChange(index, 'cname', e.target.value)}
                        />
                        <input
                            type="text"
                            className='input input-info border-2 rounded-xl w-full mb-3 p-5'
                            placeholder='Position Name'
                            value={exp.pname}
                            onChange={e => handleExperienceChange(index, 'pname', e.target.value)}
                        />
                        <input
                            type="date"
                            className='input input-info border-2 rounded-xl w-full mb-3 p-5'
                            value={exp.start}
                            onChange={e => handleExperienceChange(index, 'start', e.target.value)}
                        />
                        <input
                            type="date"
                            className='input input-info border-2 rounded-xl w-full mb-3 p-5'
                            value={exp.end}
                            onChange={e => handleExperienceChange(index, 'end', e.target.value)}
                        />

                        {/* Requirement Input */}
                        <div className="relative w-full mb-3">
                            <input
                                type="text"
                                value={exp.requirementInput}
                                onChange={(e) => handleExperienceChange(index, 'requirementInput', e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="input input-info border-2 rounded-xl w-full p-5 pr-12"
                                placeholder="Enter a requirement"
                            />
                            <button
                                type="button"
                                onClick={() => addRequirement(index)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-info text-white btn-sm rounded-full text-xl px-2 shadow-md z-10">
                                +
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                            {exp.requirements.map((req, i) => (
                                <div key={i} className='text-gray-500 border rounded-2xl px-2 py-1 inline-flex text-sm hover:bg-accent hover:text-white' onClick={() => removeRequirement(index, req)}>
                                    {req} ✕
                                </div>
                            ))}
                        </div>

                        {/* Skills */}
                        <select
                            onChange={(e) => handleSkillSelect(index, e.target.value)}
                            defaultValue="Pick required skills"
                            className="select input-info border-2 rounded-xl w-full text-gray-400 mb-3"
                        >
                            <option disabled>Pick required skills</option>
                            {cseskills.map((skill, i) => (
                                <option key={i} value={skill}>{skill}</option>
                            ))}
                        </select>

                        <div className="flex flex-wrap gap-2">
                            {exp.selectedSkills.map((skill, i) => (
                                <div key={i} className='text-gray-500 border rounded-2xl px-2 py-1 inline-flex text-sm hover:bg-accent hover:text-white' onClick={() => removeSkill(index, skill)}>
                                    {skill} ✕
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Add Another Experience Button */}
                <button type="button" onClick={addExperience} className="btn btn-outline btn-info w-60 mx-auto">
                    + Add Another Experience
                </button>

                {/* Submit Button */}
                {/* <button type="submit" className="btn btn-success w-60 mx-auto mt-4">Submit</button> */}
            </form>
        </div>
    );
};

export default Experience;
