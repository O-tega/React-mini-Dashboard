import React from 'react'
import ProjectSummary from './ProjectSummary'


const ProjectList = ()=>{
    return(
        <div className='flex flex-col items-center'>
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>
        </div>
    )
}

export default ProjectList