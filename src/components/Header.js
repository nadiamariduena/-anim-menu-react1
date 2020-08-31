import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
// withRouter will give access to the history PROP
// with the history we will be able to determine if the URL has been changed, so
// if it s change we will execute a certain command
import Hamburger from "./Hamburger";

const Header = ({ history }) => {
  // STATE FOR MENU BUTTON
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
  // Tho prevent SPAM on the button
  //     <button onClick={handleMenu}>Menu</button>
  // --------
  // STATE FOR DISABLED BUTTON
  const [disabled, setDisabled] = useState(false);

  // -----------               *           ---------------
  //
  //
  //
  // USE EFFECT FOR PAGE CHANGES

  useEffect(() => {
    // here we are going to listen for changes
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });

  /*










*/

  // --------
  // the function handleMenu will be specific to the BUTTON
  // so that when we will click the button this function will run
  // --------

  /*
  const handleMenu = () => {
    disabledMenu();
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
      // console.log(1);
    } else if (state.clicked === true) {
      //  click when open
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
      // console.log(2);
    } else if (state.clicked === false) {
      //  click to close
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      // console.log(3);
    }
  };

*/

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  /*
  
  // --------
  // connected to line 28
  // ----------
  // Determine of our button should be disabled or not
  
  const disabledMenu = () => {
  1_ whatever the opposite of disables currently is,its
     false right now, so it will be set to true 
    setDisabled(!disabled);
    //2_ and once its set to true , lets do a set time out...
    setTimeout(() => {
      //3_ and we want to set disable back to false
      setDisabled(false);
      // and that will happen after 1200 milliseconds
    }, 1200);
  };

    - we want it to run 1200 milliseconds
    - and we want this disabledMenu FUNCTION, to run in every
      handleMenu = () CALL, line 40, it should look like so:

         const handleMenu = () => {
            disabledMenu();
                if (state.initial === false) {
                  setState({


      ** So every time we click the button, we want this to
      run: 
                  const disabledMenu = () => {
                      setDisabled(!disabled);
                      setTimeout(() => {
                        setDisabled(false);
                      }, 1200);
                    };
      ** to make this work , you need to add now a disabled 
      attribute here:

              <button disabled={disabled} onClick={handleMenu}>
              the disabled attr , is going to prevent spam
                from happening, that spam can ruin the effect
                of the hamburger menu when opening and closing
                it, this disabled attr is linked to line :74 and 40
                Menu
              </button>

 */

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
              <button disabled={disabled} onClick={handleMenu}>
                {/* the disabled attr , is going to prevent spam
                from happening, that spam can ruin the effect
                of the hamburger menu when opening and closing
                it, this disabled attr is linked to line :74 and 40*/}
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
// withRouter will give access to the history PROP
// with the history we will be able to determine if the URL has been changed, so
// if it s change we will execute a certain command
