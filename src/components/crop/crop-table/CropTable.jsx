import React from 'react';
import PropTypes from 'prop-types';
import ProductTag from '../product-tag/ProductTag.jsx';

import './CropTable.scss';

/**
 * Table element listing products per plot
 * @param plots {array<object>} plots data fetched from the API
 * @returns {JSX.Element}
 */
const CropTable = ({plots}) => {
    return (
        <section className="crop-table">
            {(plots.length > 0) && (<table>
                <caption className="crop-table__title">
                    Listes des produits disponibles par parcelle
                </caption>
                <thead>
                    <tr className="crop-table__header">
                        <th style={{textAlign: 'right'}}>numéro parcelle</th>
                        <th>produits disponibles</th>
                    </tr>
                </thead>
                <tbody>
                    {plots && plots.map(row => (
                        <tr key={row.id} className="crop-table__row">
                            <td className="crop-table__row-sector">
                                {row.name}
                            </td>
                            <td>
                                <ul className="crop-table__row-products">
                                    {row.products.map(product => {
                                        return (<ProductTag key={product.id} {...product} />);
                                    })}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>)}
            {(plots.length === 0) && <p className="crop-table__empty-notif">Aucun produit disponible à la cueillette 😢</p>}
        </section>
    );
};

CropTable.propTypes = {
    plots: PropTypes.arrayOf(
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

export default CropTable;