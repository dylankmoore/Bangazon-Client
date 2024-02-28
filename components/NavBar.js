/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navi">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <img src="/bangazon.png" alt="logo" className="nav-logo" width="170" height="30" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}&nbsp;&nbsp;&nbsp;&nbsp;
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/profile">
              <Nav.Link>Profile</Nav.Link>
            </Link>
            <Link passHref href="/product-categories">
              <Nav.Link>Product Categories</Nav.Link>
            </Link>
            <Link passHref href="/order-history">
              <Nav.Link>Order History</Nav.Link>
            </Link>
            <Link passHref href="/seller-dashboard">
              <Nav.Link>Seller Dashboard</Nav.Link>
            </Link>
            <Link passHref href="/cart">
              <Nav.Link>Cart</Nav.Link>
            </Link>
            <button
              type="button"
              onClick={signOut}
              style={{
                border: 'none',
                background: 'none',
                marginLeft: '380px',
                padding: '0',
              }}
            >
              <img
                src="/signout.png"
                alt="signout"
                className="nav-logo"
                width="140"
                height="30"
                style={{ cursor: 'pointer' }}
              />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
