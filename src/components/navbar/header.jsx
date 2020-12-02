import React from "react";
import axios from "axios";
import { Navbar, Container } from "react-bootstrap";

import Filter from "../filter/filter";
import Cart from "../cart/cart";

import BlanjaLogo from "../../assets/blanja-logo.svg";
import "../../styles/navbar/header.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg='light' expand='lg'>
          <Container>
            <Navbar.Brand href='#home'>
              <img src={BlanjaLogo} alt='Just logo' className='mb-3 mr-2' />
              Blanja
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <div className='input-group mx-auto'>
                <input
                  type='text'
                  className='form-control border-right-0'
                  placeholder='Search'
                  aria-label='Example text with button addon'
                  aria-describedby='button-addon1'
                />
                <span className='input-group-append'>
                  <div
                    className='input-group-text bg-transparent'
                    onClick={this.submitHandler}
                  >
                    <i className='fas fa-search'></i>
                  </div>
                </span>
              </div>
              <Filter />
              <Cart />
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item active mr-2'>
                  <a className='nav-link btn btn-full' href='#'>
                    Login
                  </a>
                </li>
                <li class='nav-item'>
                  <a className='nav-link btn btn-outline' href='#'>
                    Signup
                  </a>
                </li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;