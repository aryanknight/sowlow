import React from 'react';
import {Footer1} from '../Components/Footer/Footer';
import BiddingNavbar from '../Components/Navbar/BiddingNavbar';
import BiddingSmall from '../Components/Navbar/BiddingSmall';
import UserNavbar from '../Components/Navbar/UserNavbar';
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy';

export default function PrivacyPage() {
    React.useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[]);
    return (
        <div className="App">
            <div className="container-large" style={{backgroundColor:'#F5F6FA'}}>
                <BiddingNavbar/>
                <BiddingSmall/>
                <PrivacyPolicy/>
                <Footer1/>
            </div>
        </div>
    )
}