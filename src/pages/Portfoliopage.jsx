import React, {useState} from 'react'
import ProjectCard from '../components/ProjectCard'
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

const Portfoliopage = ({openThemeModal}) => { 

  return (
    <>
    <section className="portfolio" id="portfolio">
         
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
        </div>
    </section>
    
    </>
    
  )
}

export default Portfoliopage;