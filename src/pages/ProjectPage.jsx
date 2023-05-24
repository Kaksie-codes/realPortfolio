import React from 'react'
import img1 from '../assets/netflix-2.png'
import img2 from '../assets/amazon.png'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/youtube.png'
import img5 from '../assets/gpt.png'
import img6 from '../assets/restaurant.png'
import img7 from '../assets/fitness.png'
import img8 from '../assets/img-8.jpg'
import img9 from '../assets/school.png'
import './portfoliopage.css'
import NavBar from '../components/navbar/Navbar'
import ProjectCard from '../components/ProjectCard'

const ProjectPage = ({openThemeModal}) => {
  return (
    <div className="projectpage">
        <div className="portfolio" id="portfolio">
            <NavBar openThemeModal={openThemeModal}/>
            <h2 className="section-heading">My Projects</h2>                    
            <p className="text-color">
                Here are some of my work that I've done in various technologies.
            </p>
            <div className="container portfolio__container">
            <ProjectCard 
                title="Netflix Clone" 
                technologies="Built using React Js, CSS, Firebase and Redux." 
                imgUrl={img1}
                github=""
                site='https://jessyschools.netlify.app/'
            />
            <ProjectCard 
                title="Amazon Clone" 
                technologies="Built using Next JS, Tailwind CSS and Firebase" 
                imgUrl={img2}
                github=""
                site='https://jessyschools.netlify.app/'
            />           
            <ProjectCard 
                title="Youtube Clone" 
                technologies="Built using React JS, CSS, Firebase and Redux." 
                imgUrl={img4}
                github=""
                site='https://jessyschools.netlify.app/'
            />
            <ProjectCard 
                title="Responsive Landing Page" 
                technologies="Built using HTML, CSS and JavaScript" 
                imgUrl={img5}
                github="https://github.com/Kaksie-codes/GPT-3-Kaksy"
                site='https://gpt-kaksy.netlify.app/'
            />
            </div>
        </div>
    </div>
  )
}

export default ProjectPage