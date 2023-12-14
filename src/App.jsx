import { useState } from 'react'
import Projects from './pages/projects'
import Techs from './pages/techs'
import Home from './pages/home'
import { Link } from 'react-scroll'

function App() {
  return (
    <div className='desat-roam-4'>
      <nav className='text-text h-10 flex items-center p-2 justify-around sticky top-0 font-inter z-50'>
        <Link smooth="true" to="home"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>Home</button></Link>
        <Link smooth="true" to="techs"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>TechStack</button></Link>
        <Link smooth="true" to="projects"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>Projects</button></Link>
        <Link smooth="true" to="home"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>Skills</button></Link>
        <Link smooth="true" to="home"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>Education</button></Link>
        <Link smooth="true" to="home"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>Contact</button></Link>
      </nav>
      <Home/>
      <Techs/>
      <Projects/>
      <footer className='bg-slate-700 text-white h-max brightness-roam-4'>
        <div className='container mx-auto p-6'>
          Footer
        </div>
        <div className='text-center py-6 bg-slate-800'>
          ©️ copyright 2023 - <a href="https://github.com/masud-almahdi-dev">@masud-almahdi-dev</a>
        </div>
      </footer>
    </div>
  )
}

export default App
