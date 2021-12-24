import React from 'react';
import Cards from './Cards';
import btc from '../../Images/btc1.png';
import eth from '../../Images/eth2.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './UpcomingAuction.css';

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

export default function UpcomingAuction() {
    
    return (
        <div className="live-cont" id="live">
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"18vh"}}>
                    Upcoming Auctions
                    <div className="bar">
                        <div className="bar-box"></div>
                    </div>
                </div>
                <div className="closed-cara">
                    <Carousel responsive={responsive}>
                        <Cards  price="0.21 BTC" type={btc} />
                        <Cards  price="0.158 ETH" type={eth}/>
                        <Cards  price="0.21 BTC" type={btc}/>
                        <Cards  price="0.21 BTC" type={btc} />
                        <Cards  price="0.158 ETH" type={eth}/>
                        <Cards  price="0.21 BTC" type={btc}/>
                    </Carousel>    
                </div>
            </div>
        </div>
    )
}
