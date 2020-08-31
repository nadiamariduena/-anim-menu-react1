import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hamburger = ({ state }) => {
  //
  // variables for our animated DOM nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  // ----------------------

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.
      //close the menu
      // menu.style.display = "none";  YOU SHOULD HIDE THIS BEFORE ADDING THE GSAP anim. otherwise i will make you crazy :)
      //                              * GSAP
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      menu.style.display = "block";
      // open the menu
      // menu.style.display = "block";  YOU SHOULD HIDE THIS BEFORE ADDING THE GSAP anim. otherwise i will make you crazy :)
      // menu.style.display = "flex"; if you add flex, its going to show weirdly
    }
  });

  return (
    //  hamburger menu---------------------------------------------------------
    // ref={el => (menu = el)}  , el  stands for element
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      >
        {/* what this div represents is:  
        
        if you look at the animation, when you click on the hamburger
        there are three layers that open t the same time while the menu
        is droping, the second layer you see underneath the white layer is this
        div.
        
        
        */}
      </div>

      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="menu-city-background"></div>

        <div className="wrapper">
          {/* -------nav -------- */}
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link ref={(el) => (line1 = el)} to="/opportunities">
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link ref={(el) => (line2 = el)} to="/solutions">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link ref={(el) => (line3 = el)} to="/contact-us">
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
            {/* -------nav -------- */}
            <div ref={(el) => (info = el)} className="info">
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
