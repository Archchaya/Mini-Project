import React,{useState} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);
    return (
      <nav className="navbar">
        <h1 className="logo">Sabara Jobys</h1>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
         onClick={() => setIsMobile(false)}
        >
          <Link to="/main" className="main">
            <li>Home</li>
          </Link>
          <Link to="/login" className="lg">
            <li>Login</li>
          </Link>
          <Link to="/register" className="reg">
            <li>Register</li>
          </Link>
        </ul>
        <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className='fas fa-times'></i>
          ) : (
              <i className='fas fa-bars'></i>
          )}
        </button>
      </nav>
    );
};

export default Navbar;
