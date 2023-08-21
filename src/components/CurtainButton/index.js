import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import React  from "react";
import 'font-awesome/css/font-awesome.min.css';
// import {faXmarkLarge} from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import {faXmark} from '@fortawesome/free-solid-svg-icons';
// import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const CurtainButton = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(prevState => !prevState);
    };
    return (
      // <div className="curtain-button" data-nav={isNavOpen}>
        <button
        data-nav={isNavOpen}
          id="nav-toggle"
          type="button"
          onClick={toggleNav}
        > 
          <FontAwesomeIcon icon={faXmark} />
          <FontAwesomeIcon icon={faCoffee} />
          
        </button>
      // </div>
    //   <div className={`curtain-button ${isNavOpen ? 'open' : ''}`}>
    // <button id="nav-toggle" type="button" onClick={toggleNav}>
    //     <FontAwesomeIcon icon={faXmark} className="icon-x" />
    //     <FontAwesomeIcon icon={faCoffee} className="icon-coffee" />
    // </button>
// </div>
      );
}

export default CurtainButton;