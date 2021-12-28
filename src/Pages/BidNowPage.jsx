import React from 'react';
import BidNow from '../Components/BidNow/BidNow';
import {Footer1} from '../Components/Footer/Footer';
import UserNavbar from '../Components/Navbar/UserNavbar';

export default function BidNowPage() {
    React.useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[])
    return (
        <div className="App">
            <div className="container-large">
                <UserNavbar/>
                <BidNow/>
                <Footer1/>
            </div>
        </div>
    )
}
