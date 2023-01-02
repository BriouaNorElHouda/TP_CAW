import React from "react";
import "./Navbar.css";

import { Link } from 'react-router-dom';
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div  className="n-name"  >Kounor</div>
        
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li><Link to={"/"} >Home </Link></li>
            <li><Link to={"/blog"} > Blog</Link></li>
            <li><Link to={"/contact"} > Contact </Link>
            </li>
            
          </ul>
        </div>
        
        {/* <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link> */}
      </div>
    </div>
  );
};

export default navbar;
