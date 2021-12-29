import React from 'react';
import {Footer1} from '../Components/Footer/Footer';
import UserNavbar from '../Components/Navbar/UserNavbar';
import UserNavbarSmall from '../Components/Navbar/UserNavbarSmall';
import UserPanel from '../Components/UserPanel/UserPanel';

export default function UserPage() {
    React.useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[])
    return (
        <div className="App">
            <div className="container-large">
                <UserNavbar/>
                <UserNavbarSmall/>
                <UserPanel/>
            </div>
        </div>
    )
}