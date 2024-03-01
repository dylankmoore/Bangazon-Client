/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      id="enter"
      style={{
        height: '70vh',
        padding: '400px',
      }}
    >
      <img src="/bangazon.png" alt="logo" className="nav-logo" width="400" height="150" /><br />
      <Button type="button" id="signin" size="lg" className="copy-btn" onClick={signIn}>
        <b>sign in</b>
      </Button><br />
      <Link passHref href="/registration">
        <div>
          <Button type="button" id="regbtn" size="lg" className="copy-btn">
            <b>register</b>
          </Button>
        </div>
      </Link>
      <br />
      <br /><br />
    </div>
  );
}

export default Signin;
