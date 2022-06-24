import React, { useEffect, useState } from "react";
import Logo from '../../common/logo/logo';


const Main = (props) => {
  const [headerStyle, setHeaderStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight - 10) {
        setHeaderStyle({ display: 'visible' })
      } else {
        setHeaderStyle({ display: 'none' })
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className='mobile_nav_con'>
      <div style={{width: 50}}/>
      <div style={headerStyle}>
        <Logo />
      </div>
      <div className="media_slider" onClick={props.toggle}>
        <div className='nav_icon_con'>
          <div className="nav_icons" />
          <div className="nav_icons" />
          <div className="nav_icons" />
        </div>
      </div>
    </div>
  );
};

export default Main;
