import { useState } from 'react'

function App() {
  return (
    <>
      <nav className='bg-white text-text sticky top-0 font-inter z-30'>
        Navigation
      </nav>
      <section className='bg-[#2E2E2E] text-white h-screen flex md:justify-around '>
        <div className='flex flex-col gap-2 xl:w-1/4 md:w-[70%] w-[85%] lg:w-1/3 p-10 lg:container md:my-40 my-52 absolute lg:relative z-20 justify-center floaty-4'>
          <div className='flex gap-2 '>
            <img src="/name.svg" alt="Masud Al Mahdi" className='cursor-pointer' />
            <img src="/loading.svg" alt="" className='w-10' />
          </div>
          <a href="/Resume.pdf" className='w-max' download><img src="/dxresume.svg" alt="" className='p-2 rounded-md bg-slate-600 h-8 hover:bg-blue-600 hover:saturate-50 transition-all' /></a>
          <img src="/dever.svg" alt="Web Developer" className='' />
          <h2 className='my-4 lg:text-xs md:w-max rounded-md p-2 backdrop-blur-lg'>"The only way to do great work is to love what you do." - Steve Jobs</h2>
          <div className='flex gap-4'>
            <a className='w-max' target='_blank' href='https://www.facebook.com/masudalmahdidev'><img src="/fb.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
            <a className='w-max' target='_blank' href='https://twitter.com/masudalmahdidev'><img src="/tw.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
            <a className='w-max' target='_blank' href='https://www.linkedin.com/in/masudalmahdidev'><img src="/li.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
          </div>
        </div>
        <div className='flex h-40 py-60 my-40 items-center'>
          <img src="/Paint.png" alt="" className='z-0 md:h-[30rem] hue-roam-4' />
          <div className='absolute lg:flex hidden flex-col max-w-md'>
            <img src="/ritop.svg" alt="" className='z-10 mix-blend-color-dodge w-40' />
            <h2 className=' font-bold text-4xl'>BRING YOUR IMAGINATION TO LIFE</h2>
            <button className=' border-b-4 hover:border-white border-transparent py-2 rounded-md'>See Projects</button>
          </div>
        </div>
      </section>
      <section className=' text-white h-screen flex md:justify-around perspective-wrapper'>
        <video muted loop autoPlay className="absolute w-auto min-w-full min-h-full object-cover hue-rotate-[5deg] saturate-50">
          <source src="/underwater.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='flex flex-col gap-10 xl:w-1/2 lg:w-[70%] w-[85%] p-10 xl:container h-full justify-center absolute xl:relative z-20 rotate-z-45'>
          <div className='flex gap-2 rounded-md bg-[#c8cdec77] backdrop-blur-sm hue-roam-2  w-max p-2 items-center '>
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
      <footer className='bg-slate-700 text-white h-max'>
        <div className='container mx-auto p-6'>
          Footer
        </div>
        <div className='text-center py-6 bg-slate-800'>
          ©️ copyright 2023 - <a href="https://github.com/masud-almahdi-dev">@masud-almahdi-dev</a>
        </div>
      </footer>
    </>
  )
}

export default App
