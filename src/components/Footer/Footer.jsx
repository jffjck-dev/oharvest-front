import React from 'react';
import './Footer.scss';

/**
 * Footer with link on "CGU", "copyright", and "about us" page
 */
const Footer = () => {
    return (
        <footer className='footer'>
            <a className='footer__link' href='/' >Qui sommes-nous ?</a>
            <a className='footer__link' href='/'>Copyright</a>
            <a className='footer__link' href='/'>CGU</a>
        </footer>
    );
};

export default Footer;