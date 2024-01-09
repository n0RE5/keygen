import React from 'react'
import classes from './Navbar.module.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={[classes.navbar_w, 'container'].join(' ')}>
                <div className={classes.navbar_left}>
                    <div className={classes.navbar_logo}>KeyGen</div>
                    <ul className={classes.navbar_links}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/validate'>Validate</Link></li>
                    </ul>
                </div>
                <div className={classes.navbar_right}>
                    <div>&copy; N0RE5</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;