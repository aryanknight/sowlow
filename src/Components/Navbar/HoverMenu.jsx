import React ,{useState} from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import Twitter from '@mui/icons-material/Twitter';
import { ReactComponent as Medium } from '../../Images/medium.svg';
import { ReactComponent as Discord } from '../../Images/discord.svg';
import './Navbar.css';

export default function HoverMenu() {

    /*-----------------Use only if not using Material Icons------------*/ 
    const [fill,setFill]=useState("white");
    const [fill1,setFill1]=useState("white");
    const fillColor =()=>{
        setFill("#000000");
    }
    const remColor =()=>{
        setFill("white");
    }
    const fillColor1 =()=>{
        setFill1("#000000");
    }
    const remColor1 =()=>{
        setFill1("white");
    }

    return (
        <div className="hover-menu">
            <div className="hover-menu-cont">
            <a href="https://google.com" target="_blank"><Twitter className="hover-item" /></a>
            <a href="https://google.com" target="_blank"><TelegramIcon className="hover-item" /></a>

            
            <a href="https://google.com" target="_blank">
                <Medium onMouseOver={fillColor} onMouseLeave={remColor} className="hover-item" fill={fill} style={{width:'20px',height:'20px'}}/>
            </a>

            <a href="https://google.com" target="_blank">
                <Discord onMouseOver={fillColor1} onMouseLeave={remColor1} className="hover-item" fill={fill1} style={{width:'20px',height:'20px'}}/>
            </a>
            
            </div>   
        </div>
    )
}