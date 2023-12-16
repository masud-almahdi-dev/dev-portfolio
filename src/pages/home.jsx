import { Link } from "react-scroll";

const Home = () => {
    return (
        <section id="home" className='bg-[#2E2E2E] text-white h-screen flex md:justify-around '>
            <div className='flex flex-col gap-4 xl:w-1/4 md:w-[70%] w-[85%] lg:w-1/3 p-10 lg:container md:my-40 my-52 absolute lg:relative z-20 justify-center'>
                <h3><span className='text-3xl'>Hi</span>. I am</h3>
                <div className='flex gap-2 '>
                    <img src="/name.svg" alt="Masud Al Mahdi" className='cursor-pointer' />
                    <img src="/loading.svg" alt="" className='w-10' />
                </div>
                <img src="/dever.svg" alt="Web Developer" className='' />
                <h2 className='mb-2 lg:text-xs md:w-max rounded-md p-2 backdrop-blur-lg'>"The only way to do great work is to love what you do." - Steve Jobs</h2>
                <a href="/Masud-Al-Mahdi-Resume.pdf" className='w-max' download><img src="/dxresume.svg" alt="" className='p-2 rounded-md bg-slate-600 h-8 hover:hue-roam-2 hover:saturate-50 transition-all' /></a>
                <div className='flex gap-4'>
                    <a className='w-max' target='_blank' href='https://www.facebook.com/masudalmahdidev'><img src="/fb.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                    <a className='w-max' target='_blank' href='https://twitter.com/masudalmahdidev'><img src="/tw.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                    <a className='w-max' target='_blank' href='https://www.linkedin.com/in/masudalmahdidev'><img src="/li.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                    <a className='w-max' target='_blank' href='https://github.com/masud-almahdi-dev'><img src="/gith.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                </div>
            </div>
            <div className='flex h-40 py-60 my-40 items-center'>
                <img src="/Paint.png" alt="" className='z-0 md:h-[30rem] hue-roam-4' />
                <div className='absolute lg:flex hidden flex-col max-w-md'>
                    <img src="/ritop.svg" alt="" className='z-10 mix-blend-color-dodge w-40' />
                    <h2 className=' font-bold text-4xl'>BRING YOUR IMAGINATION TO LIFE</h2>
                    <Link to="projects" smooth="true"><button className=' border-b-4 hover:border-white w-full border-transparent py-2 rounded-md'>See Projects</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Home;