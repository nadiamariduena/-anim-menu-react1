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
      // If the menu is closed and we want to open it.

      /*
      
                                                ---------------------------
                                                CLOSING THE MENU settings
                                                ---------------------------
      



                                                 menu.style.display = "none";     **** 
                                      
                                             YOU SHOULDNT HIDE THIS BEFORE ADDING THE GSAP anim. 
                                              otherwise it will make you crazy :)
      */

      //                                                *** G S A P * animations
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          // A staggered animation consists of sequential or overlapping animations.
          //
          amount: 0.07,
        },
      });
      // copy and paste the data below (from line 51 bis 54) take this info and past it in line 69
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" }, //display: none; is to say you want it hidden
      });

      /*



                                        ****** End Closing the menu  *****



    */
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenu, revealMenuBackground], {
        durantion: 0,
        opacity: 1,
        height: "100%",
      });
      /*
                                        AFTER COPY AND PASTE this:
                                            gsap.to(menu, {
                                            duration: 0,
                                            css: { display: "block" },
                                          });

                                          and changing the duration and the display: "block",
                                          you have to check it one the browser: it will opens when you click
                                          and also animate the layers of the dropdown when closing it, BUT when
                                          you try to open it again it will not work, and that is because you 
                                          haven't defined YEt the height, as if you look the height definition in 
                                          line 42, it s set to 0 , while here it isn't defined.

                                    **    So to remediate that you will have to add the following:

                                               gsap.to([revealMenu, revealMenuBackground], {
                                                            durantion: 0,
                                                            opacity: 1,
                                                            height: "100%",
                                                          });


                                          ONCE its done, go to the browser: open the Menu then Close it
                                          again, WAIT a second like its specified then open the MENU again
                                          now it should work.



      // open the menu
      // menu.style.display = "block";  YOU SHOULDNT HIDE THIS BEFORE ADDING THE GSAP anim. otherwise it will make you crazy :)
      // menu.style.display = "flex"; if you add flex, its going to show weirdly


*/
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
