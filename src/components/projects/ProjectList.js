import React from 'react'
import ProjectSummary from './ProjectSummary'


const ProjectList = ({projects})=>{
    return(
        <div className='flex flex-col items-center'>
            {projects && projects.map(({id, title, content})=>{
                return(
                    <ProjectSummary id={id} title={title} content={content} key={id}/>
                )
            })}
        </div>
    )
}

export default ProjectList