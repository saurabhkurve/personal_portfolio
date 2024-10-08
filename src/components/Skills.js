import React from "react";
import JavaScript from "../assets/javascript.png";
import Github from "../assets/github.png";
import react from "../assets/react.png";
import Sql from "../assets/sql.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Java from "../assets/java.png";
import Spring from "../assets/spring.png";
import Hibernate from "../assets/hibernate.png";
import Tailwind from "../assets/tailwind.png";
import Mongodb from "../assets/mongo.png";
import Postman from "../assets/postman.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-16">
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 ">These are technologies I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="Javascript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Sql} alt="Sql icon" />
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongodb} alt="MongoDB icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Spring} alt="Spring icon" />
            <p className="my-4">Spring</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Hibernate}
              alt="Hibernate icon"
            />
            <p className="my-4">Hibernate</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Postman}
              alt="Postman icon"
            />
            <p className="my-4">Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
