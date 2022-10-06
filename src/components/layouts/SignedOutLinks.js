import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks =()=>{
    return(
        <div>
            <ul className='text-white text-sm md:flex'>
                <li className='sil'><NavLink to='#' >Signup</NavLink></li>
                <li className='sil'><NavLink to='/signin' >Login</NavLink></li>
            </ul>
        </div>
    )
}


export default SignedOutLinks