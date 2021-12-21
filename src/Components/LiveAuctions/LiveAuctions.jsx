import React from 'react';
import Cards from './Cards';
import Lap from '../../Images/lap.png';
import Lap1 from '../../Images/lap1.png';
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
                        <Cards img={Lap} />
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap} />
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap1} />
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap1} />
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap} />
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap} />
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap1} />
                    </div>
                    <div className="live-card-cont">
                        <Cards img={Lap1} />
                    </div>
                </div>
            </div>
        </div>
    )
}
