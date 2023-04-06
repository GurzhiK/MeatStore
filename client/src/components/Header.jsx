import React, { useState } from 'react';
import Basket from '../assets/img/basket.svg';
import Profile_icon from '../assets/img/profile-icon.svg';
import Logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import Search from './Search';


function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="bg-[#27272780] backdrop-blur-[5px]    lg:hidden    backdrop-grayscale-[80%] z-10 flex flex-row px-[70px] py-[23px] justify-between items-center fixed w-full">
        <Link to="/"><img src={Logo} alt="text" /></Link>
        <ul className="flex flex-row gap-x-[64px] float-left w-full ml-[64px] font-html flex-wrap items-center">
          <li className="text-[#fff] text-[16px] hover:text-mainLight duration-300"><Link to="/">Главная</Link></li>
          <li className="text-[#fff] text-[16px] hover:text-mainLight duration-300"><Link to="/">Товары</Link></li>
          <li className="text-[#fff] text-[16px] hover:text-mainLight duration-300"><Link to="/">О нас</Link></li>
          <Search />
        </ul>

        <div className="flex flex-row gap-x-[36px]">
          <Link to="/shopcart"><img src={Basket} alt="cart" className="min-w-[35px]" /></Link>
          <img src={Profile_icon} alt="text" />
        </div>
      </div>

      <nav>
        <section className="MOBILE-MENU md:flex header:hidden lg:flex fixed w-full bg-[#27272780] backdrop-blur-[5px]">
          <div className="flex items-center justify-around w-full">

            <div
              className="space-y-[5px]  cursor-pointer p-4"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
            </div>
            <Search />
            <Link to="/shopcart"><img src={Basket} alt="cart" className="min-w-[35px]" /></Link>


          </div>
          <div className={isNavOpen ? "fixed duration-300 backdrop-blur-md w-full h-[100vh] t-0 l-0 bg-[#272727c9] z-40 flex flex-col justify-evenly items:center" : "hidden"} onClick={() => setIsNavOpen(false)}>
            <div
              className="absolute top-0 right-0 px-8 py-9"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-400 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="flex flex-col items-center justify-between min-h-[250px] text-white text-2xl" onClick={() => setIsNavOpen(false)}>
              <li>
                <Link to='/' >Главная</Link>
              </li>
              <li>
                <Link to='/' >Товары</Link>
              </li>
              <li>
                <Link to='ShopCart' >О нас</Link>
              </li>
              <li>
                <Link to='Profile'>Профиль</Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
}

export default Header;
