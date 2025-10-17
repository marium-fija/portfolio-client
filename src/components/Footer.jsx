import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
   <footer className="bg-[#0b0c10] text-gray-300 pt-10 pb-5">
      <div className="container mx-auto px-3">
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between px-10">
          <h2 className="text-2xl font-bold ml-8 text-[#B1E1FF] nav-title">Marium <span className='text-[#F2AEBB] nav-title'>Fija</span></h2>
          <p className="text-gray-500 text-sm">
            © All Rights Reserved 2025 | Marium Fija
          </p>

          <div className="flex gap-4 text-gray-400 mt-3 md:mt-0 mr-10">

            {/* GitHub */}
      <a
        href="https://github.com/marium-fija"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-cyan-300 text-white p-2 rounded-full transition-all duration-300"
        title="GitHub"
      >
        <FaGithub className='hover:bg-cyan-300 cursor-pointer' size={20} />
      </a>
             {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/marium-fija/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-cyan-300 text-white p-2 rounded-full transition-all duration-300"
        title="LinkedIn"
      >
        <CiLinkedin className='hover:bg-cyan-300 cursor-pointer' size={25} />
      </a>
            {/* Facebook */}
      <a
        href="https://www.facebook.com/marium.fija"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-cyan-300 text-white p-2 rounded-full transition-all duration-300"
        title="Facebook"
      >
        <FaFacebook className='hover:bg-cyan-300 cursor-pointer' size={20} />
      </a>
      {/* instagram */}
      <a
        href="https://www.instagram.com/marium_fija/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-cyan-300 text-white p-2 rounded-full transition-all duration-300"
        title="Instagram"
      >
        <FaInstagram className='hover:bg-cyan-300 cursor-pointer' size={25} />
      </a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;