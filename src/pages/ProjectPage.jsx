import React from 'react'

import './portfoliopage.css'

const ProjectPage = ({openThemeModal}) => {
  return (
    <div className="projectpage">
        <div className="portfolio" id="portfolio">
            
            <h2 className="section-heading">My Projects</h2>                    
            <p className="text-color">
                Here are some of my work that I've done in various technologies.
            </p>
        </div>
    </div>
  )
}

export default ProjectPage