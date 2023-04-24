import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Tips.scss';

//Tips component with event button
const Tips = ({tip}) => {
    const [showTips, setShowTips] = useState(false);

    /* Event on the button tips*/
    function handleButtonClick() {
        setShowTips(!showTips);
    }

    return (
        <div className='tips' >
            <button className="tips__button" onClick={handleButtonClick}>
                Des astuces...?
            </button>
            <p className={`tips__text ${showTips ? 'visible' : 'hidden'}`}>
                Voici quelques astuces pour vous aider...{tip}
            </p>
        </div>
    );
};

// Props validation
Tips.propTypes = {
    tip: PropTypes.string.isRequired,
};

export default Tips;