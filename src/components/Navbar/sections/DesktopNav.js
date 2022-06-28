import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../common/logo/logo'

const DesktopNav = () => {
  return (
    <div className='desktop_nav'>
      <div style={{width: '30%'}}>
        <NavLink activeClassName="nav_active" to='/the_world'>THE WORLD</NavLink>
        <NavLink activeClassName="nav_active" to='/sdk'>SDK</NavLink>
        <NavLink activeClassName="nav_active" to='/faq'>FAQ</NavLink>
        <NavLink activeClassName="nav_active" to='/explore'>EXPLORE</NavLink>
        <NavLink activeClassName="nav_active" to='/obelisk'>OBELISK</NavLink>
      </div>
      <NavLink to='/' className='logo_inverted'>
        <Logo />
      </NavLink>
      <div style={{ width: '30%' }}>
        <NavLink to='/'>OTHERED:</NavLink>
        <NavLink to='/'>BUY</NavLink>
        <NavLink to='/'>CLAIM</NavLink>
        <button className='connect_button'>
          <span>CONNECT WALLET</span>
          <span>METAMASK</span>
          <span>COINBASE</span>
          <span>WALLETCONNECT</span>
        </button>
      </div>
    </div>
  )
}

export default DesktopNav;