import React from 'react';
import Cards from './Cards';
import Lap from '../../Images/lap.png'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './ClosedAuction.css';

export default function ClosedAuction() {
    return (
        <div className="close-cont" id="close">
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"14vh"}}>
                    Recent Closed Auctions
                    <div className="bar">
                        <div className="bar-box"></div>
                    </div>
                </div>
                <AwesomeSlider>
                <div className="close">
                    <div className="close-card-cont">
                        <Cards img={Lap} />
                    </div>
                    <div className="close-card-cont">
                        <Cards img={Lap} />
                    </div>
                    <div className="close-card-cont">
                        <Cards img={Lap} />
                    </div>
                    
                </div>
                </AwesomeSlider>
            </div>
        </div>
    )
}
