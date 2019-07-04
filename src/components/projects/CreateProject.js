import React from 'react'

const CreateProject = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
        console.log(content)
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <input type="password" id="content" onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Login
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateProject
