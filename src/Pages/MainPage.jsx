import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Intro from '../Components/Intro/Intro';
import Overview from '../Components/Overview/Overview';
import How from '../Components/How/How';
import Features from '../Components/Features/Features';
import Roadmap from '../Components/Roadmap/Roadmap';
import Team from '../Components/Team/Team';
import Footer from '../Components/Footer/Footer';
import NavbarSmall from '../Components/Navbar/NavbarSmall';
import HoverMenu from '../Components/Navbar/HoverMenu';
import Tokenomics from '../Components/Tokenomics/Tokenomics';

export default function MainPage() {

    React.useEffect(()=>{
      document.documentElement.scrollTop = 0;
    },[])
    return (
    <div className="App">
        <div className="container-large">
          <Navbar/>
          <HoverMenu/>
          <NavbarSmall/>
          <Intro/>
          <Overview/>
          <How/>
          <Features/>
          <Roadmap/>
          {/* <Tokenomics/> */}
          <Team/>
          <Footer/>
        </div>
    </div>
    )
}
