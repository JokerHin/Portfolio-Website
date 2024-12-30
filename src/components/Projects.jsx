import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import JustAQuiz from '../assets/JustAQuiz.png'
import MusicPlayer from '../assets/MusicPlayer.png'
import ScorchGuard from '../assets/ScorchGuard.png'
import Inventory from '../assets/Inventory.png'
import Employee from '../assets/Employee.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: Portfolio,
          language: 'ReactJs + Vite + Tailwind',
          live: "#",
          github: "https://github.com/JokerHin/Portfolio-Website"
        },
        {
          title: 'JustAQuiz',
          desc: 'Interactive Web Quiz for HTML + CSS Programming. User able to create quiz, attempt quiz and give feedback like Quizzes.',
          image: JustAQuiz,
          language: 'HTML + CSS + JavaScript + PHP + SQL',
          live: "#",
          github: "https://github.com/JokerHin/JustAQuiz"
        },
        {
          title: 'MusicPlayer',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: MusicPlayer,
          language: 'HTML + CSS + JavaScript',
          live: "#",
          github: "https://github.com/rohitsingh93300/YouTube-clone"
        },
        {
          title: 'ScorchGuard-The-Legend-of-the-Firelands1',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: ScorchGuard,
          language: 'HTML + CSS + JavaScript',
          live: "https://jokerhin.github.io/ScorchGuard-The-Legend-of-the-Firelands1/",
          github: "https://github.com/JokerHin/ScorchGuard-The-Legend-of-the-Firelands1"
        },
        {
          title: 'Hospital Inventory Management System',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Inventory,
          language: 'Java',
          live: "#",
          github: "https://github.com/JokerHin/Hospital-Inventory-Management-System"
        },
        {
          title: 'Employee Management System',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Employee,
          language: 'Python',
          live: "#",
          github: "https://github.com/JokerHin/Employee-Management-System"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects