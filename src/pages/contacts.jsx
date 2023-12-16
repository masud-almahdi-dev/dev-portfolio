import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j55gxi8', 'template_zyk08wv', form.current, 'wos2PEhAd3mh4KJqx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contacts" className='bg-[#d8d8d8] text-black invert p-6 min-h-screen h-max flex md:justify-around flex-col'>
            <div className='flex justify-center flex-col lg:flex-row h-max items-center gap-4'>
                <div className="flex flex-col gap-4 xl:w-1/3 md:w-[70%] w-[85%] lg:w-1/2 p-10 lg:container z-20 justify-center h-full bg-white/50 rounded-lg">
                    <div className='flex gap-10 items-start'>
                        <div className="flex flex-col gap-6 justify-between h-full">
                            <div className='flex flex-col gap-2'>
                                <img src="/contact-me.svg" alt="Contact Me" className='cursor-pointer w-36' />
                                <h2 className="text-2xl">Masud Al Mahdi <span className='text-sm'>, Web Developer <br /> (Dhaka, Bangladesh) <br />(+880) 177-9517-924</span></h2>
                            </div>
                            <div className='flex gap-4 invert'>
                                <a className='w-max' target='_blank' href='https://www.facebook.com/masudalmahdidev'><img src="/fb.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                                <a className='w-max' target='_blank' href='https://twitter.com/masudalmahdidev'><img src="/tw.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                                <a className='w-max' target='_blank' href='https://www.linkedin.com/in/masudalmahdidev'><img src="/li.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                                <a className='w-max' target='_blank' href='https://github.com/masud-almahdi-dev'><img src="/gith.svg" alt="" className='saturate-0 hover:saturate-100 transition-all duration-500' /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 xl:w-1/3 md:w-[70%] w-[85%] lg:w-1/2 p-10 lg:container z-20 justify-center bg-white/50 rounded-lg">
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
                        <div className='flex justify-around flex-col'>
                            <label>Name</label>
                            <input className=' w-full p-2 rounded-md border-2 border-orange-700' type="text" name="from_name" />
                        </div>
                        <div className='flex justify-around flex-col'>
                            <label>Email</label>
                            <input className=' w-full p-2 rounded-md border-2 border-orange-700' type="email" name="from_email" />
                        </div>
                        <div className='flex justify-around flex-col'>
                            <label>Message</label>
                            <textarea className=' w-full p-2 rounded-md border-2 border-orange-700' name="message" />
                        </div>
                        <input className='bg-white hover:bg-orange-700 hover:text-white p-2 rounded-md transition-all cursor-pointer' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contacts;