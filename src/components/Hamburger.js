import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

// After you are doing with the first phase of animations for the dropdown and text,
// start with the cities buttons hover by importing the images

import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";
import beijing from "../images/beijing.webp";

const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing },
];

/*



                                      AFTER YOU ASSIGN the Value to all the cities, go down in
                                      the return part where the cities are and replace them like so:


*/

// ----------------------------
const Hamburger = ({ state }) => {
  //
  // variables for our animated DOM nodes, they will go in each div starting from line: ....
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  // ----------------------
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
        height: 0, //0 : you will see nothing because it s hidden, go to line 71-76 to see when its open.
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
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info); //this anim concerns the <p> text , and it will fade in and out from the Y axe, check line 161
      staggerText(line1, line2, line3);
    }
  }, [state]);
  // ----------------------
  //  end of USE-EFFECT
  // ----------------------
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

                                    **    So to remediate that you will have to add the following(line 73):

                                               gsap.to([revealMenu, revealMenuBackground], {
                                                            duration: 0,
                                                            opacity: 1,
                                                            height: "100%",
                                                          });


                                          ONCE its done, go to the browser: open the Menu then Close it
                                          again, WAIT a second like its specified, then open the MENU again
                                          now it should work. This is due to the height 100%



      // open the menu
      // menu.style.display = "block";  YOU SHOULDNT HIDE THIS BEFORE ADDING THE GSAP anim. otherwise it will make you crazy :)
      // menu.style.display = "flex"; if you add flex, its going to show weirdly



                                                            **


              The following stagger animation is useless and will work only if you add the following
                          in line 113:

                          staggerReveal(revealMenuBackground, revealMenu);

                          and after that you add the following in line 115, like so: 
 
 
                                      DESCRIPT:
                                      
                                      NODE 1 represents: revealMenuBackground
                                      NODE 2 represents : revealMenu



*/

  // staggerReveal function animation  ****
  // COPY AND PASTE this function one more time for the next animations
  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };
  //
  // 2 function
  //  fadeInUp(info); //this anim concerns the <p> text , and it will fade in and out from the Y axe,
  // check line 79, there you must to add the name of this function so that the set up run.

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  //
  // 3 function, in this one you will pass 3 parameters
  // THE REASON why there s 3, it s because we have 3 lines (check line 12, 13,14)
  // the 3 lines correspond to: OPPORTUNITIES, SOLUTIONS, CONTACT
  // So these 3 nodes/lines are going to represent the 3 Links in line:221

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.5,
      },
    });
  };

  /*


                                    **   FUNCTIONS related to the Cities   **
*/

  // this function is going to handle the city whenever we hover On
  const handleCity = (city) => {
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${city})  center center`,
    });
    //
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
    //
    gsap.from(cityBackground, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    });
  };
  /* this will handle the cities in MOUSE out, so when you will remove the hover on the correspondent city. the
    image will vanish because the opacity will RETURN to 0   */

  const handleCityReturn = () => {
    gsap.from(cityBackground, {
      duration: 0.4,
      opacity: 1,
    });
  };
  // ----
  // hover                              OPPORTUNITIES - SOLUTIONS -CONTACTS
  // ----
  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewY: 2,
      ease: "power3.inOut",
    });
  };

  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewY: 0,
      ease: "power3.inOut",
    });
  };

  // ----------------------
  // ----------------------

  return (
    // ref={el => (menu = el)}  , el  stands for element
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      >
        {/* what this div represents is:  
        
        if you look at the animation, when you click on the hamburger
        there are three layers that open t the same time while the menu
        is dropping, the second layer you see underneath the white layer is this
        div.
        
        */}
      </div>

      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div
          ref={(el) => (cityBackground = el)}
          className="menu-city-background"
        ></div>

        <div className="wrapper">
          {/* -------nav -------- */}
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line1 = el)}
                    to="/opportunities"
                  >
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line2 = el)}
                    to="/solutions"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line3 = el)}
                    to="/contact-us"
                  >
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
              Locations:
              {cities.map((el) => (
                <span
                  key={el.name}
                  onMouseEnter={() => handleCity(el.image)}
                  onMouseOut={handleCityReturn}
                >
                  {el.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    // end hamburger menu------------------------------------------
  );
};

export default Hamburger;

/*

                                                        ****

                                  I wanted to save this version, before cleaning it.
                                  The objective is to show that you can economize time when
                                  creating functions for the animations





import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hamburger = ({ state }) => {

// variables for our animated DOM nodes, they will go in each div starting from line: ....
let menu = useRef(null);
let revealMenu = useRef(null);
let revealMenuBackground = useRef(null);
let cityBackground = useRef(null);
let line1 = useRef(null);
let line2 = useRef(null);
let line3 = useRef(null);
let info = useRef(null);

// ----------------------
// ----------------------
useEffect(() => {
  // If the menu is open and we click the menu button to close it.
  if (state.clicked === false) {
    // If the menu is closed and we want to open it.

    //                                                *** G S A P * animations
    gsap.to([revealMenu, revealMenuBackground], {
      duration: 0.8,
      height: 0, //0 : you will see nothing because it s hidden, go to line 71-76 to see when its open.
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

    // ---------
  } else if (
    state.clicked === true ||
    (state.clicked === true && state.initial === null)
  ) {
    gsap.to(menu, {
      duration: 0,
      css: { display: "block" },
    });
    gsap.to([revealMenuBackground, revealMenu], {
      duration: 0,
      opacity: 1,
      height: "100%",
    });
    staggerReveal(revealMenuBackground, revealMenu);
  }
}, [state]);


// 
// -------------- RETURN
// 
  return (
    // ref={el => (menu = el)}  , el  stands for element
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      >
       
        </div>

        <div ref={(el) => (revealMenu = el)} className="menu-layer">
          <div className="menu-city-background"></div>
  
          <div className="wrapper">
         
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
       
              <div ref={(el) => (info = el)} className="info">
                <h3>Our Promise.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti, provident. Excepturi unde nostrum aut labore debitis
                  tempore consequuntur enim ea?
                </p>
              </div>
           
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

    );
  };
*/
