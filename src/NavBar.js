import React from 'react';
import { Navbar, NavItem, Nav } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import './NavBar.css';

function NavBar() {
  const cart = useSelector(st => st.cart);

  const totalQuantity = cart.reduce((acc, next) => {
    return acc + next.quantity
  },0);

  return (
    <Navbar color="light" light expand="md">
      <Nav >
        <NavLink exact to="/">
          Shoply
        </NavLink>
      </Nav>
      <Nav className="ml-auto" navbar>
        <NavItem >
          <NavLink exact to="/cart">
            <i className="fa fa-shopping-cart fa-2x"><sup>{totalQuantity}</sup></i>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar;