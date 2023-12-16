const Techs = () => {
    return (
        <section id="techs" className=' text-white h-screen flex md:justify-around perspective-wrapper desat-roam-4'>
            <video muted loop autoPlay className="absolute w-auto min-w-full h-full object-cover hue-rotate-[5deg] saturate-50 ">
                <source src="/underwater.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='flex flex-col gap-10 xl:w-1/2 lg:w-[70%] w-[85%] p-10 xl:container h-full justify-center absolute xl:relative z-20 '>
                <div className='flex gap-2 rounded-md bg-[#47495377] backdrop-blur-sm w-max p-2 items-center '>
                    <img src="/techs.svg" alt="Masud Al Mahdi" className='cursor-pointer drop-shadow-[0_4px_4px_rgba(25,0,100,0.5)] ' />
                    <img src="/flusk.svg" alt="" className='cursor-pointer drop-shadow-[0_4px_4px_rgba(25,0,100,0.5)] w-10' />
                </div>
                <div className='flex flex-col gap-4 md:gap-10 md:flex-row bg-[#c8cdec77] backdrop-blur-md md:items-center p-10 rounded-md md:rounded-xl '>
                    <img src="/techsdet.svg" alt="techs" className='w-[75%]' />
                    <img src="/techsdet5.svg" alt="techs" className='w-1 h-1/2 hidden md:flex' />
                    <img src="/techsdet2.svg" alt="techs" className='w-[75%]' />
                </div>
            </div>
            <div className='xl:flex h-40 py-60 my-40 items-center hidden '>
                <img src="/ocean.jpg" alt="" className='z-0 md:h-[30rem] rounded-xl mix-blend-screen ' />
                <div className='absolute lg:flex hidden flex-col max-w-md p-6'>
                    <img src="/ritop.svg" alt="" className='z-10 mix-blend-color-dodge w-40' />
                    <h2 className=' font-bold text-4xl text-red-400 mix-blend-multiply '>PUT your STARTUP on a PEDESTAL!</h2>
                    <button className='w-max px-4 py-2 text-black  bg-[#00ffff77] hover:bg-[#00ff0077] floaty-2 mix-blend-hard-light rounded-md transition-all mt-2'>Home</button>
                </div>
            </div>
        </section>
    );
}

export default Techs;