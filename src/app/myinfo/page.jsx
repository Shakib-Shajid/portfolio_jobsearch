import MyInfo from '../components/MyInfo';
import Experience from '../components/Experience';
import Project from '../components/Project';

const Page = () => {

    return (
        <div className='flex flex-col justify-center border-info rounded-2xl border-2 pt-10 md:p-20 w-96 md:w-[80%] lg:w-[50%] mx-auto'>
            <div className='flex flex-col gap-5'>
                <MyInfo />
                <Experience />
                <Project />
            </div>
            <button className='btn btn-info my-10 text-white'>Submit</button>
        </div>
    );
};

export default Page;
