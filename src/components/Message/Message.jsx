import React, { useState, useEffect } from 'react';

import './Message.scss';

/**
 * notification for open or closed store information
 */
const Message = () => {
    const [isHarvestOpen, setIsHarvestOpen] = useState(false);

    useEffect(() => {
        const currentTime = new Date();
        (currentTime.getHours() >= 9 && currentTime.getHours() < 18) && setIsHarvestOpen(true);
    }, []);

    return (
        <div className={isHarvestOpen ? 'message --open' : 'message --close'}>
            <p className={ isHarvestOpen ? 'message__content --open' : 'message__content --close'}>{isHarvestOpen ? 'La cueillette est actuellement OUVERTE !' : 'La cueillette est actuellement FERMÉ !'}</p>
        </div>
    );
};

export default Message;
