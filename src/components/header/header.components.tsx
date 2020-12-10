import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.style.scss'

const Header = (): JSX.Element => {
    return (
        <div className="header">
            <Link to={'/'} className="header__title link"><div>TOBIAS</div> <div>SECHER</div></Link>
            <ul className="header__menu">
                <li><NavLink 
                    className="link" 
                    to={'/work'}
                    activeClassName={'active-link'}>Work</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;
