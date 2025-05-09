

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import BasicInfo from '../components/BasicInfo';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Swal from 'sweetalert2';

const Page = () => {
    const [step, setStep] = useState(1); // 1 = BasicInfo, 2 = Experience, 3 = Project
    const router = useRouter(); // Initialize useRouter

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handleSubmit = () => {
        if (step === 3) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "All Information Saved",
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                router.push('/'); // Redirect to home page after submission
            });
        } else {
            handleNext(); // Go to next step if not final
        }
    };

    return (
        <div className='flex flex-col justify-center border-info rounded-2xl border-2 pt-10 md:p-20 w-96 md:w-[80%] lg:w-[50%] mx-auto'>
            {/* Steps Indicator */}
            <ul className="steps mb-10 w-full">
                <li className={`step ${step >= 1 ? 'step-primary' : ''}`}>Basic Info</li>
                <li className={`step ${step >= 2 ? 'step-primary' : ''}`}>Experience</li>
                <li className={`step ${step >= 3 ? 'step-primary' : ''}`}>Project</li>
            </ul>

            <div className='flex flex-col gap-5'>
                {step === 1 && <BasicInfo />}
                {step === 2 && <Experience />}
                {step === 3 && <Project />}
            </div>

            <button className='btn btn-info my-10 text-white w-80 mx-auto md:w-full' onClick={handleSubmit}>
                {step === 3 ? 'Submit' : 'Next'}
            </button>
        </div>
    );
};

export default Page;
