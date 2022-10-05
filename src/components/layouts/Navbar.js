import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navbar = ()=>{
    return (
        <nav className='w-full bg-slate-800'>
            <div className='flex justify-center'>
                <div className='w-3/4 flex justify-between items-center py-3 text-white'>
                    <Link to='/' className='font-bold text-2xl'>T-Plan</Link>
                    <div className='flex'>
                        <SignedOutLinks/>
                        <SignedInLinks/>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar