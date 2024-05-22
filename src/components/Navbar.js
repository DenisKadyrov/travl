import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

   const handleMenuClick = () => setClick(!click);
   const clouseMobileMenu= () => setClick(false);
   
   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false);
      } else {
         setButton(true);
      }
   }

   window.addEventListener('resize', showButton)

   return (
   <>
      <nav className="navbar">
         <div className="navbar-container">
            <Link to='/' className='navbar-logo'>
               TRAVL <i className="fab fa-typo3"></i>
            </Link>
            <div className='menu-icon' onClick={handleMenuClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                  <Link 
                     to='/' 
                     className='nav-links' 
                     onClick={clouseMobileMenu}
                  >
                     Home
                  </Link>
               </li>   
               <li className='nav-item'>
                  <Link 
                     to='/services' 
                     className='nav-links' 
                     onClick={clouseMobileMenu}
                  >
                     Services
                  </Link>
               </li>   
               <li className='nav-item'>
                  <Link 
                     to='/products' 
                     className='nav-links' 
                     onClick={clouseMobileMenu}
                  >
                     Products
                  </Link>
               </li>   
               <li className='nav-item'>
                  <Link 
                     to='/Sign-up' 
                     className='nav-links-mobile' 
                     onClick={clouseMobileMenu}
                  >
                     Sign Up
                  </Link>
               </li>   
            </ul>
            {
               button && <Button buttonStyle='btn--outline'>
                  SIGN UP
               </Button>
            }
         </div>
      </nav> 
   </>
   )
}

export default Navbar