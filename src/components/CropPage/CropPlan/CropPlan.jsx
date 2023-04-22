import React from 'react';
import PropTypes from 'prop-types';
import { LayersControl, Marker, Popup } from 'react-leaflet';
import Map from '../../UI/Map/Map';
import Plot from './Plot';
import UserMarker from './UserMarker';

import './CropPlan.scss';
import logo from '../../../assets/logo_oharvest_transparent.png';

const CropPlan = ({data}) => {
    const position = [48.5771821, 7.7488522];
    const shop = [48.752859, 7.414099];

    return <Map position={position} zoom={15}>
        <LayersControl position="topright">
            {data.map(plot => <Plot key={plot.id} plot={plot} />)}
            <UserMarker />
            <Marker position={shop}>
                <Popup><img className="popup__logo" src={logo} alt="logo O'Harvest" /></Popup>
            </Marker>
        </LayersControl>
    </Map>;
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