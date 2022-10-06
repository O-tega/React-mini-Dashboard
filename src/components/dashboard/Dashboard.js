import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications'


class Dashboard extends Component{
    render(){
        return(
            <div className='flex justify-center px-10'>
                <div className='w-3/4 md:grid md:grid-cols-2 gap-4'>
                <div>
                    <ProjectList/>
                </div>
                <div className='hidden md:block'>
                    <Notifications/>
                </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;