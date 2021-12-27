import React from 'react'
import Logo from '../../Images/logo.png';
import {Link} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import User from '../../Images/user.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./Navbar.css";
import ArrowDownward from '@mui/icons-material/ArrowDownward';

export default function UserNavbar() {

    React.useEffect(()=>{
        window.addEventListener("scroll",function(){
            const nav=document.getElementsByClassName("bid-nav")[0];
            if(window.scrollY>0){
                if(nav?.style){
                    nav.style.boxShadow="0 7px 13px 0 rgb(0 0 0 / 10%)";
                    nav.style.backgroundColor="#ffffff";
                }
            }else{
                if(nav?.style){
                    nav.style.boxShadow="none";
                    nav.style.backgroundColor="#ffffff00";
                }
            }
        });
    },[])

    const showMenu=()=>{
        
    }
    
    return (
        <div className="navbar-cont bid-nav" id="user-lg-nav">
            <div className="container-medium">
                <div className="navbar">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={Logo} id="nav-logo"/>
                        </Link>
                    </div>
                    <div className="bidding-button-cont">
                        <Avatar src={User} style={{marginRight:'20px'}} />
                        <div className="menu-cont">
                            <div className="user-name">
                                My Account
                            </div>
                            <KeyboardArrowDownIcon/>
                            <div className="menu-cont-1">
                                <div className="menu-item">Biddiing History</div>
                                <div className="menu-item">My Profile</div>
                                <div className="menu-item">Log Out</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}
