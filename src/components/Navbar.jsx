import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItem = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a Job" },
  ];

  return (
    <header className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <nav className=' flex justify-between items-center py-6'>
        <a href="" className="flex  gap-2 text-black items-center text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
            <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4" />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>
          <span>JobPortal</span>
        </a>
        <ul className='md:flex hidden gap-12 text-2xl p-4'>
          {navItem.map(({ path, title }) => (
            <li key={path} className='text-base text-primary'>
              <NavLink 
                to={path}
                className={({ isActive }) => isActive ? "active" : "" }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
          <Link to="/login" className=' py-2 px-5 border rounded'>log in</Link>
          <Link to="/sign-up" className='py-2 px-5 rounded bg-blue text-white'>Sign up</Link>
        </div>
        <div className='md:hidden block'>
          <button onClick={handleMenuToggler }>
          {
            isMenuOpen ? <FaXmark className=' w-5 he5 text-primary'/> :   <FaBarsStaggered className=' w-5 he5 text-primary'/>
          }
          </button>
        </div>
      </nav>
      <div className={`px-4 bg-black rounded-sm py-5 ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
        {navItem.map(({ path, title }) => (
            <li key={path} className='text-base text-white first:text-white py-1'>
              <NavLink 
                to={path}
                className={({ isActive }) => isActive ? "active" : "" }
              >
                {title}
              </NavLink>
            </li>
          ))}
         <l className="text-white py-1 boreer berder-white"><Link to="/login" >log in</Link></l>   
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
