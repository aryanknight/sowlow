import React from 'react';
import Logo from '../../Images/logo.png';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ReactComponent as Medium } from '../../Images/medium.svg';
import { ReactComponent as Discord } from '../../Images/discord.svg';
import Twitter from '@mui/icons-material/Twitter';

export default function BiddingSmall() {

    React.useEffect(()=>{
    window.addEventListener("scroll",function(){
        const nav=document.getElementById("sm-nav");
        if(window.scrollY>0){
            nav.style.boxShadow="0 7px 13px 0 rgb(0 0 0 / 10%)";
            nav.style.backgroundColor="#ffffff";
        }else{
            nav.style.boxShadow="none";
            nav.style.backgroundColor="#ffffff00";
        }
    });
},[])

    return (
        <div className="navbar-cont" id="sm-nav">
            <div className="container-medium">
                <div className="navbar">
                    <div className="navbar-logo">
                        <img src={Logo} id="nav-logo"/>
                    </div>
                    <div className="bidding-button-cont">
                            <Link to="/">
                                <button className="intro-button">
                                    Sign Up
                                </button>
                            </Link>
                            <button id="how-bid-btn">
                                    Login
                            </button>
                    </div>
                </div>
            </div>
        </div>    
    )
}