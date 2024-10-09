import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocument, HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo2.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  return (
    <div className="fixed w-full h-[80px] font-bold flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="-ml-7">
        <img src={logo} alt="logo" style={{ width: "140px" }} />
      </div>

      {/* menus */}
      <ul className="hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobilemenu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] font-bold flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={closeMenu} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={closeMenu} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={closeMenu} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={closeMenu} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={closeMenu} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/saurabhkurve/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/saurabhkurve"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:saurabhkuurve100@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/cv/Saurabh_Kurve_Resume.pdf" // Update this path to the actual location of your resume
              target="_blank" // This will open the resume in a new tab
              rel="noopener noreferrer" // This is a security measure when using target="_blank"
            >
              Resume <HiOutlineDocument size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Social icons */}
      <div className="lg:hidden fixed bottom-0 w-full bg-[#0a192f] flex justify-around py-2">
        <a
          className="text-gray-300"
          href="https://www.linkedin.com/in/saurabhkurve/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          className="text-gray-300"
          href="https://github.com/saurabhkurve"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          className="text-gray-300"
          href="mailto:saurabhkuurve100@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineMail size={30} />
        </a>
        <a
          className="text-gray-300"
          href="/assets/cv/Saurabh_Kurve_Resume.pdf" // Ensure this path is correct
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineDocument size={30} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
