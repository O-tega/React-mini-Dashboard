import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications'
import { connect } from 'react-redux'


class Dashboard extends Component{
    render(){
        // console.log(this.props)
        const {projects}=this.props
        return(
            <div className='flex justify-center px-10'>
                <div className='w-3/4 md:grid md:grid-cols-2 gap-4'>
                <div>
                    <ProjectList projects = {projects}/>
                </div>
                <div className='hidden md:block'>
                    <Notifications/>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard) ;