import React from "react";

import '../hamburger/Hamburger.css';

const Hamburger = props => {
    const showMenu = () => {
            (props.hidden === 'shown') ? (props.setHidden('hidden')) : (props.setHidden('shown'))
        };
  return (
    <>
      <div className="Hamburger" onClick={showMenu}>
        <div className="container">

          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
    </>
  );
};
export default Hamburger;


