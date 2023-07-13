/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.scss';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; { year }</p>
    </footer>
  )
}

export default Footer;