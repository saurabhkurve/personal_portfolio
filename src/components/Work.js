import React from "react";
import JobPortal from "../assets/projects/hireheaven.png";
import Todo from "../assets/projects/todo.png";
import Weather from "../assets/projects/weather.png";
import Emoji from "../assets/projects/emoji.png";
import imageDb from "../assets/projects/imagedb.png"
import ComingSoon from "../assets/projects/comingsoon.png"

const Work = () => {
  return (  
    <div id="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] pt-36">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work.</p>
        </div>
        {/* Container  */}
        <div
          className="grid sm:grid-cols-2  md:grid-cols-3 gap-4"
        >
            {/* Grid items  */}
          <div style={{ backgroundImage: `url(${JobPortal})` }} className="shadow-lg shadown-[#044c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect  */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="ml-5 text-2xl font-bold w-full   text-white tracking-wider">HireHeaven</span>
              <div className="pt-8 text-center">
                <a href="https://hireheaven.netlify.app" target="_blank"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>

                <a href="https://github.com/saurabhkurve/HireHeaven-A-Job-Portal" target="_blank"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${Todo})` }} className="shadow-lg shadown-[#044c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect  */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="ml-5 text-2xl font-bold w-full   text-white tracking-wider">Todo Application</span>
              <div className="pt-8 text-center">
                <a href="https://todolistbysk.netlify.app/" target="_blank"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>

                <a href="https://github.com/saurabhkurve/Todo-react-app" target="_blank"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${Weather})` }} className="shadow-lg shadown-[#044c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect  */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" ml-5 text-2xl font-bold w-full   text-white tracking-wider">Weather Application</span>
              <div className="pt-8 text-center">
                <a href="https://weather-app-tau-eight-86.vercel.app/" target="_blank"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>

                <a href="https://github.com/saurabhkurve/Weather_App" target="_blank"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${Emoji})` }} className="shadow-lg shadown-[#044c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect  */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="ml-5 text-2xl font-bold w-full   text-white tracking-wider">Emoji Game</span>
              <div className="pt-8 text-center">
                <a href="https://emoji-game-pink.vercel.app/" target="_blank"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>

                <a href="https://github.com/saurabhkurve/Emoji_Game" target="_blank"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${imageDb})` }} className="shadow-lg shadown-[#044c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect  */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="ml-10 text-2xl font-bold w-full   text-white tracking-wider">MovieDb</span>
              <div className="pt-8 text-center">
                <a href="https://movie-db-rho-navy.vercel.app/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>

                <a href="https://github.com/saurabhkurve/MovieDb" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${ComingSoon})` }} className="shadow-lg shadown-[#044c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect  */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold w-full   text-white tracking-wider">Coming Soon</span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>

                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          

          
        </div>
      </div>
    </div>
  );
};

export default Work;
