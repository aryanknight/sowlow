import React from 'react';
import Cards from './Cards';
import Carousel from "react-multi-carousel";
import { CardScroll } from './Cards';
import Lap from '../../Images/lap.png';
import Nft1 from '../../Images/nft1.jpg';
import Nft2 from '../../Images/nft2.png';
import Nft3 from '../../Images/nft3.png';
import Nft4 from '../../Images/nft4.png';
import Lap1 from '../../Images/lap1.png';
import btc from '../../Images/btc1.png';
import eth from '../../Images/eth2.png';
import './LiveAuctions.css';

export default function LiveAuctions() {
    return (
        <div className="live-cont" id="live">
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"18vh"}}>
                    Live Auctions
                    <div className="bar">
                        <div className="bar-box"></div>
                    </div>
                </div>
                <div className="live">
                    <div className="live-card-cont">
                        <Cards img={btc} price="0.21 BTC" type={btc} id="5"/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={btc} price="0.21 BTC" type={btc} id="5"/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={eth} price="0.158 ETH" type={eth} id="6"/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={eth} price="0.158 ETH" type={eth} id="6"/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Nft1} price="2.65 ETH" type={eth} id="1" />
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Nft2} price="3.0 WETH" type={eth} id="2"/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Nft3} price="0.032 ETH" type={eth} id="3"/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Nft4} price="0.074 ETH" type={eth} id="4"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export function LiveAuctionsScroll() {
    return (
        <div className="live-cont" id="live">
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"18vh"}}>
                    Live Auctions
                    <div className="bar">
                        <div className="bar-box"></div>
                    </div>
                </div>
                <div className="closed-cara">
                    <Carousel responsive={responsive}>
                        <CardScroll  price="0.21 BTC" type={btc}  id="5"/>
                        <CardScroll  price="0.158 ETH" type={eth} id="6"/>
                        <CardScroll  price="0.21 BTC" type={btc} id="5"/>
                        <CardScroll  price="0.21 BTC" type={btc}  id="5"/>
                        <CardScroll  price="0.158 ETH" type={eth} id="6"/>
                        <CardScroll  price="0.21 BTC" type={btc} id="5"/>
                    </Carousel>    
                </div>
            </div>
        </div>
    )
}