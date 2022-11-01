import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks =()=>{
    
    return(
        <div>
            <ul className='text-white text-sm md:flex'>
                <li className='sil'><NavLink to='/createproject' >New Project</NavLink></li>
                <li className='sil mr-4'><NavLink to='#' >Log Out</NavLink></li>
                <li className='mt-2 absolute top-2 right-2 md:mt-3'><NavLink to='#' className=' rounded-full bg-rose-600 font-medium hover:bg-rose-700 py-1.5 px-2 '>IO</NavLink></li>
            </ul>
        </div>
    )
}


export default SignedInLinks

  