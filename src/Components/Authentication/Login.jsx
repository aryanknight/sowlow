import React from 'react';
import TextField from '@mui/material/TextField';
import Crypto from '../../Images/crypto.png';
import './Authentication.css';
import Logo from '../../Images/logo.png';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';

// export default function Login() {
//     return (
//         <div className='login'>
           
//             <div className="container-medium">
//                 <div className="login-cont">
//                     <div className="login-cont-1">
//                     <img width="300px" src={Logo} alt="" />
//                         <div className="main-title abc">
//                             Login
                            
//                         </div>
//                         <div className="login-cont-2">
//                             <TextField fullWidth={true} required placeholder="youremail@gmail.com" label="Email OR Username" />
//                         </div>
//                         <div className="login-cont-2">
//                             <TextField type="password" placeholder="password" fullWidth={true} required label="Password" />
//                         </div>
//                         {/* <div style={{marginTop: '12px'}} className="login-cont-3">
//                            <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="Remember Me"
//                 />
//                        </div> */}
//                         <div className="login-btn">
//                             Login
//                         </div>
//                         <div style={{marginTop: '25px', display: 'flex', justifyContent: 'space-evenly'}}>
//                             <p>New User ?</p>  <p style={{color: 'orange', marginLeft: '2px'}}>Register Now</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <img src="https://cache.amp.vg/cmap.amp.vg/img/c3szg12wptp2u/thumb-Multi-factor-Authentication-Demystified.jpg"  />
//         </div>
//     )
// }


export default function Login() {
    return (
        <div className='login'>
            <div className="login-cont">
                <div className="login-left">
                    <div className="login-cont-1">
                        <img src={Logo} className="login-img" />
                        <div className="login-head">Sign-In</div>
                        <div className="login-para">Access the SOLO Account using your email and passcode.</div>
                        
                        <div className="login-subhead">Email or Username</div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="youremail@gmail.com" label="Email Or Username" />
                        </div>
                        <div className="login-subhead">
                            <div className="login-subhead-1">Password</div>
                            <Link to="/reset">
                                <div className="login-subhead-2">Forgot Password?</div>
                            </Link>
                        </div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="password" label="Password" />
                        </div>

                        <div className="login-btn">
                            Sign in
                        </div>

                        <div className="login-para">New on our platform? 
                            <Link to="/signup">
                                <span style={{color:'#ff8a73',cursor:'pointer'}}> Create an account</span>
                            </Link>
                        </div>

                        <div className="or">OR</div>

                        <div className="or-option">
                            <div className="option">Facebook</div>
                            <div className="option">Google</div>
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
