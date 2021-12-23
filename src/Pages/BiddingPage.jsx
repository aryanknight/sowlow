import React from 'react';
import BiddingNavbar from '../Components/Navbar/BiddingNavbar';
import NavbarSmall from '../Components/Navbar/NavbarSmall';
import HoverMenu from '../Components/Navbar/HoverMenu';
import LiveAuctions from '../Components/LiveAuctions/LiveAuctions';
import ClosedAuction from '../Components/ClosedAuction/ClosedAuction';
import BiddingSmall from '../Components/Navbar/BiddingSmall';
import FAQ from '../Components/FAQ/FAQ';

export default function BiddingPage() {
    return (
        <div className="App">
            <div className="container-large" style={{paddingBottom:'2rem'}}>
                <BiddingNavbar/>
                <BiddingSmall/>
                <HoverMenu/>
                <LiveAuctions/>
                <ClosedAuction/>
                <FAQ/>
            </div>
        </div>
    )
}
