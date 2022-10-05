import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks =()=>{
    return(
        <div>
            <ul className='text-white text-sm flex'>
                <li><NavLink to='#' className='sil'>Signup</NavLink></li>
                <li><NavLink to='#' className='sil'>Login</NavLink></li>
            </ul>
        </div>
    )
}


export default SignedOutLinks