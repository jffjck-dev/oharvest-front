/**
 * Utility function to configure settings for Carousel component
 * @param cardsNumberToDisplay {number} this number need to be equal to the actual product to display otherwise there is a visual bug if there is not enough product item to fill carousel card element
 * @returns {{dots: boolean, infinite: boolean, initialSlide: number, responsive: [{settings: {dots: boolean, infinite: boolean, slidesToScroll: number, slidesToShow: number}, breakpoint: number},{settings: {initialSlide: number, slidesToScroll: number, slidesToShow}, breakpoint: number},{settings: {slidesToScroll: number, slidesToShow}, breakpoint: number}], slidesToScroll: number, slidesToShow, speed: number}}
 */
export function configCarousel(cardsNumberToDisplay) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: cardsNumberToDisplay,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: cardsNumberToDisplay,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: cardsNumberToDisplay,
                    slidesToScroll: 3,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: cardsNumberToDisplay,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return settings;
}