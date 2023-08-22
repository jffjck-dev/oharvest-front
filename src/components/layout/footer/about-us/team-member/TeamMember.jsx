import React from 'react';
import PropTypes from 'prop-types';

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
        <div className="aboutus__dev">
            <div className="aboutus__dev-photo">
                <img src={image} alt={name} className="aboutus__image" />
                <div className="aboutus__dev-image-hover">
                    <p className="aboutus__dev-text">{name}<br />{role}</p>
                </div>
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
