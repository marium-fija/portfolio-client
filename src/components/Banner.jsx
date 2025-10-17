import React from 'react';
import Lottie from "lottie-react";
import heroAnimation from '../assets/hero.lottie.json';
import { ImArrowUpRight2 } from "react-icons/im";
import { ImDownload } from "react-icons/im";

const Banner = () => {
    return (
        <div>
            <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-base-100">
      {/* Left side text */}
      <div className="max-w-lg pl-10 space-y-4">
        <p> Hello my name is --</p>
        <h3 className='text-3xl font-semibold text-cyan-300'>Marium Fija</h3>
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-primary">My Portfolio</span>
        </h1>
        <p className="text-lg text-gray-300">
          I’m a passionate front-end  web developer building modern and responsive websites.
        </p>
        <div className='flex gap-4'>
          <button className="btn btn-primary  mt-4">view Resume <ImArrowUpRight2 /></button>
        <button className="btn btn-primary  mt-4">Download Resume <ImDownload size={17}/></button>
        </div>
      </div>

      {/* Right side animation */}
      <div className="w-md mx-auto  mt-10 md:mt-0">
        <Lottie animationData={heroAnimation} loop={true} />
      </div>
    </section>
        </div>
    );
};

export default Banner;