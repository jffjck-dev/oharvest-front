import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import Map from '../../../UI/Map/Map.jsx';

import logo from '../../../../assets/logo_oharvest_transparent.png';
import './Location.scss';

/**
 * Map element that geolocalized the harvest
 * @returns {JSX.Element}
 */
const Location = () => {
    const shop = [48.752859, 7.414099];

    return (
        <Map position={shop} zoom={13} scrollWheelZoom={false}>
            <Marker position={shop}>
                <Popup>
                    <img className="popup__logo" src={logo} alt="logo O'Harvest" />
                </Popup>
            </Marker>
        </Map>
    );
};

export default Location;