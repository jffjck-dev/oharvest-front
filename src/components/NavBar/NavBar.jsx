import './NavBar.scss';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className='title'>
                <li className='a'>
                <a href='/'>Produits de saison</a>
                </li>
                <li className='a'>
                <a href='/'>Plan de la cueillette</a>
                </li>
                <li className='a'>
                <a href='/'>Visite scolaire</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;