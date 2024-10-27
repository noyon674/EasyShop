import React from 'react';
import './header.scss';

import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import { RiShoppingBagLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../../redux/action/action';

function Header() {
  const dispatch = useDispatch()
  const cartList = useSelector(state=>state.cart)
  return (
    <div className="header-comp">
      <div className="left">
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/discount">DISCOUNT</NavLink>
          <NavLink to="/products">PRODUCTS</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>
        </nav>
      </div>
      <div className="middle">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="right">
        <input type="text" placeholder="Search..." />
        <div className="login-info">
          <Link>Login</Link>
          <span> / </span>
          <Link>Register</Link>
        </div>
        <Link className="cart" to='/cart'>
          <span>
            <RiShoppingBagLine />
          </span>
          <span>{cartList.length}</span>
        </Link>
        {/* <a onClick={e=>dispatch(resetCart())} href="">Reset</a> */}
      </div>
    </div>
  );
}

export default Header;
