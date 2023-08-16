import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet-async';

/**
 * Element to use to add metadata and SEO requirement information
 * @param title {string} - title page
 * @param content {string} - page description
 * @returns {JSX.Element}
 */
const SeoMetadata = ({title, content}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={content} />
        </Helmet>
    );
};

SeoMetadata.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default SeoMetadata;