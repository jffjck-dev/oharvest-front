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
        <div className={classes.container}>
            <h2 className={classes.title}>Qui sommes-nous ?</h2>
            <div className={classes.teams}>
                {teamMembers.map((team, index) => (
                    <div key={index} className={classes['team-block']}>
                        <h3 className={classes['team-subtitle']}>{team.title}</h3>
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
