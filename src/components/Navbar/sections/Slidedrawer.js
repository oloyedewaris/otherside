import React from "react";
import {Link} from 'react-router-dom';
import "./Slidedrawer.css";
import logo from '../../common/logo/logo'

const SlideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={`${drawerClasses} slider_con`}>
      <div className='route_top_con'>
        <div />
        <div className='route_top_name'>
          {logo}
        </div>
        <div onClick={props.close} style={{ fontSize: 28 }}>&#x2715;</div>
      </div>
      <div className='route_item_con'>
        <Link className='route_item' to='/the_world'>THE WORLD</Link>
        <Link className='route_item' to='/sdk'>SDK</Link>
        <Link className='route_item' to='/faq'>FAQ</Link>
        <Link className='route_item' to='/explore'>EXPLORE</Link>
        <Link className='route_item' to='/buy_othered'>BUY OTHERED</Link>
        <Link className='route_item' to='/claim_othered'>CLAIM OTHERED</Link>
        <Link className='route_item' to='/obelisk'>OBELISK</Link>
      </div>
    </div >
  );
};

export default SlideDrawer;
