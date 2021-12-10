import React from 'react';
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
                            SOWLOW Is a blockchain website that auctions based on lowest unique bid. Unlike your regular auction websites where highest bidder wins, SOWLOW rewards you for being the lowest-unique bidder at the end of every auction.
                        </div>
                        <div className="copyright-cont" style={{marginTop:'40px'}}>
                        Copyright @ 2019 Crake. All rights reserved
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-right-cont">
                            <div className="footer-head" style={{color:'black'}}>
                                Support
                            </div>
                            <div className="footer-list">
                                <ul>
                                    <li className="footer-list">Item1</li>
                                    <li className="footer-list">Item1</li>
                                    <li className="footer-list">Item1</li>
                                    <li className="footer-list">Item1</li>
                                    <li className="footer-list">Item1</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}
