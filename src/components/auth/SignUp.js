import React, { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        console.log(firstName)
        console.log(lastName)
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" id="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Sign Up
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
