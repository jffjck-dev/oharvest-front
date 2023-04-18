import React from 'react';

import './Horaire.scss';

const Horaire = () => {
    return (
        <div className="contact__horaire">
            <h5><i className="fa-solid fa-clock"></i>NOS HORAIRES</h5>
            <table>
                <tbody>
                    <tr>
                        <td className='contact__horaire-jour'>Lundi</td>
                        <td>fermé</td>
                        <td>13h00-18hh</td>
                    </tr>
                    <tr>
                        <td className='contact__horaire-jour'>Mardi</td>
                        <td>9h00-12h00</td>
                        <td>13h00-18hh</td>
                    </tr>
                    <tr>
                        <td className='contact__horaire-jour'>Mercredi</td>
                        <td>9h00-12h00</td>
                        <td>13h00-18hh</td>
                    </tr>
                    <tr>
                        <td className='contact__horaire-jour'>Jeudi</td>
                        <td>9h00-12h00</td>
                        <td>13h00-18hh</td>
                    </tr>
                    <tr>
                        <td className='contact__horaire-jour'>Vendredi</td>
                        <td>9h00-12h00</td>
                        <td>13h00-18hh</td>
                    </tr>
                    <tr>
                        <td className='contact__horaire-jour'>Samedi</td>
                        <td>9h00-12h00</td>
                        <td>13h00-18hh</td>
                    </tr>
                    <tr>
                        <td className='contact__horaire-jour'>Dimanche</td>
                        <td>9h00-12h00</td>
                        <td>13h00-18hh</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Horaire;