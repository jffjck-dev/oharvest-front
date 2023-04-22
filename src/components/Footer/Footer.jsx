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
            <p aria-hidden style={{textAlign: 'center'}}>🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾</p>
            <footer className='footer'>
                <a className='footer__link' href='#' onClick={openAboutUsModal}>Qui sommes-nous ?</a>
                <a className='footer__link' href='#'>Copyright © {now.getFullYear()}</a>
                <a className='footer__link' href='#' onClick={openCGUModal}>CGU</a>
                <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
                    {isAboutUsOn && <AboutUs />}
                    {isCGUOn && <CGU />}
                </Modal>
            </footer>
        </>
    );
};

export default Footer;