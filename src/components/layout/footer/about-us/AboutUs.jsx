import React from 'react';
import TeamMember from './team-member/TeamMember.jsx';
import teamMembers from './team-member/teamMembers.js';

import classes from './AboutUs.module.css';

/**
 * Component representing the "About Us" section of the website.
 *
 * This component displays information about the different teams and their members.
 *
 * @returns {JSX.Element} - JSX element representing the "About Us" section.
 */
const AboutUs = () => {
    return (
        <div className={classes.aboutus}>
            <h2 className={classes['aboutus__title']}>Qui sommes-nous ?</h2>
            <div className={classes['aboutus__img-div']}>
                {teamMembers.map((team, index) => (
                    <div key={index} className={classes[`aboutus__img-${team.type}`]}>
                        <h3 className={classes[`aboutus__subtitle-${team.type}`]}>{team.title}</h3>
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
