import React from 'react';
import Logo from '../../Images/logo.png';
import Twitter from '../../Images/twitter.png'
import NavbarSmall from './NavbarSmall';
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
        <div className="navbar-cont" id="lg-nav">
            <div className="container-medium">
                <div className="navbar">
                    <div className="navbar-logo">
                        <img src={Logo} id="nav-logo"/>
                    </div>
                    <div className="navbar-menu">
                        <div className="nav-item"><a href='#overview'>Overview</a></div>
                        <div className="nav-item"><a href='#how'>How It Works</a></div>
                        <div className="nav-item"><a href="#features">Features</a></div>
                        <div className="nav-item"><a href="#roadmap">Roadmap</a></div>
                        <div className="nav-item"><a href="#team">Teams</a></div>
                        <div className="nav-item"><a href="#tokenomics">Tokenomics</a></div>
                    </div>
                </div>
            </div>
        </div>    
    )
}
