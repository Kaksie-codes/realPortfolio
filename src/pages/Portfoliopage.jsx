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
import NavBar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Portfoliopage = ({openThemeModal}) => { 

  return (
    <>
    <section className="portfolio" id="portfolio">
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
            <ProjectCard 
                title="Geritch Restaurant Website" 
                technologies="Built using React JS and CSS" 
                imgUrl={img6}
                github=""
                site='https://jessyschools.netlify.app/'
            />
            <ProjectCard 
                title="Fitness Website" 
                technologies="Built using React JS and CSS" 
                imgUrl={img7}
                github="https://github.com/Kaksie-codes/MyFitnessApp"
                site='https://myfitnessapp007.netlify.app/'
            />
            <ProjectCard 
                title="Multipage School Website" 
                technologies="Built using HTML, CSS and JavaScript" 
                imgUrl={img9}
                github="https://github.com/Kaksie-codes/Multipage-School-Website"
                site='https://jessyschools.netlify.app/'
            />
            <ProjectCard 
                title="Spotify Clone" 
                technologies="Built using Next JS, Tailwind CSS and Firebase" 
                imgUrl={img8}
                github=""
                site='https://jessyschools.netlify.app/'
            />            
             <ProjectCard 
                title="Blink - Social media App" 
                technologies="Built using Next JS, Tailwind CSS and Firebase" 
                imgUrl={img3}
                github=""
                site='https://jessyschools.netlify.app/'
            />
        </div>
    </section>
    <Footer/>
    </>
    
  )
}

export default Portfoliopage;