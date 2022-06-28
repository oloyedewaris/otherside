import React, { useState } from "react";
import Main from "./sections/Main.js";
import SlideDrawer from "./sections/Slidedrawer.js";
import DesktopNav from "./sections/DesktopNav.js";
import "./Navbar.css";


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  return (
    <div className='navbar_con'>
      <div className='mobile_nav'>
        <SlideDrawer close={backdropClickHandler} show={drawerOpen} />
        <Main show={drawerOpen} toggle={drawerToggleClickHandler} />
      </div>
      <DesktopNav/>
    </div>
  );
};

export default Navbar;
