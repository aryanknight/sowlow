import React from 'react';
import BiddingNavbar from '../Components/Navbar/BiddingNavbar';
import NavbarSmall from '../Components/Navbar/NavbarSmall';
import HoverMenu from '../Components/Navbar/HoverMenu';
import LiveAuctions from '../Components/LiveAuctions/LiveAuctions';
import ClosedAuction from '../Components/ClosedAuction/ClosedAuction';
import BiddingSmall from '../Components/Navbar/BiddingSmall';
import UpcomingAuction from '../Components/UpcomingAuction/UpcomingAuction';
import {Footer1} from '../Components/Footer/Footer';
import FAQSmall from '../Components/FAQ/FAQSamll';

export default function BiddingPage() {
    React.useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[])
    return (
        <div className="App">
            <div className="container-large">
                <BiddingNavbar/>
                <BiddingSmall/>
                <HoverMenu/>
                <LiveAuctions/>
                <UpcomingAuction/>
                <ClosedAuction/>
                <FAQSmall/>
                <Footer1/>
            </div>
        </div>
    )
}
