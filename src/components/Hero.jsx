import React from "react";
import hero from "../assets/Hero.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";
import Github from "../assets/Github.png";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi Everyone, <br />
              I'm Kar Hin <span className="text-red-500">Cho</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer</p>
            <p className="mb-4">
              I like to use (ReactJS + TailWind + Vite) as my Frontend and
              Backend (NodeJs + ExpressJs) for my Backend with MYSQL for
              Relational Database and MongoDB for Non-Relational database
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://docs.google.com/document/d/1VkDeeMUrH6bPjs2UwaCB2ooM5KujRI1Y/edit?usp=sharing&ouid=111083206047604990465&rtpof=true&sd=true"
                download
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[80vh] h-90" />
            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <a href="https://www.linkedin.com/in/kar-hin-cho-16371226b/">
          <img src={facebook} alt="" className="w-10" />
        </a>
        <a href="https://www.linkedin.com/in/kar-hin-cho-16371226b/">
          <img src={instagram} alt="" className="w-10" />
        </a>
        <a href="https://www.linkedin.com/in/kar-hin-cho-16371226b/">
          <img src={linkedin} alt="" className="w-10" />
        </a>
        <a href="https://github.com/JokerHin">
          <img src={Github} alt="" className="w-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
