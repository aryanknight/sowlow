import React from 'react';
import Cards from './Cards';
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
