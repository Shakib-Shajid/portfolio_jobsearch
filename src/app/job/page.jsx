import React from 'react';

const page = () => {

    const companydata = [
        {
            "id": 1,
            "name": "ABCD",
            "position": "Junior Engineer",
            "skills": ["Next.js", "React", "PHP", "TypeScript", "Tailwind", "Redux"],
            "requirements": [
                "Bachelor's degree in Computer Science",
                "0-1 year of experience",
                "Strong understanding of JavaScript and React"
            ]
        },
        {
            "id": 2,
            "name": "TechNova",
            "position": "Frontend Developer",
            "skills": ["React", "Tailwind", "JavaScript", "Redux", "HTML", "CSS"],
            "requirements": [
                "2+ years of frontend experience",
                "Portfolio of responsive web designs",
                "Strong knowledge of React and Redux"
            ]
        },
        {
            "id": 3,
            "name": "CodeCraft",
            "position": "Backend Developer",
            "skills": ["Node.js", "Express", "MongoDB", "PHP", "TypeScript"],
            "requirements": [
                "Experience in RESTful APIs",
                "Database schema design knowledge",
                "Good understanding of server-side frameworks"
            ]
        },
        {
            "id": 4,
            "name": "InnovateSoft",
            "position": "Full Stack Developer",
            "skills": ["Next.js", "React", "Node.js", "Express", "MySQL", "Tailwind"],
            "requirements": [
                "3+ years as full stack developer",
                "Knowledge of modern JS frameworks",
                "Hands-on experience in both frontend and backend"
            ]
        },
        {
            "id": 5,
            "name": "DevSphere",
            "position": "UI/UX Engineer",
            "skills": ["Figma", "Tailwind", "JavaScript", "React", "HTML", "CSS"],
            "requirements": [
                "Design portfolio required",
                "Experience with Figma or Adobe XD",
                "Good sense of modern UI principles"
            ]
        },
        {
            "id": 6,
            "name": "ByteLogic",
            "position": "DevOps Engineer",
            "skills": ["AWS", "Docker", "Jenkins", "Linux", "Node.js", "Bash"],
            "requirements": [
                "Familiar with CI/CD pipelines",
                "AWS certification is a plus",
                "Experience in production deployments"
            ]
        },
        {
            "id": 7,
            "name": "AlphaEdge",
            "position": "Mobile App Developer",
            "skills": ["React Native", "TypeScript", "Redux", "Expo", "Firebase"],
            "requirements": [
                "Experience in cross-platform development",
                "Published at least one app",
                "Strong understanding of mobile architecture"
            ]
        },
        {
            "id": 8,
            "name": "CyberNetics",
            "position": "Software Tester",
            "skills": ["Selenium", "Cypress", "Jest", "Mocha", "JavaScript"],
            "requirements": [
                "Understanding of testing frameworks",
                "Automation experience preferred",
                "Attention to detail"
            ]
        },
        {
            "id": 9,
            "name": "StackGen",
            "position": "Data Engineer",
            "skills": ["Python", "SQL", "Airflow", "AWS", "ETL", "MongoDB"],
            "requirements": [
                "Experience with data pipelines",
                "Understanding of ETL workflows",
                "Working with big data tools is a plus"
            ]
        },
        {
            "id": 10,
            "name": "NeoCloud",
            "position": "Cloud Engineer",
            "skills": ["AWS", "Azure", "Terraform", "Docker", "Kubernetes"],
            "requirements": [
                "Cloud platform certification preferred",
                "Experience with infrastructure as code",
                "Understanding of networking & security"
            ]
        }
    ]


    return (
        <div>
            <h3 className='text-center font-bold text-2xl my-10'>Find Jobs</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                {
                    companydata.map(data =>
                        <div className="card w-[90%] mx-auto bg-base-100 card-xl border-blue-600 border-2 shadow-xl" key={data.id}>
                            <div className="card-body">
                                <h2 className="card-title text-blue-500">{data.position}</h2>
                                <p className='text-gray-500 text-lg'>{data.name}</p>
                                <p className='font-bold text-base'>Requirements:{data.requirements.map((require, index)=>(
                                    <span className='block font-normal' key={index}>{require}</span>
                                ))}</p>
                                <p className='text-gray-500'>
                                {data.skills.map((skill, index) => (
                                    <span key={index} className='border rounded-2xl px-2 py-1 mr-1 inline-flex text-sm'>
                                        {skill}
                                    </span>
                                ))}
                                </p>
                                <div className="justify-end card-actions">
                                    <button className="btn btn-info text-white">Apply</button>
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