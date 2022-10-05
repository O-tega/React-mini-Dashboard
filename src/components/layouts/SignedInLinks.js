import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks =()=>{
    return(
        <div>
            <ul className='text-white text-sm flex'>
                <li><NavLink to='#' className='sil'>New Project</NavLink></li>
                <li><NavLink to='#' className='sil'>Log Out</NavLink></li>
                <li><NavLink to='#' className='sil rounded-full bg-rose-600 font-medium hover:bg-rose-700 py-1.5 px-2'>IO</NavLink></li>
            </ul>
        </div>
    )
}


export default SignedInLinks