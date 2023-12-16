import { Link } from "react-scroll";

const Education = () => {
    return (
        <section id="education" className='bg-[#2E2E2E] text-white py-6 min-h-screen h-max flex md:justify-around '>
            <div className='flex justify-center flex-col lg:flex-row-reverse'>
                <div className="flex flex-col gap-4 xl:w-1/3 md:w-[70%] w-[85%] lg:w-1/2 p-10 lg:container z-20 justify-center">
                    <div className='flex gap-10 items-start'>
                        <div className="flex flex-col gap-2">
                            <img src="/name.svg" alt="Masud Al Mahdi" className='cursor-pointer' />
                            <h2 className="text-2xl">Web Developer</h2>
                            <h4 className="text-sm">MERN, Firebase</h4>
                        </div>
                        <img src="/faceimg.jpg" alt="" className='z-0 saturate-50 w-36 h-36 border-[1rem] border-slate-400 ' />
                    </div>
                    <h3 className="text-yellow-300">About Section: </h3>
                    <p className="text-xs mb-10">Hi I am front-end developer interested in working with React, HTML, NodeJs & more of related technologies.</p>
                    <p className="text-sm mb-10"><span className="bg-yellow-300 text-yellow-800 rounded-sm px-1">Goal:</span> Creating Web Applications & Softwares that puts the need of clients and developers together and build a relationship with experienced developers to further my understanding of the ecosystems.</p>
                </div>
                <div className="flex flex-col gap-4 xl:w-1/3 md:w-[70%] w-[85%] lg:w-1/2 p-10 lg:container z-20 justify-center">
                    <h3 className="bg-yellow-300 text-yellow-800 rounded-sm px-1">Educational Qualifiations: </h3>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2 ">
                            <h2 className="">Secondary School Certificate (SSC) <span className="text-xs text-yellow-300">2015</span></h2>
                            <h4 className="text-sm"><span className="bg-pink-600 rounded-sm px-1">From:</span> Madrasah-E-Baitul Mamur, Mirpur, Dhaka</h4>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h2 className="">Higher Secondary Certificate (HSC) <span className="text-xs text-yellow-300">2017</span></h2>
                            <h4 className="text-sm"><span className="bg-purple-500 rounded-sm px-1">From:</span> Mirpur University College, Dhaka</h4>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h2 className="">BSc. in Computer Science & Engineering  <span className="text-xs text-yellow-300">(2018-dropped out)</span></h2>
                            <h4 className="text-sm"><span className="bg-green-600 rounded-sm px-1">From:</span> Green University of Bangladesh</h4>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h2 className="">Programming Hero Web Development Course  <span className="text-xs text-yellow-300">(2023-current)</span></h2>
                            <h4 className="text-sm"><span className="bg-orange-600 rounded-sm px-1">From:</span> Programming-Hero</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;