import React from 'react';
import Logo from '../../Images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ReactComponent as Medium } from '../../Images/medium.svg';
import { ReactComponent as Discord } from '../../Images/discord.svg';
import Twitter from '@mui/icons-material/Twitter';

export default function NavbarSmall() {

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

    function expand(){
        const a=document.getElementById("bn");
        if (a.style.maxHeight){
            a.style.maxHeight = null;
          } else {
            a.style.maxHeight = a.scrollHeight + "px";
          } 
    }
    return (
        <div className="navbar-cont" id="sm-nav">
            <div className="container-medium">
                <div className="navbar">
                    <div className="navbar-logo">
                        <img src={Logo} id="nav-logo"/>
                    </div>
                    <MenuIcon onClick={expand}/>
                </div>
                <div className="sm-navbar-menu" id="bn">
                        <div className="sm-nav-item"><a href='#overview'>Overview</a></div>
                        <div className="sm-nav-item"><a href='#how'>How It Works</a></div>
                        <div className="sm-nav-item"><a href="#features">Features</a></div>
                        <div className="sm-nav-item"><a href="#roadmap">Roadmap</a></div>
                        <div className="sm-nav-item"><a href="#team">Teams</a></div>
                        <div className="nav-item"><a href="#tokenomics">Tokenomics</a></div>
                        <div className="sm-nav-item">
                            <a href="https://google.com" target="_blank">
                                <Medium className="small-item" style={{width:'20px',height:'20px',marginRight:'16px'}}/>
                            </a>
                            <a href="https://google.com" target="_blank">
                                <Discord className="small-item" style={{width:'20px',height:'20px',marginRight:'16px'}}/>
                            </a>
                            <a href="https://google.com" target="_blank">
                                <Twitter className="small-item" style={{width:'20px',height:'20px',color:'black',marginRight:'16px'}}/>
                            </a>
                            <a href="https://google.com" target="_blank">
                                <TelegramIcon className="small-item" style={{width:'20px',height:'20px',color:'black',marginRight:'16px'}}/>
                            </a>
                        </div>
                </div>
            </div>
        </div>    
    )
}