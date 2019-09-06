import React from 'react';
import PROJECTS from '../data/project';

const Project = (props)=>{
        const {title, image, description, link} = props.project;
        return (
        <div style={{display: 'inline-block', margin:10, width:300}}>
         <h2>{title}</h2>
         <img src={image} alt='profile' style={{width : 200, height: 120}}/>
         <p>{description}</p>
         <a href={link}>{link}</a>
        </div>
        )
}
const Projects = ()=>(
          <div > 
              <h1>Highlighted Projects</h1>
              <div>{
               PROJECTS.map((PROJECT)=>(
                   <Project key={PROJECT.id} project={PROJECT}/>
               ))
              }
              </div>
          </div>
)  
export default Projects;