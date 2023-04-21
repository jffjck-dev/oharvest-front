import React from 'react';
import img from '../../assets/carrot-in-plate.png';
import { FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="notfound">
            <div className="notfound__div">
                <p className="notfound__div-title">OUPSSS...</p>
            </div>
            <section className="notfound__section">
                <p className="notfound__section-p">4</p>
                <img className="notfound__section-img" src={img} alt="" />
                <p className="notfound__section-p">4</p>
            </section>
            <div className="notfound__return">
                <Link className="notfound__return-link" to="/">
          La Cueillette est par ici <FaHandPointRight />
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
