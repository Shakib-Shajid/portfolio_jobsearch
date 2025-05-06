'use client';
import React, { useState } from 'react';
import cseskills from '@/../public/cseskills.json';

const Page = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value && !selectedSkills.includes(value)) {
      setSelectedSkills([...selectedSkills, value]);
    }
    e.target.value = "Pick required skills"; // Reset the select
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  return (
    <div className='flex w-96 md:w-full mx-auto'>
      <div className='flex flex-col gap-5 mx-auto border-info rounded-2xl border-2 md:p-20'>
        <h3 className='text-3xl font-bold text-center text-info'>Hiring Form</h3>
        <input type="text" className='input input-info border-2 rounded-xl w-96 mx-auto p-5' placeholder='Company Name' />
        <input type="text" className='input input-info border-2 rounded-xl w-96 mx-auto p-5' placeholder='Position Name' />
        <input type="text" className='input input-info border-2 rounded-xl w-96 mx-auto p-5' placeholder='Requirements' />

        <select onChange={handleSelect} defaultValue="Pick required skills" className="select input-info border-2 rounded-xl w-96 mx-auto">
          <option disabled>Pick required skills</option>
          {cseskills.map((cseskill, index) => (
            <option key={index} value={cseskill}>{cseskill}</option>
          ))}
        </select>

        {/* Selected Skills Display */}
        <div className="flex flex-wrap gap-2 w-96 mx-auto">
          {selectedSkills.map((skill, index) => (
            <div key={index} className="badge badge-outline badge-info p-3 cursor-pointer hover:badge-error" onClick={() => removeSkill(skill)}>
              {skill} <span className='text-xs'>✕</span>
            </div>
          ))}
        </div>

        <input type="submit" className='btn btn-info text-white rounded-xl' />
      </div>
    </div>
  );
};

export default Page;
