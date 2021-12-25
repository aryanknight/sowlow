import React from 'react';
import TextField from '@mui/material/TextField';
import Crypto from '../../Images/crypto.png';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/material.css'
import './Authentication.css';

export default function SignupPage() {
    return (
        <div className='login'>
            <img src={Crypto} id="login-img" />
            <div className="container-medium">
                <div className="login-cont">
                    <div className="login-cont-1">
                        <div className="main-title abc">
                            Sign Up
                            <div className="bar">
                                <div className="bar-box"></div>
                            </div>
                        </div>
                        <div className="login-cont-3">
                            <div className="signup-cont-2">
                                <TextField fullWidth={true} required label="Name" />
                            </div>
                            <div className="signup-cont-2">
                                <TextField fullWidth={true} required label="Email Id" />
                            </div>
                        </div>
                        
                        <div className="login-cont-3">
                            <div className="signup-cont-2">
                                <TextField fullWidth={true} required label="ETH Wallet Address" />
                            </div>
                            <div className="signup-cont-2">
                                <TextField fullWidth={true} required label="BTC Wallet Address" />
                            </div>
                        </div>
                        
                        <div className="login-cont-3">
                            <div className="signup-cont-2">
                                <TextField fullWidth={true} required label="Password" />
                            </div>
                            <div className="signup-cont-2">
                                <TextField fullWidth={true} required label="Confirm Password" />
                            </div>
                        </div>

                        <div className="signup-cont-2" id="phone-no">
                            <TextField fullWidth={true} required label="Phone No with Country Code" />
                            {/* <PhoneInput
                                country={'us'}
                                fullWidth={true}
                                
                                onChange={phone => this.setState({ phone })}
                            /> */}
                        </div>

                        
                        <div className="login-btn" id="signup-btn">
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
