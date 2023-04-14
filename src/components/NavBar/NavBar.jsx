import React from 'react';
import './NavBar.scss';

import logo from '../../assets/logo_oharvest_transparent.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <img className="navbar__img" src={logo} alt="" />
            <ul className="navbar__title">
                <li className="navbar__item">
                    <a className="navbar__item-link" href="/">
            Produits de saison
                    </a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__item-link" href="/">Plan de la cueillette</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__item-link" href="/">Visite scolaire</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
