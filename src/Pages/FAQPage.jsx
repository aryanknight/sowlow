import React from 'react'
import FAQ from '../Components/FAQ/FAQ'
import {Footer1} from '../Components/Footer/Footer'
import BiddingNavbar from '../Components/Navbar/BiddingNavbar'
import BiddingSmall from '../Components/Navbar/BiddingSmall'

export default function FAQPage() {
    React.useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[])
    return (
        <div className="App">
            <div className="container-large" >
                <BiddingNavbar/>
                <BiddingSmall/>
                <FAQ/>
                <Footer1/>
            </div>
        </div>
    )
}
