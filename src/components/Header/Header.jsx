import React from 'react';
import './Header.css';
import Logo from './Logo/Logo';
import AccountBeforeAuthorization from './AccountBeforeAuthorization/AccountBeforeAuthorization';
import AccountAfterAuthorization from './AccountAfterAuthorization/AccountAfterAuthorization';
import NavBar from './NavBar/NavBar';
import BurgerMenu from './BurgerMenu';
import { useSelector } from 'react-redux';

function Header() {
  const accountInfo = useSelector((state)=>state.profile.companyInfo);
  const AccountElement = accountInfo ? AccountAfterAuthorization : AccountBeforeAuthorization
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Logo />
        <NavBar />
        <AccountElement />
        <BurgerMenu />
      </div>  
    </header>
  )
}

export default Header
