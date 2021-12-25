import React from 'react';
import TextField from '@mui/material/TextField';
import Crypto from '../../Images/crypto.png';
import PhoneInput from 'react-phone-input-2';
import Logo from '../../Images/logo.png';
import 'react-phone-input-2/lib/material.css'
import './Authentication.css';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';

export default function SignupPage() {
    return (
        <div className='login'>
            <img src="https://static.vecteezy.com/system/resources/previews/000/526/644/non_2x/vector-abstract-bitcoin-crypto-currency-blockchain-technology-background-illustration.jpg"  />
            <div className="container-medium">
               
                <div className="login-cont">
                    <div className="login-cont-1">
                    <img width="300px" src={Logo} alt="" />
                        <div className="main-title abc">
                           Register
                            {/* <div className="bar">
                                <div className="bar-box"></div>
                            </div> */}
                           <p style={{fontSize: '18px'}}>Create New SowLow Account
                               </p> 

                        </div>
                        <div className="login-cont-3">
                            <div className="signup-cont-2">
                                <TextField fullWidth={true} required label="Name" />
                            </div>
                            <div className="signup-cont-2">
                            <TextField fullWidth={true} required label="Phone No" />
                                
                            </div>
                        </div>
                            <div className="signup-cont-2" id="phone-no">
                        <TextField fullWidth={true} required label="Email Id" />
                            
                        </div>
                        
                        <div className="login-cont-3">
                            <div className="signup-cont-2">
                                <TextField fullWidth={true}  label="ETH Wallet Address" />
                            </div>
                            <div className="signup-cont-2">
                                <TextField fullWidth={true}  label="BTC Wallet Address" />
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

                    
                       <div style={{marginTop: '12px'}} className="login-cont-3">
                           <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree to terms and conditions by Sowlow"
                />
                       </div>
                
          
                        
                        <div className="login-btn" id="signup-btn">
                            Register
                        </div>
                        <div style={{marginTop: '25px', display: 'flex', justifyContent: 'space-evenly'}}>
                            <p>Already Have an Account ?</p>  <p style={{color: 'orange', marginLeft: '2px'}}>Login Instead</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
