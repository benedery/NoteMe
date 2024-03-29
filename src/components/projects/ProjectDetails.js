import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


const ProjectDetails = (props) => {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to="/signin" />

    if (project) {
        return (
            <div>
                <div className="container section project-details">
                    <div className="card z-depth-0 sign-form projectDetails">
                        <div className="card-content ">
                            <span className="card-title"> {project.title} </span>
                            <p> {project.content}</p>
                        </div>
                        <div id="projectDetails" className="card-action grey lighten-4 grey-text sign-form">
                            <div>Posted By {project.authorFirstName} {project.authorLastName}</div>
                            <div>Published at</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container center">
                <p>Loading Project...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(connect(mapStateToProps, null),
    firestoreConnect([{ collection: 'projects' }]))(ProjectDetails)

