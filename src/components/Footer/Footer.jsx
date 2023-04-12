import './Footer.scss';

/**
 * Il s'agit du footer qui comprends les liens vers le copyright, les CGUs et Qui Sommes-Nous
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