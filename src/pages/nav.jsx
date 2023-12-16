import { Link } from "react-scroll";

const Navigation = () => {
    return (
        <nav className='text-text h-10 flex items-center p-2 justify-around sticky top-0 font-inter z-50'>
            <Link smooth="true" to="home"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>
                <img src="/home.svg" alt="" className='md:hidden w-6' />
                <span className='hidden md:flex'>Home</span>
            </button></Link>
            <Link smooth="true" to="techs"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>
                <img src="/coding.svg" alt="" className='md:hidden w-6' />
                <span className='hidden md:flex'>TechStack</span>
            </button></Link>
            <Link smooth="true" to="projects"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>
                <img src="/projects.svg" alt="" className='md:hidden w-6' />
                <span className='hidden md:flex'>Projects</span>
            </button></Link>
            <Link smooth="true" to="techs"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>
                <img src="/skills.svg" alt="" className='md:hidden w-6' />
                <span className='hidden md:flex'>Skills</span>
            </button></Link>
            <Link smooth="true" to="education"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>
                <img src="/book.svg" alt="" className='md:hidden w-6' />
                <span className='hidden md:flex'>Education</span>
            </button></Link>
            <Link smooth="true" to="contacts"><button className='p-2 rounded-b-lg bg-red-300/20 hover:bg-red-500/50 text-yellow-100/75 transition-all backdrop-blur-xl text-center w-max'>
                <img src="/contact.svg" alt="" className='md:hidden w-6' />
                <span className='hidden md:flex'>Contact</span>
            </button></Link>
        </nav>
    );
}

export default Navigation;