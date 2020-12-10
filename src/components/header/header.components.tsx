import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'

const Header = (): JSX.Element => {
    return (
        <div className="header">
            <Link to={'/'} className="header__title link"><div>TOBIAS</div> <div>SECHER</div></Link>
            <ul className="header__menu">
                <li><Link className="link" to={'/work'}>Work</Link></li>
            </ul>
        </div>
    )
}

export default Header;
