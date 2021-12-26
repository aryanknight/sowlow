import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="container-medium">
                <div className="footer-cont">
                    <div className="footer-left">
                        <img src={Logo} id="footer-logo" />
                        <div className="footer-text">
                            SOWLOW Is a blockchain website that auctions based on lowest unique bid. 
                        </div>
                        <div className="copyright-cont" style={{marginTop:'40px'}}>
                        Copyright @ 2021 SOWLOW. All rights reserved
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-right-cont">
                            <div className="footer-head" style={{color:'black'}}>
                                Pages
                            </div>
                            <div className="footer-list">
                                <ul>
                                    <Link to="/faq">
                                        <li className="footer-list">FAQ</li>
                                    </Link>
                                    <Link to="/login">
                                        <li className="footer-list">Login</li>
                                    </Link>
                                    <Link to="/signup">
                                        <li className="footer-list">Sign-Up</li>
                                    </Link>
                                    <Link to="/reset">
                                        <li className="footer-list">Reset Password</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export function Footer1() {
    return (
        <div className='footer-1'>
            <div className="container-medium">
                <div className="footer-cont">
                    <div className="footer-left">
                        <img src={Logo} id="footer-logo" />
                        <div className="footer-text">
                            SOWLOW Is a blockchain website that auctions based on lowest unique bid. 
                        </div>
                        <div className="copyright-cont" style={{marginTop:'40px'}}>
                        Copyright @ 2021 SOWLOW. All rights reserved
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-right-cont">
                            <div className="footer-head" style={{color:'black'}}>
                                Pages
                            </div>
                            <div className="footer-list">
                                <ul>
                                    <Link to="/faq">
                                        <li className="footer-list">FAQ</li>
                                    </Link>
                                    <Link to="/bidding">
                                        <li className="footer-list">Bidding Page</li>
                                    </Link>
                                    <Link to="/login">
                                        <li className="footer-list">Login</li>
                                    </Link>
                                    <Link to="/signup">
                                        <li className="footer-list">Sign-Up</li>
                                    </Link>
                                    <Link to="/reset">
                                        <li className="footer-list">Reset Password</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}
