import React from 'react'
import Logo from '../../components/common/logo/logo';
import './Home.css';

function Home() {
  return (
    <div className='home_main'>
      <div className='logo_upright'>
        <Logo width={'80vw'} height={'150px'} />
      </div>
      <div className='logo_inverted'>
        <Logo width={'80vw'} height={'500px'} />
      </div>
    </div>
  )
}

export default Home