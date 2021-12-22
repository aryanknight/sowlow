import React from 'react';
import Cards from './Cards';
import Lap from '../../Images/lap.png'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './ClosedAuction.css';
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

export default function ClosedAuction() {
    return (
        <div className="close-cont" id="close">
            <div className="container-medium ">
                <div className="main-title abc" style={{marginTop:"14vh",marginBottom:'20px'}}>
                    Recent Closed Auctions
                </div>
                <div className="closed-cara">
                    <Carousel responsive={responsive}>
                        <Cards img={Lap} />
                        <Cards img={Lap} />
                        <Cards img={Lap} />
                        <Cards img={Lap} />
                        <Cards img={Lap} />
                        <Cards img={Lap} />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
