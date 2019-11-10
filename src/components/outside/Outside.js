import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, vanishMenu) {
    // Alert if clicked on outside of element

    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            vanishMenu();
        }
    }

    useEffect(() => {
        // Bind event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind event listener
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}

// Component that alerts upon outside click

function OutsideAlerter(props) {
    const vanishMenu = () => {
        // Ternary Version
        // (props.hidden === 'shown') ? (props.setHidden('hidden')) : (props.setHidden('shown'))
        if (props.hidden === 'shown') {
            props.setHidden('hidden');
        }
    };
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, vanishMenu);

    return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired
};

export default OutsideAlerter;