import React from 'react';
import BidNow from '../Components/BidNow/BidNow';
import {Footer1} from '../Components/Footer/Footer';
import LiveAuctions, { LiveAuctionsScroll } from '../Components/LiveAuctions/LiveAuctions';
import UserNavbar from '../Components/Navbar/UserNavbar';
import UserNavbarSmall from '../Components/Navbar/UserNavbarSmall';
import UpcomingAuction from '../Components/UpcomingAuction/UpcomingAuction';

export default function BidNowPage() {
    React.useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[])
    return (
        <div className="App">
            <div className="container-large" style={{backgroundColor:'#F5F6FA'}}>
                <UserNavbarSmall/>
                <UserNavbar/>
                <BidNow/>
                <LiveAuctionsScroll/>
                <UpcomingAuction/>
                <Footer1/>
            </div>
        </div>
    )
}
