import React from 'react';
import Header from './layout/header/Header';
import NavBar from './layout/nav-bar/NavBar';
import Main from './layout/main/Main';
import Footer from './layout/footer/Footer';

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