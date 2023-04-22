import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import logo from '../../../../assets/logo_oharvest_transparent.png';

import './Map.scss';

const Map = () => {
    const shop = [48.752859, 7.414099];

    return (
        <MapContainer center={shop} zoom={13} scrollWheelZoom={false} className="leaflet-map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={shop}>
                <Popup>
                    <img className="popup__logo" src={logo} />
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;