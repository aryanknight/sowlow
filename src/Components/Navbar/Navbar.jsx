import React from 'react';
import Logo from '../../Images/logo.png';
import Twitter from '../../Images/twitter.png'
import "./Navbar.css";

export default function Navbar() {
    
    window.addEventListener("scroll",function(){
        const nav=document.getElementsByClassName("navbar-cont")[0];
        if(window.scrollY>0){
            nav.style.boxShadow="0 7px 13px 0 rgb(0 0 0 / 10%)";
            nav.style.backgroundColor="#ffffff";
        }else{
            nav.style.boxShadow="none";
            nav.style.backgroundColor="#ffffff00";
        }
    });

    return (
        <div className="navbar-cont">
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
        </div>    
    )
}
