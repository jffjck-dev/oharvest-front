import React from 'react';
import './Header.scss';

/**
 * The header with diaporama of 3 images that move on
 */
const Header = () => {
    return (
        <>
            <div className="header">
                <img
                    className="header__img"
                    src="https://cdn.pixabay.com/photo/2018/07/20/14/02/grapes-3550733_960_720.jpg"
                    alt="fruits"
                ></img>

                <img
                    className="header__img"
                    src="https://cdn.pixabay.com/photo/2018/11/10/11/03/pumpkin-3806393_960_720.jpg"
                    alt="legumes"
                ></img>

                <img
                    className="header__img"
                    src="https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
                    alt="fleurs"
                ></img>
            </div>
            <p className="header__emoji-line" aria-hidden>🥕🍏🧄🍅🥒🍎🥔🫛🫑🫘🥬🍇🍊🍓🫐🌽🫒🥦🍒🧅🫚🍐🥕🍏🧄🍅🥒🍎🥔🫛🫑🫘🥬🍇🍊🍓🫐🌽🫒🥦🍒🧅🫚🍐🥕🍏🧄🍅🥒🍎🥔🫛🫑🫘🥬🍇🍊🍓🫐🌽🫒🥦🍒🧅🫚🍐🥕🍏🧄🍅🥒🍎🥔🫛🫑🫘🥬🍇🍊🍓🫐🌽🫒🥦🍒🧅🫚🍐🥕🍏🧄🍅🥒🍎🥔🫛🫑🫘🥬🍇🍊🍓🫐🌽🫒🥦🍒🧅🫚🍐🥕🍏🧄🍅🥒🍎🥔🫛🫑🫘🥬🍇🍊🍓🫐🌽🫒🥦🍒🧅🫚🍐🥕🍏🧄🍅🥒🍎🥔🫛🫑🫘🥬🍇🍊🍓🫐🌽🫒🥦🍒🧅🫚🍐</p>
        </>
    );
};

export default Header;
