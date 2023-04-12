import React from 'react';
import './HighlightBar.scss';

/**
 * Ceci correspond à la bannière déroulante qui montre les légumes et fruits disponibles.
 */
const HighlightBar = () => {
    return (
        <div>
            <section className="highlight">
                Ceci est une section concernant le caroussel des fruits et légumes!
            </section>
        </div>
    );
};

export default HighlightBar;