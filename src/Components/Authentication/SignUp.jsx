import React from 'react';
import TextField from '@mui/material/TextField';
import Crypto from '../../Images/crypto.png';
import Checkbox from '@mui/material/Checkbox';
import PhoneInput from 'react-phone-input-2';
import Logo from '../../Images/logo.png';
import 'react-phone-input-2/lib/material.css'
import './Authentication.css';
import { Link } from 'react-router-dom';

// export default function SignupPage() {
//     return (
//         <div className='login'>
//             <img src="https://static.vecteezy.com/system/resources/previews/000/526/644/non_2x/vector-abstract-bitcoin-crypto-currency-blockchain-technology-background-illustration.jpg"  />
//             <div className="container-medium">
               
//                 <div className="login-cont">
//                     <div className="login-cont-1">
//                     <img width="300px" src={Logo} alt="" />
//                         <div className="main-title abc">
//                            Register
//                             {/* <div className="bar">
//                                 <div className="bar-box"></div>
//                             </div> */}
//                            <p style={{fontSize: '18px'}}>Create New SowLow Account
//                                </p> 

//                         </div>
//                         <div className="login-cont-3">
//                             <div className="signup-cont-2">
//                                 <TextField fullWidth={true} required label="Name" />
//                             </div>
//                             <div className="signup-cont-2">
//                             <TextField fullWidth={true} required label="Phone No" />
                                
//                             </div>
//                         </div>
//                             <div className="signup-cont-2" id="phone-no">
//                         <TextField fullWidth={true} required label="Email Id" />
                            
//                         </div>
                        
//                         <div className="login-cont-3">
//                             <div className="signup-cont-2">
//                                 <TextField fullWidth={true}  label="ETH Wallet Address" />
//                             </div>
//                             <div className="signup-cont-2">
//                                 <TextField fullWidth={true}  label="BTC Wallet Address" />
//                             </div>
//                         </div>
                        
//                         <div className="login-cont-3">
//                             <div className="signup-cont-2">
//                                 <TextField fullWidth={true} required label="Password" />
//                             </div>
//                             <div className="signup-cont-2">
//                                 <TextField fullWidth={true} required label="Confirm Password" />
//                             </div>
//                         </div>

                    
//                        <div style={{marginTop: '12px'}} className="login-cont-3">
//                            <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I agree to terms and conditions by Sowlow"
//                 />
//                        </div>
                
          
                        
//                         <div className="login-btn" id="signup-btn">
//                             Register
//                         </div>
//                         <div style={{marginTop: '25px', display: 'flex', justifyContent: 'space-evenly'}}>
//                             <p>Already Have an Account ?</p>  <p style={{color: 'orange', marginLeft: '2px'}}>Login Instead</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



export default function SignupPage() {
    return (
        <div className='signup'>
            <div className="login-cont">
                <div className="login-left">
                    <div className="login-cont-1">
                        <img src={Logo} className="login-img" />
                        <div className="login-head">Register</div>
                        <div className="login-para">Create New SOLO Account</div>
                        
                        <div className="login-subhead">Name</div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="Name" />
                        </div>

                        <div className="login-subhead">Email</div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="youremail@gmail.com" />
                        </div>

                        <div className="login-subhead">Phone Number</div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="+91 1100110011" />
                        </div>

                        <div className="login-subhead">ETH Wallet Address</div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="ETH Wallet Address" />
                        </div>

                        <div className="login-subhead">BTC Wallet Address</div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="BTC Wallet Address" />
                        </div>

                        <div className="login-subhead">Password</div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="Password" />
                        </div>

                        <div className="login-subhead">Confirm Password</div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="Confirm Password" />
                        </div>

                        {/* <div className="login-subhead">
                            <div className="login-subhead-1">Password</div>
                            <div className="login-subhead-2">Forgot Password?</div>
                        </div>
                        <div className="cred-cont">
                            <TextField fullWidth={true} required placeholder="password" label="Password" />
                        </div> */}

                        <div className="login-btn">
                            Register
                        </div>

                        <div className="login-para"> 
                            <Checkbox  size="medium"/> I agree to SOWLOW<span style={{color:'#ff8a73',cursor:'pointer'}}> Privacy & Policy</span>
                        </div>

                        <div className="login-para">Are you already Registered?
                            <Link to="/login">
                                <span style={{color:'#ff8a73',cursor:'pointer'}}> Login</span>
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

                        {/* <div className="login-copyright">
                            © 2021 SOWLOW. All Rights Reserved.
                        </div> */}
                    </div>

                   
                </div>
                <div className="login-right">
                    <img src={Crypto} alt="" className="crypto-img" />
                </div>
            </div>
        </div>
    )
}
