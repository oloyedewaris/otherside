import React from "react";

const Main = (props) => {
  return (
    <div className="media_slider" onClick={props.toggle}>
      <div className='nav_icon_con'>
        <div className="nav_icons" />
        <div className="nav_icons" />
        <div className="nav_icons" />
      </div>
    </div>
  );
};

export default Main;
