import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'


const Navbar = ({ auth }) => {
    const links = auth.uid ? <SignedInLinks /> : <SignOutLinks />;

    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo left">NoteMe</Link>
                    {links}
                </div>
            </nav>
        </div >

    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps, null)(Navbar)