import React from 'react'
import { MenuProps } from '../../models/menu.model'
import {
    NavLink,
} from "react-router-dom";
import './menu.style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = (props: MenuProps): JSX.Element => {
    const setup = props.menu.map((m, index) => {
        return (
            <li key={index} className={'menu__item item'}>
                <NavLink className={'item__link link'} exact={true} activeClassName={`item__link--active-${m.color}`} to={m.route}>
                    <FontAwesomeIcon className={`link__icon link__icon--${m.color}`} icon={m.icon} />
                    <span className={'link__label'}>{m.label}</span>
                </NavLink>
            </li>
        );
    })

    return (
        <div>
            <ul className={'menu'}>
                {setup}
            </ul>
        </div>
    )
}

export default Menu;