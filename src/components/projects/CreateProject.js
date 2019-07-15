import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

const CreateProject = ({ createProject, auth }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createProject({ title, content })
    }
    if (!auth.uid) return <Redirect to="/signin" />
    return (

        <div>
            <div className="container">
                <form onSubmit={handleSubmit} className="white sign-form">
                    <h5 className="grey-text text-darken-3">Create New Note</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea onChange={e => setContent(e.target.value)} id="content" className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Create
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
