import React from 'react';

import { MapContainer, TileLayer, Rectangle, Tooltip } from 'react-leaflet';
import PropTypes from 'prop-types';

import './CropPlan.scss';

const CropPlan = ({data}) => {
    const position = [49.27005386352539, 3.9190235137939453];

    const options = { color: 'green'};

    return (
        <MapContainer center={position} zoom={23} scrollWheelZoom={false} className="leaflet-map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map(plot => (
                <Rectangle key={plot.plotId} bounds={plot.coordinate} pathOptions={options}>
                    <Tooltip direction="top" offset={[0, 20]} opacity={1} sticky>
                        <ul>
                            {plot.product.map(product => (<li key={product.id}>{product.name}</li>))}
                        </ul>
                    </Tooltip>
                </Rectangle>
            ))}
        </MapContainer>
    );
};


CropPlan.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
            plotId: PropTypes.number.isRequired,
            coordinate: PropTypes.arrayOf(
                PropTypes.arrayOf(
                    PropTypes.number.isRequired,
                )
            ),
            product: PropTypes.arrayOf(
                PropTypes.exact({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    isAvailable: PropTypes.bool.isRequired,
                    image: PropTypes.string.isRequired,
                }),
            ),
        }),
    ),
};

export default CropPlan;