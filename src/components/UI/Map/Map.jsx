import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer } from 'react-leaflet';

import './Map.scss';

/**
 * Reusable leaflet-react element to display plan on web page
 * @param position {array<number>} latitude and longitude to center the map on loading component
 * @param children {array<object>} any leaflet-react node
 * @param zoom {number} map zoom define on loading component
 * @returns {JSX.Element}
 */
const Map = ({position, children, zoom=13}) => {
    return (
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    );
};

Map.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number.isRequired),
    zoom: PropTypes.number,
    children: PropTypes.node.isRequired,
};

export default Map;