import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import './Navbar.scss';
import config from "./../../../config"
const {BASE_API_URL} = config;

const data1 = [
  {
    label: 'HOME',
    to: '/',
  },
  // {
  //   label: 'SERVICES',
  //   to: '/services',
  // },
  {
    label: 'ABOUT',
    to: '/about',
  },
  {
    label: 'CONTACT',
    to: '/contact',
  },
  
  {
    label: 'LOGIN/SIGNUP',
    to: '/user',
  },
];

const data2 = [
  {
    label: 'CLARITYHUB',
    to: '/clarityhub',
  },
  {
    label: 'TALKSPHERE',
    to: '/talksphere',
  },
  {
    label: 'MENTORMAGIC',
    to: '/mentormagic',
  },
  {
    label: 'JOYJUNCTION',
    to: '/joyjunction',
  },
  {
    label: 'DASHBOARD',
    to: '/dashboard',
  },
];

function Navbar({ userInfo, setUserInfo }) {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [userData, setUserData] = useState({}); 
  const location = useLocation();
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const closeMenu = () => {
    setToggleIcon(false);
  };

  useEffect(() => {
    if (userInfo && userInfo.isSignin) {
      (async () => {
        try {
          const response = await fetch(`${BASE_API_URL}/auth/user`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${userInfo.token}`
            },
          });
          const result = await response.json();
          const {data} = result
          setUserData(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [userInfo]);

  let navItems;
  if (userInfo && userInfo.isSignin) {
    navItems = data2.map((item, key) => (
      <li key={key} className={`navbar__container__menu__item ${location.pathname === item.to ? 'active' : ''}`}>
        <Link
          className='navbar__container__menu__item__links'
          to={item.to}
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      </li>
    ));
    navItems.push(
      <li key="username" className="navbar__container__menu__item">
        <span className="navbar__container__menu__item__username">Hi, {userData.name}</span>
      </li>
    );
  } else {
    navItems = data1.map((item, key) => (
      <li key={key} className={`navbar__container__menu__item ${location.pathname === item.to ? 'active' : ''}`}>
        <Link
          className='navbar__container__menu__item__links'
          to={item.to}
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      </li>
    ));
  }

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar__container'>
          <Link to={'/'} className='navbar__container__main' onClick={closeMenu}>
            <h2>edUnity</h2>
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
          {navItems}
        </ul>
        <div className='nav-icon' onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;