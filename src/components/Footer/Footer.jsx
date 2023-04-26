import React, { useState } from 'react';
import './Footer.scss';
import Modal from '../UI/Modal/Modal';
import CGU from './CGU/CGU';
import AboutUs from './AboutUs/AboutUs';

/**
 * Footer with link on "CGU" and "about us" modals;
 */
const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAboutUsOn, setIsAboutUsModalOn] = useState(false);
    const [isCGUOn, setIsCGUOn] = useState(false);

    const now = new Date();

    const openAboutUsModal = () => {
        setIsModalOpen(true);
        setIsAboutUsModalOn(true);
        setIsCGUOn(false);
    };

    const openCGUModal = () => {
        setIsModalOpen(true);
        setIsAboutUsModalOn(false);
        setIsCGUOn(true);
    };

    const closeModal = () => {
        setIsAboutUsModalOn(false);
        setIsCGUOn(false);
        setIsModalOpen(false);
    };

    return (
        <>
            <p className="footer__emoji-line" aria-hidden>🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾</p>
            <footer className="footer">
                <ul className="footer__list">
                    <li className="footer__list-item"><button type="button" title="découvrez qui nous sommes en clickant" aria-label="cliquez pour découvrir qui nous sommes" onClick={openAboutUsModal}>Qui sommes-nous ?</button></li>
                    <li className="footer__list-item">© {now.getFullYear()} • made with 🧡</li>
                    <li className="footer__list-item"><button style={{border: 'none', background: 'none'}} type="button" title="découvrez les CGU en cliquant" aria-label="cliquez pour lire nos CGU" onClick={openCGUModal}>CGU</button></li>
                </ul>
                <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
                    {isAboutUsOn && <AboutUs />}
                    {isCGUOn && <CGU />}
                </Modal>
            </footer>
        </>
    );
};

export default Footer;