import React from 'react';
import hiring from "../../../public/hiring.json"

const page = () => {

  return (
    <div>
      <h3 className='text-center font-bold text-2xl my-10'>Find Jobs</h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

        {
          hiring.map(data =>
            <div className="card w-[90%] mx-auto bg-base-100 card-xl border-blue-600 border-2 shadow-xl relative" key={data.id}>
              <div className="card-body">
                {/* For TSX uncomment the commented types below */}
                <p className='absolute right-10 md:right-4 top-4 text-xs'>Matching</p>
                <div className="radial-progress text-info absolute right-8" style={{ "--value": 70 } /* as React.CSSProperties */}
                  aria-valuenow={70} role="progressbar">70%</div>
                <h2 className="card-title text-blue-500">{data.position}</h2>
                <p className='text-gray-500 text-lg'>{data.name}</p>
                <p className='font-bold text-base text-rose-600'>Requirements:{data.requirements.map((require, index) => (
                  <span className='block font-normal text-black my-2' key={index}>- {require}</span>
                ))}</p>
                <p className=' my-2'><span className='block mb-2 font-bold text-green-500'>Skills:</span>
                  {data.skills.map((skill, index) => (
                    <span key={index} className='text-gray-500 border rounded-2xl px-2 py-1 mr-1 inline-flex text-sm my-2 md:my-0 hover:bg-accent hover:text-white'>
                      {skill}
                    </span>
                  ))}
                </p>
                <div className="justify-end card-actions mt-2">
                  <button className="btn btn-info text-white w-full mx-auto">Apply</button>
                </div>
              </div>
            </div>
          )
        }




      </div>

    </div>
  );
};

export default page;