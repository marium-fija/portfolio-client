import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialBar = () => {
    return (
        <div>
            <div className="fixed left-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
           {/* GitHub */}
            <a
              href="https://github.com/marium-fija"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-cyan-300 text-white p-2 rounded-full transition-all duration-300"
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
    );
};

export default SocialBar;