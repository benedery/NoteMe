import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">
                            Project title - {id}
                        </span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum est vitae soluta assumenda debitis praesentium, itaque cumque porro et modi repudiandae earum aperiam nisi sit explicabo. Non repellendus at quae.</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted By ben edery</div>
                        <div>2nd septemer, 2AM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

