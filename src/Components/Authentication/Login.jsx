import React from 'react';
import TextField from '@mui/material/TextField';
import Crypto from '../../Images/crypto.png';
import './Authentication.css';

export default function Login() {
    return (
        <div className='login'>
            <img src={Crypto} id="login-img" />
            <div className="container-medium">
                <div className="login-cont">
                    <div className="login-cont-1">
                        <div className="main-title abc">
                            Login
                            <div className="bar">
                                <div className="bar-box"></div>
                            </div>
                        </div>
                        <div className="login-cont-2">
                            <TextField fullWidth={true} required label="Username" />
                        </div>
                        <div className="login-cont-2">
                            <TextField fullWidth={true} required label="Password" />
                        </div>
                        <div className="login-btn">
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
