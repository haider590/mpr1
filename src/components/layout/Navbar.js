import React from 'react';
import propTypes from 'prop-types';

const Navbar = props => {
    return (
        <nav className = 'navbar bg-primary'>
            <h1>
                <i className={props.icon} />
                {props.title}
            </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
}

export default Navbar

