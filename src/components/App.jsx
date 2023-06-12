import React from 'react';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Main from './UI/Main/Main';
import Footer from './Footer/Footer';

import './App.scss';

/**
 * Root Element
 * @returns {JSX.Element}
 */
function App() {
    return (
        <div className="app">
            <Header />
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;