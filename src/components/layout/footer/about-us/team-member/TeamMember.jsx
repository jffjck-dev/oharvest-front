import React from 'react';
import PropTypes from 'prop-types';

import classes from './TeamMember.module.css';

/**
 * Component representing a team member's information.
 *
 * @param {Object} member - The member object containing information about the team member.
 * @param {string} member.image - The URL of the team member's image.
 * @param {string} member.name - The name of the team member.
 * @param {string} member.role - The role of the team member.
 * @returns {JSX.Element} - JSX element representing the team member.
 */
const TeamMember = ({ member }) => {
    const { image, name, role } = member;

    return (
        <div className={classes.member}>
            <div className={classes['member-photo']}>
                <img
                    src={image}
                    alt={`Avatar de ${name}`}
                    title={`${name}, ${role}`}
                    aria-label={`${name}, ${role}`}
                />
                <div className={classes['member-text']}>{name}<br />{role}</div>
            </div>
        </div>
    );
};

TeamMember.propTypes = {
    member: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }).isRequired,
};

export default TeamMember;
