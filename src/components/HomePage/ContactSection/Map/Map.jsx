import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import logo from '../../../../assets/logo_oharvest_transparent.png';

import './Map.scss';

const Map = () => {
    const position = [49.27005386352539, 3.9190235137939453];

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={true} className="leaflet-map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <img className="popup__logo" src={logo} />
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;