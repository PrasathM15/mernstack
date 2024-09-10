import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li><NavLink to ="/Home.js">HOME</NavLink></li>
        <li><NavLink to ="/About.js">ABOUT</NavLink></li>
        <li><NavLink to ="/Contact.js">CONTACT</NavLink></li>
      </ul>
     
    </div>
  );
};




export default Header; 