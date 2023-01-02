import React, { useContext } from "react";
import "./styles.css";
// import { themeContext } from "../../Context";
import plant from "../../img/plant.png"; 

import { Link } from 'react-router-dom';

const Intro = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  
  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name"> 
          <span style={{ color:  "#AA8B56"  }}>Hey There! We are </span>
          <span> Nor el houda & Kounouz</span>
          <span style={{ color: "rgb(170, 139, 86)"}}>
          Welcome to Our Homepage , you can browse our page with <br></br>
            <Link to="/contact"  ><button className="button n-button">Contact</button></Link>  or    .
            <Link to="/Blog" ><button className="button n-button">Blog</button></Link>  links.
            
      


          </span>
        </div>
        
      </div>
      
      {/* right image side */}
      <div className="i-right">
      <img src={plant} alt="image" />
      </div>
    </div>
  );
};

export default Intro;
