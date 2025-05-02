import React from 'react';

const page = () => {

  const companydata = [
    {
      "id": 1,
      "name": "SkyBridge Technologies",
      "position": "Junior Engineer",
      "skills": ["Next.js", "React", "PHP", "TypeScript", "Tailwind", "Redux"],
      "requirements": [
        "Bachelor's degree in Computer Science",
        "0-1 year of experience",
        "Strong understanding of JavaScript and React",
        "Good communication skills",
        "Eagerness to learn new technologies"
      ]
    },
    {
      "id": 2,
      "name": "QuantumPixel Labs",
      "position": "Frontend Developer",
      "skills": ["React", "Tailwind", "JavaScript", "Redux", "HTML", "CSS"],
      "requirements": [
        "2+ years of frontend experience",
        "Portfolio of responsive web designs",
        "Strong knowledge of React and Redux",
        "Understanding of browser compatibility issues",
        "Ability to work in a team environment"
      ]
    },
    {
      "id": 3,
      "name": "CoreStack Solutions",
      "position": "Backend Developer",
      "skills": ["Node.js", "Express", "MongoDB", "PHP", "TypeScript"],
      "requirements": [
        "Experience in RESTful APIs",
        "Database schema design knowledge",
        "Good understanding of server-side frameworks",
        "Experience with version control (Git)",
        "Problem-solving and debugging skills"
      ]
    },
    {
      "id": 4,
      "name": "NextVerse Tech",
      "position": "Full Stack Developer",
      "skills": ["Next.js", "React", "Node.js", "Express", "MySQL", "Tailwind"],
      "requirements": [
        "3+ years as full stack developer",
        "Knowledge of modern JS frameworks",
        "Hands-on experience in both frontend and backend",
        "Experience with RESTful APIs and JSON",
        "Ability to manage databases efficiently"
      ]
    },
    {
      "id": 5,
      "name": "PixelLoop Studio",
      "position": "UI/UX Engineer",
      "skills": ["Figma", "Tailwind", "JavaScript", "React", "HTML", "CSS"],
      "requirements": [
        "Design portfolio required",
        "Experience with Figma or Adobe XD",
        "Good sense of modern UI principles",
        "Knowledge of accessibility standards",
        "Collaborative design experience"
      ]
    },
    {
      "id": 6,
      "name": "CloudMorph Labs",
      "position": "DevOps Engineer",
      "skills": ["AWS", "Docker", "Jenkins", "Linux", "Node.js", "Bash"],
      "requirements": [
        "Familiar with CI/CD pipelines",
        "AWS certification is a plus",
        "Experience in production deployments",
        "Strong scripting skills in Bash or Python",
        "Knowledge of monitoring tools like Prometheus"
      ]
    },
    {
      "id": 7,
      "name": "AppNinja Creations",
      "position": "Mobile App Developer",
      "skills": ["React Native", "TypeScript", "Redux", "Expo", "Firebase"],
      "requirements": [
        "Experience in cross-platform development",
        "Published at least one app",
        "Strong understanding of mobile architecture",
        "Familiarity with Google Play and App Store",
        "Ability to write clean and reusable code"
      ]
    },
    {
      "id": 8,
      "name": "TestHive Systems",
      "position": "Software Tester",
      "skills": ["Selenium", "Cypress", "Jest", "Mocha", "JavaScript"],
      "requirements": [
        "Understanding of testing frameworks",
        "Automation experience preferred",
        "Attention to detail",
        "Basic knowledge of development workflows",
        "Ability to write and execute test cases"
      ]
    },
    {
      "id": 9,
      "name": "DataNest Analytics",
      "position": "Data Engineer",
      "skills": ["Python", "SQL", "Airflow", "AWS", "ETL", "MongoDB"],
      "requirements": [
        "Experience with data pipelines",
        "Understanding of ETL workflows",
        "Working with big data tools is a plus",
        "Strong knowledge of data warehousing",
        "Proficiency in SQL and Python"
      ]
    },
    {
      "id": 10,
      "name": "CloudForge Networks",
      "position": "Cloud Engineer",
      "skills": ["AWS", "Azure", "Terraform", "Docker", "Kubernetes"],
      "requirements": [
        "Cloud platform certification preferred",
        "Experience with infrastructure as code",
        "Understanding of networking & security",
        "Familiarity with Kubernetes architecture",
        "Experience in hybrid cloud environments"
      ]
    }
  ]



  return (
    <div>
      <h3 className='text-center font-bold text-2xl my-10'>Find Jobs</h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

        {
          companydata.map(data =>
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