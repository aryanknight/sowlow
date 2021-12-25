import React from 'react';
import TextField from '@mui/material/TextField';
import Crypto from '../../Images/crypto.png';
import './Authentication.css';
import Logo from '../../Images/logo.png';
import { Checkbox, FormControlLabel } from '@mui/material';

export default function Login() {
    return (
        <div className='login'>
           
            <div className="container-medium">
                <div className="login-cont">
                    <div className="login-cont-1">
                    <img width="300px" src={Logo} alt="" />
                        <div className="main-title abc">
                            Login
                            
                        </div>
                        <div className="login-cont-2">
                            <TextField fullWidth={true} required placeholder="youremail@gmail.com" label="Email OR Username" />
                        </div>
                        <div className="login-cont-2">
                            <TextField type="password" placeholder="password" fullWidth={true} required label="Password" />
                        </div>
                        {/* <div style={{marginTop: '12px'}} className="login-cont-3">
                           <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Remember Me"
                />
                       </div> */}
                        <div className="login-btn">
                            Login
                        </div>
                        <div style={{marginTop: '25px', display: 'flex', justifyContent: 'space-evenly'}}>
                            <p>New User ?</p>  <p style={{color: 'orange', marginLeft: '2px'}}>Register Now</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://cache.amp.vg/cmap.amp.vg/img/c3szg12wptp2u/thumb-Multi-factor-Authentication-Demystified.jpg"  />
        </div>
    )
}
