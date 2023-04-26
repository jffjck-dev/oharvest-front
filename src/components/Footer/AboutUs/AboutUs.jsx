import React from 'react';
import './AboutUs.scss';
import carotte from '../../../assets/carotte.png';
import fraise from '../../../assets/fraise.png';
import patate from '../../../assets/patate.png';
import cerise from '../../../assets/cerise.png';
import brocoli from '../../../assets/brocoli.png';

const AboutUs = () => {

    return (
        <div className="aboutus">
            <h2 className="aboutus__title">Qui sommes-nous ?</h2>
            <div className="aboutus__img-div">

                {/* Dev Back-End */}
                <div className="aboutus__img-back">
                    <h2 className="aboutus__subtitle-back">Team Back-End</h2>

                    <div className="aboutus__dev">
                        <div className="aboutus__dev-photo">
                            <img src={carotte} className="aboutus__image" />
                            <div className="aboutus__dev-image-hover">
                                <p className="aboutus__dev-text">Kévin H.<br />Product Owner</p>
                            </div>
                        </div>
                    </div>

                    <div className="aboutus__dev">
                        <div className="aboutus__dev-photo">
                            <img src={cerise} className="aboutus__image" />
                            <div className="aboutus__dev-image-hover">
                                <p className="aboutus__dev-text">Guillaume F.<br />Lead Dev Back</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dev Front-End */}
                <div className="aboutus__img-front">
                    <h2 className="aboutus__subtitle-front">Team Front-End</h2>

                    <div className="aboutus__dev">
                        <div className="aboutus__dev-photo">
                            <img src={fraise} className="aboutus__image" />
                            <div className="aboutus__dev-image-hover">
                                <p className="aboutus__dev-text">Andréa V.<br />Scrum Master</p>
                            </div>
                        </div>
                    </div>

                    <div className="aboutus__dev">
                        <div className="aboutus__dev-photo">
                            <img src={patate} className="aboutus__image" />
                            <div className="aboutus__dev-image-hover">
                                <p className="aboutus__dev-text">Jean-François O.<br />Lead Dev Front</p>
                            </div>
                        </div>
                    </div>

                    <div className="aboutus__dev">
                        <div className="aboutus__dev-photo">
                            <img src={brocoli} className="aboutus__image" />
                            <div className="aboutus__dev-image-hover">
                                <p className="aboutus__dev-text">Mickael M.<br />Git Master</p>
                            </div>
                        </div>
                    </div>    
                </div>         
            </div>
        </div>
    );
};

export default AboutUs;
