import React from "react";
import MernStack from "../assets/mernstack.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import Tailwind from "../assets/Tailwind Css.png";
import PHP from "../assets/PHP.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import SQL from "../assets/SQL.png";
import Vite from "../assets/Vite.png";
import Express from "../assets/Express.png";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Kar Hin
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              I like to learn and explore new things, I like to spend all my
              time on what I like to do !
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  I started my journey in web development with a passion for
                  creating intuitive and scalable applications. With proficiency
                  in the MERN stack (MongoDB, Express.js, React, and Node.js), I
                  have built Projects such as a Fall Guys , Authentication
                  Systeml, and so on. My projects demonstrate my ability to
                  integrate poweful backend solutions with sleek, user-friendly
                  frontend designs.
                </p>
                <img
                  src={MernStack}
                  alt=""
                  className="p-2 rounded-lg w-52 mt-4"
                />
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Html} alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Css} alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Javascript} alt="" className="w-10" />
                    <span className="font-semibold">Javascript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Express} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">Express</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Tailwind} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">Tailwind Css</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Vite} alt="" className="w-9" />
                    <span className="font-semibold">Vite</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={NodeLogo} alt="" className="w-10" />
                    <span className="font-semibold">Node Js</span>
                  </div>
                  <div className="border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Mongodb} alt="" className="w-10" />
                    <span className="font-semibold">Mongodb</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-7-pack-logos-icons-2945272.png?f=webp&w=256"
                      alt=""
                      className="w-10"
                    />
                    <span className="font-semibold">TypeScript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={SQL} alt="" className="w-10" />
                    <span className="font-semibold">SQL</span>
                  </div>

                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={PHP} alt="" className="w-8" />
                    <span className="font-semibold">PHP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Apart from coding, I am passionate about learning new technologies
              and keeping myself up-to-date with the latest trends in web
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
