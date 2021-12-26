import React from 'react'
import FAQ from '../Components/FAQ/FAQ'
import Footer from '../Components/Footer/Footer'
import BiddingNavbar from '../Components/Navbar/BiddingNavbar'
import BiddingSmall from '../Components/Navbar/BiddingSmall'

export default function FAQPage() {
    return (
        <div className="App">
            <div className="container-large" >
                <BiddingNavbar/>
                <BiddingSmall/>
                <FAQ/>
            </div>
        </div>
    )
}
