import React from 'react'
import Logo from '../../components/common/logo/logo';
import './Home.css';

function Home() {
  return (
    <div>
      <div className='main_full_page'>
        <div className='logo_upright'>
          <Logo width={'300px'} height={'70px'} />
        </div>
        <div className='logo_inverted'>
          <Logo width={'300px'} height={'70px'} />
        </div>
      </div>
    </div>
  )
}

export default Home