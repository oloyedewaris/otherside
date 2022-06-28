import React, { useEffect, useState } from "react";
import Logo from '../../common/logo/logo';
import { Link } from 'react-router-dom';


const Main = (props) => {
  const [headerStyle, setHeaderStyle] = useState({ visibility: 'visible' });

  let oldScrollY = 0;
  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setHeaderStyle({ visibility: 'hidden' });
    } else {
      setHeaderStyle({ visibility: 'visible' });
    }
    oldScrollY = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', controlDirection);
    return () => {
      window.removeEventListener('scroll', controlDirection);
    };
  }, []);

  return (
    <div className='mobile_nav_con'>
      <div style={{ width: 50 }} />
      <Link to='/' className='logo_inverted' style={headerStyle}>
        <Logo />
      </Link>
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
