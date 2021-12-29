import React from 'react';
import Cards from './Cards';
import Carousel from "react-multi-carousel";
import { CardScroll } from './Cards';
import Lap from '../../Images/lap.png';
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
                        <Cards img={Lap} price="0.21 BTC" type={btc} />
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap} price="0.158 ETH" type={eth}/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap1} price="0.21 BTC" type={btc}/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap1} price="0.158 ETH" type={eth}/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap} price="0.21 BTC" type={btc}/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap} price="0.21 BTC" type={btc}/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap1} price="0.158 ETH" type={eth}/>
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap1} price="0.158 ETH" type={eth}/>
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
                        <CardScroll  price="0.21 BTC" type={btc} />
                        <CardScroll  price="0.158 ETH" type={eth}/>
                        <CardScroll  price="0.21 BTC" type={btc}/>
                        <CardScroll  price="0.21 BTC" type={btc} />
                        <CardScroll  price="0.158 ETH" type={eth}/>
                        <CardScroll  price="0.21 BTC" type={btc}/>
                    </Carousel>    
                </div>
            </div>
        </div>
    )
}