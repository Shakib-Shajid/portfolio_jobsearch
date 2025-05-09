import MyInfo from '../components/MyInfo';
import Experience from '../components/Experience';
import Project from '../components/Project';

const Page = () => {
 
    return (
        <div className='flex w-full'>
            <div className='flex flex-col gap-5 mx-auto border-info rounded-2xl border-2 pt-10 md:p-20 w-96 md:w-[80%] lg:w-[50%]'>
                <MyInfo />
                <Experience />
                <Project />
            </div>
        </div>
    );
};

export default Page;
