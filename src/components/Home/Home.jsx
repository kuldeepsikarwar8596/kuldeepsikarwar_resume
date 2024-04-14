import React from 'react'
import { Link } from 'react-router-dom'; 
import About from '../about/About';
import Contact from '../Contact/Contact';
import Skill from './Skill';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-[90%] backdrop-blur-md bg-white/40">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-20 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl ">
                            KULDEEP SIKARWAR <br />
                            <span className=" text-2xl md:text-3xl">Front-end Web Developer</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-500 rounded-lg hover:opacity-75"
                            to="https://drive.google.com/file/d/166W1jSWVUeRbdvVRvvk4viMTu8tWst_O/view?usp=sharing"
                        >
                             
                            <img src="download.svg" alt="" />
                            &nbsp; Download Resume
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 hover:scale-110 transition-all" src="user.png" alt="image1" />
                </div>
            </aside>              
        <Skill/>
         
        <About />
 
        <Contact />
             
        </div>
    );
}