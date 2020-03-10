import React from 'react';
import { Navbar, NavbarBrand, NavItem, Nav } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { useSelector  } from 'react-redux';

function NavBar() {
  const cartCount = useSelector(st=> st.cart.length);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand to="/">Shoply</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem >
          <NavLink to="/cart">
            <i className="fa fa-shopping-cart fa-2x"><sup>{cartCount}</sup></i>
            </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar;