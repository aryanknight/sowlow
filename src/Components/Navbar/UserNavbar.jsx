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
            const nav=document.getElementsByClassName("bid-nav")[0];
                if(nav?.style){
                    nav.style.boxShadow="0 7px 13px 0 rgb(0 0 0 / 10%)";
                    nav.style.backgroundColor="#ffffff";
                }
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
                            <Link to="/signup">
                                <button className="intro-button">
                                    Connect Wallet
                                </button>
                            </Link>
                            <Link to="/login">
                                <button id="how-bid-btn" style={{backgroundColor:'#ffffff00'}}>
                                    Live Auctions
                                </button>
                            </Link>
                        {/* <Avatar src={User} style={{marginRight:'20px'}} /> */}
                        <div className="menu-cont">
                            <div className="user-name">
                                My Account
                            </div>
                            <KeyboardArrowDownIcon/>
                            <div className="menu-cont-1">
                                <div className="menu-cont-2">
                                <Link to="/user">
                                    <div className="menu-item">Bidding History</div>
                                </Link>
                                <Link to="/user-panel">
                                    <div className="menu-item">My Profile</div>
                                </Link>
                                <Link to="/user">
                                    <div className="menu-item">Log Out</div>
                                </Link>
                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}
