import React from 'react'



const ProjectSummary = ({id, title, content})=>{
    return(
            <div className='shadow w-4/5 bg-white p-5 mt-10'>
                <p className='text-2xl'>{title}</p>
                <p className='text-sm text-gray-700'>posted by Tega </p>
                <p className='text-sm text-gray-500'>5th October, 12:00pm</p>
            </div>

    )
}


export default ProjectSummary