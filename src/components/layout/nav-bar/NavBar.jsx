import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './NavBar.scss';
import logo from '../../../assets/logo_oharvest_transparent.png';

/**
 * JSX element displaying the navigation menu on all page
 * @returns {JSX.Element}
 */
const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="navbar__img"
                    src={logo}
                    alt="logo O'harvest"
                    title="cliquez pour retourner à l'accueil"
                    aria-label="cliquez pour retourner à l'accueil"
                />
            </Link>
            <ul className="navbar__list">
                <li className="navbar__list-item">
                    <NavLink className={({isActive}) => isActive ? 'navbar__item-link--active' : 'navbar__item-link'}
                        to="/products"
                        title="cliquez pour vous diriger vars l'inventaire des produits"
                        aria-label="cliquez pour vous diriger vars l'inventaire des produits"
                    >
                        Produits de saison
                    </NavLink>
                </li>
                <li className="navbar__list-item">
                    <NavLink className={({isActive}) => isActive ? 'navbar__item-link--active' : 'navbar__item-link'}
                        to="/map"
                        title="cliquez pour vous diriger vars le plan de la cueillette"
                        aria-label="cliquez pour vous diriger vars le plan de la cueillette"
                    >
                        Plan de la cueillette
                    </NavLink>
                </li>
                <li className="navbar__list-item">
                    <NavLink className={({isActive}) => isActive ? 'navbar__item-link--active' : 'navbar__item-link'}
                        to="/reservation"
                        title="cliquez pour vous diriger vers les modalités des visites scolaires"
                        aria-label="cliquez pour vous diriger vers les modalités des visites scolaires"
                    >
                        Visite scolaire
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
