import React from 'react';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { NavLink } from 'react-router';

const Navbar = () => {
     const links =
     [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact Us" },
     ]
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="ml-5  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-5 py-2 text-sm font-medium transition ${
                  isActive ? " border border-sky-400 rounded-full bg-[#5DEBD7]  text-[#F2AEBB]" : "text-white hover:text-[#F2AEBB]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
      </ul>
    </div>
    <p className="text-2xl font-bold ml-8 text-[#B1E1FF] nav-title">Marium <span className='text-[#F2AEBB] nav-title'>Fija</span></p>
  </div>
  <div className="navbar-end mr-20 hidden lg:flex">
    <ul className="menu menu-horizontal">
        {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-5 py-2 text-sm font-medium transition ${
                  isActive ? " border border-sky-400 rounded-full bg-[#5DEBD7]  text-[#F2AEBB]" : "text-white hover:text-[#F2AEBB]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

    </ul>
  </div>
</div>
</div>
    );
};

export default Navbar;