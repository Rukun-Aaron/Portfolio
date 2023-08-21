import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import React  from "react";

import { useState } from 'react';

const CurtainButton = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(prevState => !prevState);
    };
    return (
        <button
          data-nav={isNavOpen}
          id="nav-toggle"
          type="button"
          onClick={toggleNav}
        >
          <FontAwesomeIcon className='open' icon= " fa-light fa-xmark-large"/>
          <FontAwesomeIcon className='close' icon= "fa-light fa-xmark-large"/>
          {/* <i className="open fa-light fa-bars-staggered"></i>
          <i className="close fa-light fa-xmark-large"></i> */}
        </button>
      );
}

export default CurtainButton;