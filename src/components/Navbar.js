import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocument, HiOutlineMail } from "react-icons/hi";
import { FaCoffee } from "react-icons/fa";
import logo from "../assets/sklogo.png";
import gif from "../assets/logogif.gif"
import { Link } from "react-scroll";
import { FaSquareXTwitter, FaTwitter } from "react-icons/fa6";
import { ImTwitch, ImTwitter } from "react-icons/im";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  return (
    <div className="fixed w-full h-[80px] font-bold flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <div className="-ml-1 mt-6">
        <img src={gif} alt="logo" style={{ width: "120px" }} />
      </div>

      {/* menus */}
      <ul className="hidden md:flex ">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-pink-600 hover:underline"
            // activeClass="text-pink-600 underline"
            spy={true} 
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-pink-600 hover:underline"
            // activeClass="text-pink-600 underline"
            spy={true}

          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-pink-600 hover:underline"
            // activeClass="text-pink-600 underline"
            spy={true}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hover:text-pink-600 hover:underline"
            // activeClass="text-pink-600 underline"
            spy={true}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="hover:text-pink-600 hover:underline"
            // activeClass="text-pink-600 underline"
            spy={true}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-pink-600 hover:underline"
            // activeClass="text-pink-600 underline"
            spy={true}
          >
            Contact
          </Link>
        </li>
        <div className="bmc-button-container">
          <a
            href="https://www.buymeacoffee.com/saurabhkurh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{
                height: "30px",
                width: "auto",
                "margin-top": "-3px",
                "margin-left": "10px",
              }}
            />
          </a>
        </div>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={30} /> : <FaTimes />}
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
          <Link to="blog" onClick={closeMenu} smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={closeMenu} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <div className="bmc-button-container">
          <a
            href="https://www.buymeacoffee.com/saurabhkurh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: "45px", width: "auto", "margin-top": "10px" }}
            />
          </a>
        </div>
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
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://x.com/saurabh_kurve"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter <FaSquareXTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:saurabhkurve100@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/cv/Saurabh_Kurve_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <HiOutlineDocument size={30} />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d0d30d]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://buymeacoffee.com/saurabhkurh"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              Buy me a coffee <FaCoffee size={30} className="text-black" />
            </a>
          </li> */}
        </ul>
      </div>

      {/* Mobile Social icons */}
      <div className="lg:hidden fixed bottom-0 w-full bg-[#0a192f] flex items-center justify-around py-2 -ml-4">
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
          href="https://x.com/saurabh_kurve"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} />
        </a>
        <a
          className="text-gray-300"
          href="mailto:saurabhkurve100@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineMail size={30} />
        </a>
        <a
          className="text-gray-300"
          href="/cv/Saurabh_Kurve_Resume.pdf" // Ensure this path is correct
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineDocument size={30} />
        </a>
        <a
          className="text-gray-300"
          href="https://buymeacoffee.com/saurabhkurh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCoffee size={30} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
