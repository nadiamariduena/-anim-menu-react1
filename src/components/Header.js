import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = () => {
  const [state, setState] = useState({
    /*

                    **   the initial 
                    represents the origin or initial state of the page before changes
                    in this case its false or null, like in the firegram project(before the user 
                    click on the button)


                    **   clicked
                    represents the hamburger Menu


*/

    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // --------
  // the function handleMenu will be specific to the BUTTON
  // so that when we will click the button this function will run
  // --------

  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        //This is the state when you first open the page
        // initial there s nothing so it s NULL,
        initial: null,
        //  so then we click and it becomes true
        clicked: true,
        // and also when you click on it, the word "Menu" will change to "Close"
        menuName: "Close",
      });
      console.log(1);
    } else if (state.clicked === true) {
      //  click when open
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
      console.log(2);
    } else if (state.clicked === false) {
      //  click to close
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      console.log(3);
    }
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HANBRG</Link>
            </div>
            {/* ---------- */}
            <div className="menu">
              <button onClick={handleMenu}>Menu</button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------ */}
      <Hamburger />
    </header>
  );
};

export default Header;
