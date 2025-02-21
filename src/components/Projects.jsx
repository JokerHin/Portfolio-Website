import React from "react";
import Portfolio from "../assets/Portfolio.png";
import JustAQuiz from "../assets/JustAQuiz.png";
import MusicPlayer from "../assets/MusicPlayer.png";
import ScorchGuard from "../assets/ScorchGuard.png";
import Inventory from "../assets/Inventory.png";
import Employee from "../assets/Employee.png";
import Cards from "./Cards";
import FallGuys from "../assets/Fall Guys.jpg";
import Auth from "../assets/Auth.png";
import YTPlayer from "../assets/YTVideoPlayer.png";
import CrytoExchange from "../assets/CrytoExchange.png";

const Projects = () => {
  const projectJson = [
    {
      title: "Portfolio",
      desc: "This is my portfolio website. I like to build websites and web applications. I have experience in building websites and web applications using ReactJs, NodeJs, ExpressJs, MongoDB, MySQL, HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Material UI, Vite, etc.",
      image: Portfolio,
      language: "ReactJs + Vite + Tailwind",
      live: "https://portfolio-website-jhtcdgfgh-jokerhins-projects.vercel.app/",
      github: "https://github.com/JokerHin/Portfolio-Website",
    },
    {
      title: "JustAQuiz",
      desc: "Interactive Web Quiz for HTML + CSS Programming. User able to create quiz, attempt quiz and give feedback like Quizzes.",
      image: JustAQuiz,
      language: "HTML + CSS + JavaScript + PHP + SQL",
      live: null,
      github: "https://github.com/JokerHin/JustAQuiz",
    },
    {
      title: "Fall Guys",
      desc: "Fall Guys is a gamified learning platform for mastering Java OOP. Engage in interactive challenges, level up your skills, and make learning fun!",
      image: FallGuys,
      language: "ReactJS + Taiwind + TypeScript + NodeJs + ExpressJS + MongoDB",
      live: "https://capstone-assignment.vercel.app/",
      github: "https://github.com/JokerHin/Capstone-Assignment",
    },
    {
      title: "Authentication System",
      desc: "Authentication System is a project exploring JWT, token authentication, cookies, OAuth 2.0, and basic authentication. Built to deepen my understanding of secure authentication methods.",
      image: Auth,
      language: "ReactJS + Taiwind + TypeScript + NodeJs + ExpressJS + MongoDB",
      live: "https://mern-authentication-rust.vercel.app/",
      github: "https://github.com/JokerHin/MERN-Authentication",
    },
    {
      title: "Cryto Exchange",
      desc: "Crypto Exchange is a platform for calculating real-time exchange rates between different cryptocurrencies, making conversions quick and easy.",
      image: CrytoExchange,
      language: "HTML + CSS + JavaScript",
      live: "https://jokerhin.github.io/Cryto-Exchange/",
      github: "https://github.com/JokerHin/Cryto-Exchange",
    },
    {
      title: "Youtube Music Player",
      desc: "YouTube Music Player lets users download YouTube audio or video, save files, and play them instantly by simply entering a YouTube link",
      image: YTPlayer,
      language: "HTML + CSS + JavaScript + PHP + SQL",
      live: "https://youtube-video-music-player.vercel.app/",
      github: "https://github.com/JokerHin/YouTube-Video-Music-Player",
    },
    {
      title: "Spotify",
      desc: "Spotify is a music streaming platform where users can save songs, create playlists, and enjoy their favorite tracks anytime.",
      image: MusicPlayer,
      language: "HTML + CSS + JavaScript",
      live: "https://jokerhin.github.io/Spotify/",
      github: "https://github.com/JokerHin/Spotify",
    },
    {
      title: "ScorchGuard-The-Legend-of-the-Firelands",
      desc: "ScorchGuard: The Legend of the Firelands is a small role-playing game using HTML, CSS, and JavaScript, offering an interactive adventure experience.",
      image: ScorchGuard,
      language: "HTML + CSS + JavaScript",
      live: "https://jokerhin.github.io/ScorchGuard-The-Legend-of-the-Firelands1/",
      github:
        "https://github.com/JokerHin/ScorchGuard-The-Legend-of-the-Firelands1",
    },
    {
      title: "Hospital Inventory Management System",
      desc: "Hospital Inventory Management System is a Java Swing-based application with a GUI for managing hospital supplies, featuring full CRUD functionality.",
      image: Inventory,
      language: "Java",
      live: null,
      github:
        "https://github.com/JokerHin/Hospital-Inventory-Management-System",
    },
    {
      title: "Employee Management System",
      desc: "Employee Management System is a Python-based GUI application for managing employees, featuring full CRUD functionality.",
      image: Employee,
      language: "Python",
      live: null,
      github: "https://github.com/JokerHin/Employee-Management-System",
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return <Cards item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
