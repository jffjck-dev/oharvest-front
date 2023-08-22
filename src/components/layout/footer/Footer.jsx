import React, { useState } from 'react';
import Modal from '../../ui/modal/Modal.jsx';
import GTU from './gtu/GTU.jsx';
import AboutUs from './about-us/AboutUs.jsx';

import classes from './Footer.module.css';

/**
 * Footer component with links to "gtu" and "about us" modals.
 * @returns {JSX.Element} - The rendered Footer component.
 */
const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAboutUsOn, setIsAboutUsModalOn] = useState(false);
    const [isGTUOn, setIsGTUOn] = useState(false);

    const currentYear = new Date().getFullYear();

    /**
     * Opens the "About Us" modal.
     */
    const openAboutUsModal = () => {
        setIsModalOpen(true);
        setIsAboutUsModalOn(true);
        setIsGTUOn(false);
    };

    /**
     * Opens the "GTU" modal.
     */
    const openCGUModal = () => {
        setIsModalOpen(true);
        setIsAboutUsModalOn(false);
        setIsGTUOn(true);
    };

    /**
     * Closes the modals.
     */
    const closeModal = () => {
        setIsAboutUsModalOn(false);
        setIsGTUOn(false);
        setIsModalOpen(false);
    };

    return (
        <footer className={classes.footer}>
            <ul>
                <li className="footer__list-item"><button type="button" title="découvrez qui nous sommes en cliquant" aria-label="cliquez pour découvrir qui nous sommes" onClick={openAboutUsModal}>Qui sommes-nous ?</button></li>
                <li className="footer__list-item">© {currentYear} • made with 🧡</li>
                <li className="footer__list-item"><button type="button" title="découvrez les CGU en cliquant" aria-label="cliquez pour lire nos CGU" onClick={openCGUModal}>CGU</button></li>
            </ul>
            <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
                {isAboutUsOn && <AboutUs />}
                {isGTUOn && <GTU />}
            </Modal>
        </footer>
    );
};

export default Footer;