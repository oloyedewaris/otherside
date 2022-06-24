import { GitHub, Twitter, YouTube } from '@material-ui/icons';
import React from 'react';
import Animoca from '../../assets/logos/Animoca';
import Improbable from '../../assets/logos/Improbable';
import Yuga from '../../assets/logos/Yuga';
import Logo from '../common/logo/logo';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_icon_con' style={{ marginTop: 45, marginBottom: 20 }}>
        <Yuga/>
        <Improbable/>
        <Animoca/>
      </div>
      <div className='footer_icon_con' style={{ marginTop: 20, marginBottom: 35 }}>
        <Twitter size={20} />
        <GitHub size={20}/>
        <YouTube size={20} />
      </div>
      <div className='footer_info'>
        <span className='footer_item'>Terms and condition</span>
        <span className='footer_item'>Privacy</span>
        <span className='footer_item'>License</span>
        <span className='footer_item'>Net Purchase Agreement</span>
      </div>
      <p>© 2022 YUGA LABS INC.</p>
      <div style={{width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <Logo width={'360px'} height={'80px'} />
      </div>
    </div>
  )
}

export default Footer