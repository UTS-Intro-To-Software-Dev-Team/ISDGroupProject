import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <Link to='/'>Home </Link>
            <Link to='/shop'>Shop </Link>
            <Link to='/register'>Register </Link>
            <Link to='/login'>Login</Link>
        </nav>
    );
}

export default Nav;