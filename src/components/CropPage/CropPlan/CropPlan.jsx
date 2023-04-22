import React from 'react';
import PropTypes from 'prop-types';
import {MapContainer, TileLayer, LayersControl, Marker, Popup} from 'react-leaflet';
import Plot from './Plot';
import UserMarker from './UserMarker';

import './CropPlan.scss';
import logo from '../../../assets/logo_oharvest_transparent.png';

const CropPlan = ({data}) => {
    const position = [48.5771821, 7.7488522];
    const shop = [48.752859, 7.414099];

    return <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="leaflet-map">
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
            {data.map(plot => <Plot key={plot.id} plot={plot} />)}
            <UserMarker />
            <Marker position={shop}>
                <Popup><img className="popup__logo" src={logo} alt="logo O'Harvest" /></Popup>
            </Marker>
        </LayersControl>
    </MapContainer>;
};

CropPlan.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            coordinate: PropTypes.arrayOf(
                PropTypes.arrayOf(
                    PropTypes.number.isRequired,
                ).isRequired,
            ).isRequired,
            products: PropTypes.arrayOf(
                PropTypes.exact({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    isAvailable: PropTypes.bool.isRequired,
                    image: PropTypes.string.isRequired,
                }).isRequired,
            ),
        }).isRequired,
    ),
};

export default CropPlan;