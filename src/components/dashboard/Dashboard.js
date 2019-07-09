import React, { Component } from 'react'
import Notifactions from './Notifactions';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Dashboard = ({ projects }) => {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects} key={1} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifactions />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(connect(mapStateToProps, null),
    firestoreConnect([{ collection: 'projects' }]))(Dashboard);