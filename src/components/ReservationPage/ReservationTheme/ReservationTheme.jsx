import React from 'react';

import './ReservationTheme.scss';

//Section with de theme of the visite per month
const Theme = () => {

    return (
        <div className='theme'>
            <h2 className='theme__title'>Les thématiques par saison</h2>

            <div className='theme__container-spring'>
                <h3 className='theme__spring'>Printemps</h3>
                <p className='theme__description'>Du 1er Mars au 31 Mai</p>
                <p className='theme__activity'>Fruit-Légumes & Activités proposées</p>
            </div>

            <div className='theme__container-summer'>
                <h3 className='theme__summer'>Eté</h3>
                <p className='theme__description'>Du 1er Juin au 31 Août</p>
                <p className='theme__activity'>Fruit-Légumes & Activités proposées</p>
            </div>

            <div className='theme__container-automn'>
                <h3 className='theme__automn'>Automne</h3>
                <p className='theme__description'>Du 1er Septembre au 30 Novembre</p>
                <p className='theme__activity'>Fruit-Légumes & Activités proposées</p>
            </div>
        </div>
    );
};

export default Theme;