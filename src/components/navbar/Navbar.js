import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'


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

const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps, null)(Navbar)