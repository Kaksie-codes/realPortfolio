import React from 'react'
import ProjectCard from '../ProjectCard'
import img1 from '../../assets/netflix-2.png'
import img2 from '../../assets/amazon.png'
import img3 from '../../assets/youtube.png'
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
                title="Netflix Clone" 
                technologies="Built using React Js, CSS, Firebase, Redux." 
                imgUrl={img1}
                github="https://github.com/Kaksie-codes/myNetflix-Clone"
                site='https://mooviz-007.web.app/'
            />
            <ProjectCard 
                title="Amazon Clone" 
                technologies="Built using Next JS, Tailwind CSS, NextAuth, Firebase and Redux" 
                imgUrl={img2}
                github=""
                site='https://mooviz-007.web.app/'
            />
            <ProjectCard 
                title="YouTube Clone" 
                technologies="Built using React JS, CSS, Firebase and Redux" 
                imgUrl={img3}
                github="https://github.com/Kaksie-codes/myYoutube-Clone"
                site='https://yootube-007.web.app/'
            />
        </div> 
        <Link to="/projects" className="btn primary">View More</Link>
    </section>
  )
}

export default Portfolio;