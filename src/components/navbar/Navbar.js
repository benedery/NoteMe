import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignOutLinks'
const Navbar = () => {

    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo left">NoteMe</Link>
                    <SignedInLinks />
                    <SignOutLinks />
                </div>
            </nav>
        </div >

    );
}

export default Navbar