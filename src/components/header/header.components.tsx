import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'

const Header = (): JSX.Element => {
    return (
        <div className="header">
            <Link to={'/'} className="header__title link">TOBIAS SECHER</Link>
            <ul className="header__menu">
                <li><Link className="link" to={'/'}>Hej</Link></li>
                <li><Link className="link" to={'/'}>Med</Link></li>
                <li><Link className="link" to={'/'}>Dig</Link></li>
            </ul>
        </div>
    )
}

export default Header;
