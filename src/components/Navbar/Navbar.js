import React, { useState } from "react";
import Main from "./sections/Main.js";
import SlideDrawer from "./sections/Slidedrawer.js";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);

  };

  return (
    <div>
      <div className='mobile_nav'>
        <SlideDrawer close={backdropClickHandler} show={drawerOpen} />
        <Main show={drawerOpen} toggle={drawerToggleClickHandler} />
      </div>
      <div className='desktop_nav'>
        <div>
          <span>THE WORLD</span>
          <span>SDK</span>
          <span>FAQ</span>
          <span>EXPLORE</span>
          <span>OBELISK</span>
        </div>
        <div>
          <span>OTHERED:</span>
          <span>BUY</span>
          <span>CLAIM</span>
          <button>CONNECT WALLET</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
