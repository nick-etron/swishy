import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-bar">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="rightnav">
        <ul className="navlist">
          <li className="navitem">
            <Link to="/" className="navlink">
              Home
            </Link>
          </li>
          <li className="navitem">
            <Link to="/login" className="navlink">
              Login
            </Link>
          </li>
          <li className="navitem">
            <Link to="/register" className="navlink">
              Register
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="navlink">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Header;
