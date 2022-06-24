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
      <SlideDrawer close={backdropClickHandler} show={drawerOpen} />
      <Main show={drawerOpen} toggle={drawerToggleClickHandler} />
    </div>
  );
};

export default Navbar;
