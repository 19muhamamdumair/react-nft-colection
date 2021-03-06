import React from 'react';
import './Header.css';
import punkLogo from '../assests/header/cryptopunk-logo.png'
import searchIcon from '../assests/header/search.png'
import themeSwitchIcon from '../assests/header/theme-switch.png'
const Header = () => {
  return (
  <div className='header'>
      <div className='logoContainer'>
          <img src={punkLogo} className='punkLogo' alt=''/> 
      </div>
      <div className='searchBar'>
          <div className='searchIconContainer'>
              <img src={searchIcon}/>
          </div>
          <input className='searchInput' placeholder='anything'/>
      </div>
      <div className='headerItems'>
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
      </div>
      <div className='headerActions'>
          <div className='themeSwitchContainer'>
              <img src={themeSwitchIcon} alt=''/>
          </div>
      </div>
      <div className='loginButton'>GET IN</div>
  </div>
  )
};

export default Header;
