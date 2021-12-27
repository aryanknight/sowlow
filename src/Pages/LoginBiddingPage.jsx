import React from 'react';
import BiddingTable from '../Components/BiddingTable/BiddingTable';
import {Footer1} from '../Components/Footer/Footer';
import UserNavbar from '../Components/Navbar/UserNavbar';

export default function LoginBiddingPage() {
    React.useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[])
    return (
        <div className="App">
            <div className="container-large">
                <UserNavbar/>
                <BiddingTable/>
            </div>
        </div>
    )
}