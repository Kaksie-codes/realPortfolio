import React from 'react'
import ProjectCard from '../ProjectCard'
import img1 from '../../assets/netflix-2.png'
import img2 from '../../assets/amazon.png'
import img3 from '../../assets/Fitness.png'
import { Link } from 'react-router-dom'
import './portfolio.css';


const Portfolio = () => {
   
  return ( 
    <section className="portfolio" id="portfolio">
        <h2 className="section-heading">My Projects</h2>                    
        <p className="text-color text-center">
            Here are some of my work that I've done in various technologies.
        </p>
        <div className="container portfolio__container">
            <ProjectCard 
                title="Filmpire" 
                technologies="Built using React Js, CSS, Firebase and Redux." 
                imgUrl={img1}
                github="https://github.com/Kaksie-codes/nkays-filmpire"
                site='https://nkays-filmpire.vercel.app/'
            />
           <ProjectCard 
                 title="Amazon Clone" 
                 technologies="Built using Next JS, Tailwind CSS and Firebase" 
                 imgUrl={img2}
                 github="https://github.com/Kaksie-codes/amazonia"
                 site='https://amazonia-psi.vercel.app/'
            />
            <ProjectCard 
                title="Fitness Website" 
                technologies="Built using React JS and CSS" 
                imgUrl={img3}
                github="https://github.com/Kaksie-codes/MyFitnessApp"
                site='https://myfitnessapp007.netlify.app/'
            />
        </div> 
        <Link to="/projects" className="btn primary">View More</Link>
    </section>
  )
}

export default Portfolio;