import React from 'react';
import BiddingNavbar from '../Components/Navbar/BiddingNavbar';
import NavbarSmall from '../Components/Navbar/NavbarSmall';
import HoverMenu from '../Components/Navbar/HoverMenu';
import LiveAuctions from '../Components/LiveAuctions/LiveAuctions';
import ClosedAuction from '../Components/ClosedAuction/ClosedAuction';

export default function BiddingPage() {
    return (
        <div className="App">
            <div className="container-large">
                <BiddingNavbar/>
                <HoverMenu/>
                <LiveAuctions/>
                <ClosedAuction/>
            </div>
        </div>
    )
}
