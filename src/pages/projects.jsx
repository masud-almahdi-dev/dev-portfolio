const Projects = () => {
    return (
        <section id="projects" className=' text-white min-h-screen h-max md:h-full flex md:justify-around perspective-wrapper'>
            <img src="/underwater2.jpg" alt="" className='absolute w-auto min-w-full h-full object-cover -hue-rotate-[20deg]' />
            <div className='flex flex-col h-max pb-6 lg:h-screen justify-center'>

                <h3 className='text-white z-30 m-6 px-4 py-2 backdrop-blur-lg rounded-md w-max border-2 border-white mt-10'>Projects:</h3>
                <div className='grid grid-cols-1 gap-4 container mx-auto lg:h-[60%] h-[90%] md:grid-cols-2 lg:grid-cols-3 rounded-lg justify-center items-center z-20'>

                    <div className='border-2 m-6 mb-2 aspect-video border-white backdrop-blur-lg  rounded-xl p-4 flex flex-col gap-2 md:aspect-square justify-between'>
                        <div>
                            <a target="_blank" href="https://friendly-bookworm.web.app/" className='w-max'>
                                <h2 className=' bg-yellow-100 text-yellow-800 opacity-30 hover:opacity-80 transition-all rounded-md px-4 py-2 w-full max-w-max'>YourFriendly-BookWorm</h2>
                            </a>
                            <h3 className='p-2 w-full text-xs'>https://friendly-bookworm.web.app/</h3>
                        </div>
                        <img src="/bookworm.png" alt="" className=' h-16 w-16 mx-auto my-auto rounded-full' />
                        <div className='flex flex-col gap-4'>
                            <h3 className='p-2 w-full'>Book lending and viewing site made for library management, built using React, Tailwind, Firebase, JWT, MongoDB, Express</h3>
                            <a target="_blank" href="https://friendly-bookworm.web.app/" className='w-max'><button className='border-2 border-white text-white rounded-lg px-4 py-2 w-full max-w-max hover:bg-white/10 transition-all'>View Site</button></a>
                        </div>
                    </div>

                    <div className='border-2 m-6 mb-2 aspect-video border-white backdrop-blur-lg  rounded-xl p-4 flex flex-col gap-2 md:aspect-square justify-between'>
                        <div>
                            <a target="_blank" href="https://food-brands-center.web.app/" className='w-max'>
                                <h2 className=' bg-yellow-300 transition-all text-red-600 opacity-30 hover:opacity-75 cursor-pointer rounded-md px-4 py-2 w-full max-w-max'>Food Brand Center</h2>
                            </a>
                            <h3 className='p-2 w-full text-xs'>https://food-brands-center.web.app/</h3>
                        </div>
                        <img src="https://food-brands-center.web.app/logo2.png" alt="" className=' h-20 w-20 mx-auto my-auto' />
                        <div className='flex flex-col gap-4'>
                            <h3 className='p-2 w-full'>Food Brand Center is a "Food & Beverage" related website, built using React, Tailwind, Firebase, JWT, MongoDB, Express</h3>
                            <a target="_blank" href="https://food-brands-center.web.app/" className='w-max'><button className='border-2 border-white text-white rounded-lg px-4 py-2 w-full max-w-max hover:bg-white/10 transition-all'>View Site</button></a>
                        </div>
                    </div>

                    <div className='border-2 m-6 mb-2 aspect-video border-white backdrop-blur-lg  rounded-xl p-4 flex flex-col gap-2 md:aspect-square justify-between'>
                        <div>
                            <a target="_blank" href="https://pet-hero-2023.web.app/" className='w-max'>
                                <h2 className=' opacity-30 hover:opacity-80 transition-all bg-slate-200 text-slate-700 rounded-md px-4 py-2 w-full max-w-max'>Pet Hero</h2>
                            </a>
                            <h3 className='p-2 w-full text-xs'>https://pet-hero-2023.web.app/</h3>
                        </div>
                        <img src="/pethero.svg" alt="" className=' h-20 w-20 mx-auto my-auto' />
                        <div className='flex flex-col gap-4'>
                            <h3 className='p-2 w-full'>React webapp about pet adoption and care built using firebase, jwt, tailwind, react-router</h3>
                            <a target="_blank" href="https://pet-hero-2023.web.app/" className='w-max'><button className='border-2 border-white text-white rounded-lg px-4 py-2 w-full max-w-max hover:bg-white/10 transition-all'>View Site</button></a>
                        </div>
                    </div>
                    <a target='_blank' href="https://github.com/masud-almahdi-dev" className='w-max h-min opacity-30 hover:opacity-75'><h3 className='text-white z-30 m-6 px-4 py-2 backdrop-blur-lg rounded-md w-max border-2 border-white mb-10'>See All In Github</h3></a>
                </div>

            </div>
        </section>
    );
}

export default Projects;