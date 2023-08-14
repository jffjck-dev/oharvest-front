import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {configCarousel} from '../../../utils/config-carousel.js';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './Carousel.module.css';

/**
 * reusable carousel element based on Slick library in order to display products list per categories or only available products
 * @param products {array<object>} products to display
 * @param category {array<object>} product categories
 * @param title {string} naming carousel if not using categories
 * @param nbCardsToSHow {number} number of product to display per carousel
 * @returns {JSX.Element}
 */
const Carousel = ({products, category, title, nbCardsToSHow = 4}) => {

    // this will cause a visual bug if there is not enough products to fill all carousel card element
    const settings = configCarousel(nbCardsToSHow);

    let carouselProducts = [];
    (category) ? carouselProducts = products.filter(item => item.category.name === category.name) : carouselProducts = products;

    return (
        <div>
            <div className={classes.carousel}>
                <h2 className={classes.carousel__title}>{category ? category.name : title}</h2>
                {(carouselProducts.length > 0) && <Slider {...settings}>
                    {
                        (carouselProducts.map((product) => (
                            <div key={product.id} >
                                <Link to={`/products/${product.id}`} title="cliquer pour vous diriger vers la fiche produit correspondant" aria-label="cliquer pour vous diriger vers la fiche produit correspondant">
                                    <span className={ product.isAvailable ? classes.available : classes.unavailable}>{product.isAvailable ? 'disponible' : 'indisponible'}</span>
                                    <img className={classes.carousel__card} src={`http://localhost:8000/images/${product.image}`} alt={`${product.image}`} />
                                </Link>
                            </div>
                        )))
                    }
                </Slider>}
                {category && carouselProducts.length === 0 && <p style={{textAlign: 'center'}}> Aucun produit répertorié </p>}
            </div>
        </div>
    );
};

Carousel.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            isAvailable: PropTypes.bool.isRequired,
        }).isRequired,
    ),
    category: PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }),
    title: PropTypes.string,
    nbCardsToSHow: PropTypes.number,
};

export default Carousel;