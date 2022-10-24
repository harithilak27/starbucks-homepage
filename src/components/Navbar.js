import React, { useState } from 'react'
import Logo  from './images/logo.png'
import './Navbar.css'


function Navbar() {

  const [click,setclick] = useState(false);

  const handleClick = () => setclick(!click);

  return (
    <>
      <nav className='navbar'>
        <div className={click ? 'navbar-container active' : 'navbar-container'} id='space-around'>

        <ul className='nav-menu'>
        <a>
          <img className='navbar-logo'src={Logo} alt=''></img>
        </a>
        <div className='menu-icon hidden'  onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>    
            <li className='nav-item'>
              <b>MENU</b>
            </li>
            <li className='nav-item'>
              <b>REWARDS</b>
            </li>
            <li className='nav-item'>
              <b>GIFT CARDS</b>
            </li>  
              </ul> 
              <ul className='nav-menu'>     
            <li className='nav-item'>
              <i class='fa fa-map-marker'/>       <b>find a store</b>
            </li>
            <li className='nav-item '>
              <button className='signup'>Sign up</button>
            </li>
            <li className='nav-item'>
              <button className='join'>Join now</button>
            </li>        
          </ul>          
        </div>
      </nav>
    </>
  )
}

export default Navbar
