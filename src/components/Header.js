import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { logout } from '../actions/userActions';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className='header_area'>
        <div className='main_menu'>
          <div className='d-none d-md-flex mm-nav'>
            <Container className='m-nav'>
              <p className='pt-4'>
                <a
                  href='mailto:info@bestwatchesdeals.com'
                  className='text-danger mr-3 fa fa-envelope'
                ></a>
                <a
                  href='mailto:info@bestwatchesdeals.com'
                  className='text-primary mr-3 fab fa-facebook'
                ></a>
                <a
                  href='mailto:info@bestwatchesdeals.com'
                  className='text-dark fab fa-instagram mr-3'
                ></a>
                <a
                  href='mailto:info@bestwatchesdeals.com'
                  className='text-dark fab fa-twitter mr-3'
                ></a>
                
              </p>
              <Link to='/' className='navbar-brand mr-auto ml-auto text-dark'>
                {/* <img alt="logo" src='/images/logo/main_logo.jpeg' width="80px"/> */}
                <h2 className='text-gold' data-content="Rez Store">
                  <span>Rez Store</span>
                </h2>
              </Link>
              <Nav className='pt-3'>
                <NavItem className='d-none d-xl-inline'>
                  <NavLink to='/search' className='nav-link'>
                    <i className='fa fa-search text-dark'></i>
                  </NavLink>
                </NavItem>
                <NavItem className='d-none d-xl-inline'>
                  <NavLink to='/cart' className='nav-link btn-cart-lg'>
                    Cart [
                    {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}
                    ]
                  </NavLink>
                </NavItem>
                {userInfo ? (
                  <UncontrolledDropdown
                    nav
                    inNavbar
                    className='submenu text-dark'
                  >
                    <DropdownToggle nav caret className='text-dark'>
                      {userInfo.name}
                    </DropdownToggle>
                    <DropdownMenu>
                      <LinkContainer to='/profile'>
                        <DropdownItem>Profile</DropdownItem>
                      </LinkContainer>
                      {userInfo.isAdmin && (
                        <>
                          <LinkContainer to='/admin/users'>
                            <DropdownItem>Users</DropdownItem>
                          </LinkContainer>
                          <LinkContainer to='/admin/products'>
                            <DropdownItem>Products</DropdownItem>
                          </LinkContainer>
                          <LinkContainer to='/admin/orders'>
                            <DropdownItem>Orders</DropdownItem>
                          </LinkContainer>
                          <LinkContainer to='/admin/issues'>
                            <DropdownItem>Issues</DropdownItem>
                          </LinkContainer>
                        </>
                      )}

                      <DropdownItem onClick={logoutHandler}>
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ) : (
                  <NavItem>
                    <NavLink
                      to='/sign-in'
                      className='nav-link btn-cart text-dark'
                    >
                      Log In
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
              <div className='mt-3'></div>
            </Container>
          </div>
          <Navbar expand='xl'>
            <Container>
              <Link
                to='/'
                className='navbar-brand mr-auto ml-auto text-dark d-md-none'
              >
                {/* <img alt="logo" src='/images/logo.png' /> */}
                <h5 classname='text-gold' data-content="Rez Store"><span>Rez Store</span></h5>
              </Link>

              <NavLink
                to='/search'
                className='d-xl-none ml-auto mr-4 cart-mobile'
                style={{ position: 'relative' }}
              >
                <i className='fa fa-search'></i>
              </NavLink>
              <NavLink
                to='/cart'
                className='d-xl-none ml-auto mr-4 cart-mobile'
                style={{ position: 'relative' }}
              >
                <i className='fa fa-shopping-cart text-dark'></i>
                <span class='nav-shop__circle'>
                  {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}
                </span>
              </NavLink>

              <button
                className='navbar-toggler navbar-toggler'
                onClick={toggle}
                aria-expanded={isOpen}
                type='button'
              >
                <span className='navbar-toggler-bar top-bar'></span>
                <span className='navbar-toggler-bar middle-bar'></span>
                <span className='navbar-toggler-bar bottom-bar'></span>
              </button>
              <Collapse isOpen={isOpen} navbar>
                {userInfo ? (
                  <UncontrolledDropdown
                    nav
                    inNavbar
                    className='submenu text-dark d-flex d-md-none'
                  >
                    <DropdownToggle nav caret className='text-dark'>
                      {userInfo.name}
                    </DropdownToggle>
                    <DropdownMenu>
                      <LinkContainer to='/profile'>
                        <DropdownItem>Profile</DropdownItem>
                      </LinkContainer>
                      {userInfo.isAdmin && (
                        <>
                          <LinkContainer to='/admin/users'>
                            <DropdownItem>Users</DropdownItem>
                          </LinkContainer>
                          <LinkContainer to='/admin/products'>
                            <DropdownItem>Products</DropdownItem>
                          </LinkContainer>
                          <LinkContainer to='/admin/orders'>
                            <DropdownItem>Orders</DropdownItem>
                          </LinkContainer>
                          <LinkContainer to='/admin/issues'>
                            <DropdownItem>Issues</DropdownItem>
                          </LinkContainer>
                        </>
                      )}

                      <DropdownItem onClick={logoutHandler}>
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ) : (
                  <NavItem className='d-flex d-md-none'>
                    <NavLink
                      to='/sign-in'
                      className='nav-link btn-cart text-dark'
                    >
                      Log In
                    </NavLink>
                  </NavItem>
                )}
                {/* <Nav className='mr-auto ml-auto' navbar>
                  <NavItem>
                    <NavLink to='/categories/rolex' className='nav-link'>
                      Rolex
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/categories/breitling' className='nav-link'>
                      Breitling
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/categories/omega' className='nav-link'>
                      Omega
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/categories/tag-heuer' className='nav-link'>
                      Tag Heuer
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/categories/corum' className='nav-link'>
                      Corum
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/categories/michele' className='nav-link'>
                      Michele
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/categories/longines' className='nav-link'>
                      Longines
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/categories/montblanc' className='nav-link'>
                      Montblanc
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/categories/dior' className='nav-link'>
                      Christian Dior
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <div id='google_translate_element'></div>
                  </NavItem>
                </Nav> */}
              </Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
};

export default Header;
