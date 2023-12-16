import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Projects from './pages/projects'
import Techs from './pages/techs'
import Home from './pages/home'
import { Link } from 'react-scroll'
import Navigation from './pages/nav'
import Education from './pages/education'
import Footer from './pages/footer'
import Contacts from './pages/contacts'

function App() {
  return (
    <div className=''>
      <Navigation/>
      <Home />
      <Techs />
      <Projects />
      <Education />
      <Contacts/>
      <Footer/>
      <ToastContainer />
    </div>
  )
}

export default App
