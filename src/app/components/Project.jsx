
'use client';
import React, { useState, useRef } from 'react';
import cseskills from '@/../public/cseskills.json';


const emptyProject = {
    name: '',
    website: '',
    email: '',
    position: '',
    category: '',
    salary: '',
    requirements: [],
    requirementInput: '',
    skills: [],
    github: '',
    live: '',
};

const Project = () => {
    const formRef = useRef(null);
    const [projects, setProjects] = useState([{ ...emptyProject }]);

    const handleChange = (index, field, value) => {
        const updated = [...projects];
        updated[index][field] = value;
        setProjects(updated);
    };

    const handleSkillSelect = (index, value) => {
        const updated = [...projects];
        if (value && !updated[index].skills.includes(value)) {
            updated[index].skills.push(value);
        }
        setProjects(updated);
    };

    const removeSkill = (index, skill) => {
        const updated = [...projects];
        updated[index].skills = updated[index].skills.filter(s => s !== skill);
        setProjects(updated);
    };

    const addRequirement = (index) => {
        const updated = [...projects];
        const input = updated[index].requirementInput.trim();
        if (input && !updated[index].requirements.includes(input)) {
            updated[index].requirements.push(input);
            updated[index].requirementInput = '';
        }
        setProjects(updated);
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addRequirement(index);
        }
    };

    const removeRequirement = (index, req) => {
        const updated = [...projects];
        updated[index].requirements = updated[index].requirements.filter(r => r !== req);
        setProjects(updated);
    };

    const addNewProject = () => {
        setProjects([...projects, { ...emptyProject }]);
    };


    return (
        <div>
            <h3 className='text-3xl md:text-5xl font-bold text-center my-10 text-green-500'>Projects</h3>
            <div className="flex flex-col gap-10 relative" ref={formRef}>
                {projects.map((proj, index) => (
                    <div key={index} className="rounded-xl space-y-4 w-80 md:w-full mx-auto">

                        <div className='w-80 md:w-full'>
                            <input
                                type="text"
                                className="input input-info border-2 rounded-xl w-full p-5 pr-12 focus:outline-none"
                                placeholder='Project Name'
                                value={proj.name}
                                onChange={(e) => handleChange(index, 'name', e.target.value)}
                            />
                        </div>

                        {/* Requirements */}
                        <div className="relative w-80 md:w-full ">
                            <input
                                type="text"
                                value={proj.requirementInput}
                                onChange={(e) => handleChange(index, 'requirementInput', e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="input input-info border-2 rounded-xl w-full p-5 pr-12 focus:outline-none"
                                placeholder="Enter a requirement"
                            />
                            <button
                                type="button"
                                onClick={() => addRequirement(index)}
                                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-info text-white btn-sm rounded-full text-xl px-2 shadow-md z-10">
                                +
                            </button>
                        </div>


                        <div className="flex gap-2 w-80 md:w-96">
                            {proj.requirements.map((req, i) => (
                                <div key={i} className='text-gray-500 border rounded-2xl px-2 py-1 inline-flex text-sm hover:bg-accent hover:text-white' onClick={() => removeRequirement(index, req)}>
                                    {req} ✕
                                </div>
                            ))}
                        </div>

                        {/* Skills */}
                        <select
                            onChange={(e) => handleSkillSelect(index, e.target.value)}
                            defaultValue="Pick required skills"
                            className="select input-info border-2 rounded-xl w-80 md:w-full mx-auto text-gray-400"
                        >
                            <option disabled>Pick required skills</option>
                            {cseskills.map((cseskill, idx) => (
                                <option key={idx} value={cseskill}>{cseskill}</option>
                            ))}
                        </select>

                        <div className="flex flex-wrap gap-2 w-80 md:w-full mx-auto">
                            {proj.skills.map((skill, i) => (
                                <div key={i} className='text-gray-500 border rounded-2xl px-2 py-1 inline-flex text-sm hover:bg-accent hover:text-white' onClick={() => removeSkill(index, skill)}>
                                    {skill} ✕
                                </div>
                            ))}
                        </div>

                        {/* Links */}
                        <input
                            type="url"
                            placeholder='Github Link'
                            className='input input-info border-2 rounded-xl w-80 md:w-full mx-auto p-5'
                            value={proj.github}
                            onChange={(e) => handleChange(index, 'github', e.target.value)}
                        />
                        <input
                            type="url"
                            placeholder='Live Link'
                            className='input input-info border-2 rounded-xl w-80 md:w-full mx-auto p-5'
                            value={proj.live}
                            onChange={(e) => handleChange(index, 'live', e.target.value)}
                        />
                    </div>
                ))}

                {/* Add Project Button */}
                <button
                    type="button"
                    onClick={addNewProject}
                    className="btn btn-outline btn-info w-60 mx-auto"
                >
                    ➕ Add Another Project
                </button>

                {/* <input type="submit" value="Submit All Projects" className='btn btn-info text-white rounded-xl w-80 md:w-96 mx-auto mb-10 md:mb-0' /> */}
            </div>
        </div>
    );
};

export default Project;
