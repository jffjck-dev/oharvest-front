import CropPage from '../../CropPage/CropPage';
import HomePage from '../../HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';

import './Main.scss';

const Main = () => {
    return (
        <main className="content">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/map" element={<CropPage />}/>
            </Routes>
        </main>
    );
};

export default Main;