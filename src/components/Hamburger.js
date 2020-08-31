import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hamburger = ({ state }) => {
  let menu = useRef(null);

  // ----------------------

  useEffect(() => {
    if (state.clicked === false) {
      //close the menu
      menu.style.display = "none";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open the menu
      menu.style.display = "block";
      // menu.style.display = "flex"; if you add flex, its going to show weirdly
    }
  });

  return (
    //  hamburger menu---------------------------------------------------------
    // ref={el => (menu = el)}  , el  stands for element
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div className="menu-secondary-background-color">
        {/* what this div represents is:  
        
        if you look at the animation, when you click on the hamburger
        there are three layers that open t the same time while the menu
        is droping, the second layer you see underneath the white layer is this
        div.
        
        
        */}
      </div>

      <div className="menu-layer">
        <div className="menu-city-background"></div>

        <div className="wrapper">
          {/* -------nav -------- */}
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link to="/opportunities">Opportunities</Link>
                </li>
                <li>
                  <Link to="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>
              </ul>
            </nav>
            {/* -------nav -------- */}
            <div className="info">
              <h3>Our Promise.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti, provident. Excepturi unde nostrum aut labore debitis
                tempore consequuntur enim ea?
              </p>
            </div>
            {/* --- */}
            <div className="locations">
              Location
              <span>Paris</span>
              <span>London</span>
              <span>Berlin</span>
              <span>New York</span>
              <span>Amsterdam</span>
              <span>Perth</span>
              <span>Auckland</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // end hamburger menu---------------------------------------------------------
  );
};

export default Hamburger;
