import { GitHub, Twitter, YouTube } from '@material-ui/icons';
import React from 'react';
import Animoca from '../../assets/logos/Animoca';
import Improbable from '../../assets/logos/Improbable';
import Yuga from '../../assets/logos/Yuga';
import Logo from '../common/logo/logo';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className='footer_icon_con'>
        <Yuga />
        <Improbable />
        <Animoca />
      </div>
      <div className='footer_con'>
        <div>
          <Twitter className='footer_con_item' style={{fontSize: 20}} />
          <GitHub className='footer_con_item' style={{fontSize: 20}} />
          <YouTube className='footer_con_item' style={{fontSize: 20}} />
        </div>
        <div >
          <span className='footer_con_item'>Terms and condition</span>
          <span className='footer_con_item'>Privacy</span>
          <span className='footer_con_item'>License</span>
          <span className='footer_con_item'>Net Purchase Agreement</span>
        </div>
        <div className='copyright'>© 2022 YUGA LABS INC.</div>
      </div>
      <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Logo width={'90%'} height={'auto'} />
      </div>
    </footer>
  )
}

export default Footer