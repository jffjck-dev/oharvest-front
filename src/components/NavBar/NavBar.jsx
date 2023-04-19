import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './NavBar.scss';
import logo from '../../assets/logo_oharvest_transparent.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="navbar__img" src={logo} alt="logo O'harvest" />
            </Link>
            <ul className="navbar__title">
                <li className="navbar__item">
                    <NavLink className={({isActive}) => isActive ? 'navbar__item-link--active' : 'navbar__item-link'} to="/products">
                        Produits de saison
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink className={({isActive}) => isActive ? 'navbar__item-link--active' : 'navbar__item-link'} to="/map">
                        Plan de la cueillette
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink className={({isActive}) => isActive ? 'navbar__item-link--active' : 'navbar__item-link'} to="/reservation">
                        Visite scolaire
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
