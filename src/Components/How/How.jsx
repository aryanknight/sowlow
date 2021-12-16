import React from 'react';
import Cards from './Cards';
import Dash from '../../Images/Dash.png';
import Step1 from '../../Images/step1.png';
import Step2 from '../../Images/step2.png';
import Step3 from '../../Images/step3.png';
import Step4 from '../../Images/step4.png';
import "./How.css";

export default function How() {
    return (
        <div className="how-cont" id="how">
            <img src={Dash} id="how-dash" />
            <div className="container-medium">
                <div className="main-title">
                    How It Works ?
                    <div className="bar">
                        <div className="bar-box"></div>
                    </div>
                </div>
                <div className="how">
                    <Cards img={Step1} title="STEP 1" para="Buy/Exchange $SOLO at exchange or get $SOLO directly through P2P" />
                    <Cards img={Step2} title="STEP 2" para="Start bidding on the SOWLOW website using $SOLO" />
                    <Cards img={Step3} title="STEP 3" para="Begin to bid on BTC or ETH listed on the website" />
                    <Cards img={Step4} title="STEP 4" para="The winner is announced at the end of the bid. The winner, which is the participant with the lowest unique bid, gets to win the BTC/ETH with a ridiculously low amount." />
                </div>
            </div>
        </div>
    )
}
