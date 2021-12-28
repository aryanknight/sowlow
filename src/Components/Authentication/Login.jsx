import React from 'react';
import TextField from '@mui/material/TextField';
import Crypto from '../../Images/crypto.png';
import './Authentication.css';
import Logo from '../../Images/logo.png';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Login() {
    return (
        <div className='login'>
            <div className="login-cont">
                <div className="login-left">
                    <div className="login-cont-1">
                        <img src={Logo} className="login-img" />
                        <div className="login-head">Sign-In</div>
                        <div className="login-para">Access the SOWLOW Account using your email and passcode.</div>
                        
                        <div className="login-subhead">Email or Username</div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="youremail@gmail.com"/>
                        </div>
                        <div className="login-subhead">
                            <div className="login-subhead-1">Password</div>
                            <Link to="/reset">
                                <div className="login-subhead-2">Forgot Password?</div>
                            </Link>
                        </div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="password"/>
                        </div>

                        <Link to="/user-panel">
                            <div className="login-btn">
                                Sign in
                            </div>
                        </Link>

                        <div className="login-para">New on our platform? 
                            <Link to="/signup">
                                <span style={{color:'#ff8a73',cursor:'pointer'}}> Create an account</span>
                            </Link>
                        </div>

                        {/* <div className="or">OR</div>

                        <div className="or-option">
                            <div className="option">Facebook</div>
                            <div className="option">Google</div>
                        </div> */}

                        <div className="policies">
                            <div className="policy">Terms&Condition</div>
                            <div className="policy">Privacy Policy</div>
                            <div className="policy">Help</div>
                        </div>
                        <div className="login-copyright">
                            © 2021 SOWLOW. All Rights Reserved.
                        </div>
                    </div>

                   
                </div>
                <div className="login-right">
                    <img src={Crypto} alt="" className="crypto-img" />
                </div>
            </div>
        </div>
    )
}
