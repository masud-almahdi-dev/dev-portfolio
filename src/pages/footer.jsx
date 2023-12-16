import { Link } from "react-scroll";

const Footer = () => {
    return (

        <footer className='bg-slate-700 text-white h-max saturate-50'>
            <div className='container mx-auto p-6 flex flex-col md:flex-row items-center gap-6 justify-between'>
                <div className="flex flex-col items-center md:items-start gap-6">
                    <Link smooth="true" to="home"><button className='p-2 rounded-lg flex bg-white/20 saturate-0 hover:saturate-100 hover:bg-green-600 gap-2 items-center text-white transition-all text-center w-max'>
                        <img src="/home.svg" alt="" className='w-6' />
                        <span className='flex'>Home</span>
                    </button></Link>
                    <Link smooth="true" to="techs"><button className='p-2 rounded-lg flex bg-white/20 saturate-0 hover:saturate-100 hover:bg-green-600 gap-2 items-center text-white transition-all text-center w-max'>
                        <img src="/coding.svg" alt="" className='w-6' />
                        <span className='flex'>TechStack</span>
                    </button></Link>
                    <Link smooth="true" to="projects"><button className='p-2 rounded-lg flex bg-white/20 saturate-0 hover:saturate-100 hover:bg-green-600 gap-2 items-center text-white transition-all text-center w-max'>
                        <img src="/projects.svg" alt="" className='w-6' />
                        <span className='flex'>Projects</span>
                    </button></Link>
                </div>
                <div className="flex flex-col items-center md:items-start gap-6">
                    <Link smooth="true" to="techs"><button className='p-2 rounded-lg flex bg-white/20 saturate-0 hover:saturate-100 hover:bg-green-600 gap-2 items-center text-white transition-all text-center w-max'>
                        <img src="/skills.svg" alt="" className='w-6' />
                        <span className='flex'>Skills</span>
                    </button></Link>
                    <Link smooth="true" to="education"><button className='p-2 rounded-lg flex bg-white/20 saturate-0 hover:saturate-100 hover:bg-green-600 gap-2 items-center text-white transition-all text-center w-max'>
                        <img src="/book.svg" alt="" className='w-6' />
                        <span className='flex'>Education</span>
                    </button></Link>
                    <Link smooth="true" to="home"><button className='p-2 rounded-lg flex bg-white/20 saturate-0 hover:saturate-100 hover:bg-green-600 gap-2 items-center text-white transition-all text-center w-max'>
                        <img src="/contact.svg" alt="" className='w-6' />
                        <span className='flex'>Contact</span>
                    </button></Link>
                </div>
                <div className='flex gap-4'>
                    <a className='w-max' target='_blank' href='https://www.facebook.com/masudalmahdidev'><img src="/fb.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                    <a className='w-max' target='_blank' href='https://twitter.com/masudalmahdidev'><img src="/tw.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                    <a className='w-max' target='_blank' href='https://www.linkedin.com/in/masudalmahdidev'><img src="/li.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                    <a className='w-max' target='_blank' href='https://github.com/masud-almahdi-dev'><img src="/gith.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                </div>
            </div>
            <div className='text-center py-6 bg-slate-800 text-xs'>
                ©️ copyright 2023 - <a href="https://github.com/masud-almahdi-dev">@masud-almahdi-dev</a>
            </div>
        </footer>
    );
}

export default Footer;