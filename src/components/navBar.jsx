import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import logo from '../icons/marvel-mania-logo.svg';

const NavBar = ({user}) => {
    //const color ="#E3E0E0"
    const color ="#242E86"
    return ( 
      //	background-color: rgb(0,0,0);background-color: rgba(0,0,0, 0.25); /* Black w/opacity/see-through */
     <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:color }}>
       <div style={{position:"relative", float:"left", maxWidth:"inherit"}} className="container">
       <Link className="navbar-brand" to="/home" style={{marginRight:50}}>
             <img src={logo} height="60px" width="100px"/>
       </Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav">
       <li className="nav-item">
              <NavLink  className="nav-link" activeClassName="nav-link border-bottom border-light" to="/home">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link border-bottom border-light" to="/movies">MOVIES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link border-bottom border-light" to="/favorites">FAVORITES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link border-bottom border-light" to="/about">ABOUT</NavLink>
            </li>
       </ul>
       </div>
       </div>
        {!user && (
        <React.Fragment>
        <div style={{position:"relative", maxWidth:"fit-content", float:"right"}} className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link border-bottom border-light" to="/register">SIGN&nbsp;UP</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link border-bottom border-light" to="/login">SIGN&nbsp;IN</NavLink>
            </li>
          </ul>
        </div>
        </React.Fragment>
        )}
        {user && (
        <React.Fragment>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user.name}
              </button>
              <div style={{width:"50px"}} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to="/profile"className="dropdown-item btn btn-light">Profile</Link>
                <Link to="/logout"className="dropdown-item btn btn-light" >Sign Out</Link>
              </div>
            </div>            
            </li>
          </ul>
        </div>
        </React.Fragment>
        )}
      </nav>
     );
}
 
export default NavBar;