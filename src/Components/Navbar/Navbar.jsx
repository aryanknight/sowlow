import React from 'react';
import Logo from '../../Images/logo.png';
import Twitter from '../../Images/twitter.png'
import "./Navbar.css";

export default function Navbar() {
    return (
            <div className="container-medium">
                <div className="navbar">
                    <div className="navbar-logo">
                        <img src={Logo} id="nav-logo"/>
                    </div>
                    <div className="navbar-menu">
                        <div className="nav-item">Overview</div>
                        <div className="nav-item">Features</div>
                        <div className="nav-item">Roadmap</div>
                    </div>
                    {/* <div className="navbar-menu">
                        <div className="nav-icons">
                            <img src={Twitter} className="nav-icon"/> 
                        </div>  
                        <div className="nav-icons">
                            <img src={Twitter} className="nav-icon"/> 
                        </div>  
                        <div className="nav-icons">
                            <img src={Twitter} className="nav-icon"/> 
                        </div>                
                    </div> */}
                </div>
            </div>
    )
}
