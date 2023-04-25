import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';

const Carousel = ({products, category, title}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    if(category) {
        const filteredProducts = products.filter(item => item.category.name === category.name);
        return (
            <div>
                <div className='highlight'>
                    <h2 className='highlight__title'>{category.name}</h2>
                    {(filteredProducts.length > 0) && <Slider {...settings}>
                        {
                            (filteredProducts.map((product) => (
                                <div key={product.id} className="highlight__div">
                                    <div>
                                        <Link to={`/products/${product.id}`}>
                                            <span className={ product.isAvailable ? 'highlight__tag--available' : 'highlight__tag--unavailable'}>{product.isAvailable ? 'disponible' : 'indisponible'}</span>
                                            <img className="highlight__card" src={`http://kevin-hesse-server.eddi.cloud/images/${product.image}`} alt={`${product.image}`} />
                                        </Link>
                                    </div>
                                </div>
                            )))
                        }
                    </Slider>}
                    {filteredProducts.length === 0 && <p style={{textAlign: 'center'}}> Aucun produit répertorié </p>}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className='highlight'>
                    <h2 className='highlight__title'>{title}</h2>
                    <Slider {...settings}>
                        {
                            products.map((product) => (
                                <div key={product.id} className="highlight__div">
                                    <div>
                                        <Link to={`/products/${product.id}`}>
                                            <img className="highlight__card" src={`http://kevin-hesse-server.eddi.cloud/images/${product.image}`} alt={`${product.image}`} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
        );
    }
};

Carousel.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        }).isRequired,
    ),
    category: PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }),
    title: PropTypes.string,
};

export default Carousel;