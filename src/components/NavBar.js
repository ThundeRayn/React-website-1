import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu= () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 968){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  window.addEventListener('resize',showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Onetrack &thinsp; <i class="fa fa-check-square" aria-hidden="true"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/milestone' className='nav-links' onClick={closeMobileMenu}>
                Milestone
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/task' className='nav-links' onClick={closeMobileMenu}>
                Task manage
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/expense' className='nav-links' onClick={closeMobileMenu}>
                expense track
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/members' className='nav-links' onClick={closeMobileMenu}>
                members
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/log-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                Log in
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>LOG IN</Button>}
        </div>
    </nav>
    </>
  )
}

export default NavBar;
