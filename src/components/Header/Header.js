import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div className="ui secondary pointing menu">
      <Link to="/" className="item"><i className="fas fa-home fa-2x">Home</i></Link>
      <Link to="/youtube" className="item"><i className ="fab fa-youtube fa-2x">Youtube</i></Link>
    </div>
  )
}

export default Header;
