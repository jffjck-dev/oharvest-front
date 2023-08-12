import React from 'react';
import PropTypes from 'prop-types';
import { Rectangle, Tooltip, LayersControl } from 'react-leaflet';
import ProductTag from '../product-tag/ProductTag.jsx';

import './CropPlan.scss';

const Plot = ({plot}) => {
    const options = { color: 'hsl(208, 68%, 27%)'};

    return (
        <LayersControl.Overlay name={plot.name}>
            <Rectangle className="plot" key={plot.id} bounds={plot.coordinate} pathOptions={options}>
                <Tooltip direction="top" offset={[0, 20]} opacity={1} sticky>
                    <ul>
                        {plot.products.map(product => (<ProductTag key={product.id} {...product} />))}
                    </ul>
                </Tooltip>
            </Rectangle>
        </LayersControl.Overlay>
    ); 
};

Plot.propTypes = {
    plot: PropTypes.exact({
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
};

export default Plot;