import React from 'react';
import TeamMember from './team-member/TeamMember.jsx';
import teamMembers from './team-member/teamMembers.js';

import './AboutUs.scss';

/**
 * Component representing the "About Us" section of the website.
 *
 * This component displays information about the different teams and their members.
 *
 * @returns {JSX.Element} - JSX element representing the "About Us" section.
 */
const AboutUs = () => {
    return (
        <div className="aboutus">
            <h2 className="aboutus__title">Qui sommes-nous ?</h2>
            <div className="aboutus__img-div">
                {teamMembers.map((team, index) => (
                    <div key={index} className={`aboutus__img-${team.type}`}>
                        <h3 className={`aboutus__subtitle-${team.type}`}>{team.title}</h3>
                        {team.members.map((member, memberIndex) => (
                            <TeamMember key={memberIndex} member={member} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
