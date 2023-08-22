import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

/**
 * Modal Component to display content as a modal window.
 * @param {Object} props - The component props.
 * @param {boolean} props.isModalOpen - Indicates whether the modal is open.
 * @param {function} props.closeModal - Function to close the modal.
 * @param {ReactNode} props.children - Content to be displayed inside the modal.
 * @returns {ReactNode|null} - The modal or null if it's not open.
 */
const Modal = ({ isModalOpen, closeModal, children }) => {

    // for closing modal with keyboard navigation
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    // Create a portal to render the modal content into the body of the DOM, outside the component hierarchy
    return createPortal(
        // The overlay helps hide the background content and make the modal focusable
        isModalOpen && (
            <button
                className={classes.overlay}
                aria-label="Close Modal"
                onClick={closeModal}
                onKeyDown={handleKeyDown}
            >
                <div className={classes.modal}>
                    {children}
                </div>
            </button>
        ),
        // Attach the modal to the body to ensure proper rendering
        document.body
    );
};

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
