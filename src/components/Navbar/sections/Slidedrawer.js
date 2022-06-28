import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../common/logo/logo';
import Footer from '../../Footer/Footer';

const SlideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={`${drawerClasses} slider_con`}>
      <div className='route_top_con'>
        <div />
        <Link to='/' onClick={props.close} className='route_top_name'>
          <Logo />
        </Link>
        <div onClick={props.close} style={{ fontSize: 28 }}>&#x2715;</div>
      </div>
      <div className='route_item_con'>
        <Link onClick={props.close} className='route_item' style={{ borderRight: '1px solid #fff', borderTop: '1px solid #fff' }} to='/the_world'>THE WORLD</Link>
        <Link onClick={props.close} className='route_item' style={{ borderTop: '1px solid #fff' }} to='/sdk'>SDK</Link>
        <Link onClick={props.close} className='route_item' style={{ borderRight: '1px solid #fff' }} to='/faq'>FAQ</Link>
        <Link onClick={props.close} className='route_item' to='/explore'>EXPLORE</Link>
        <Link onClick={props.close} className='route_item' style={{ borderRight: '1px solid #fff' }} to='/buy_othered'>BUY OTHERED</Link>
        <Link onClick={props.close} className='route_item' to='/claim_othered'>CLAIM OTHERED</Link>
        <Link onClick={props.close} className='route_item' to='/obelisk'>OBELISK</Link>
      </div>
      <Footer />
    </div >
  );
};

export default SlideDrawer;
