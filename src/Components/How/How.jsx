import React from 'react';
import Cards from './Cards';
import Dash from '../../Images/Dash.png';
import "./How.css";

export default function How() {
    return (
        <div className="how-cont">
            <img src={Dash} id="how-dash" />
            <div className="container-medium">
                <div className="main-title">
                    How It Works ?
                </div>
                <div className="how">
                    <Cards title="STEP 1" para="Buy/Exchange $SLW at XYZ exchange or get $SLW directly through P2P" />
                    <Cards title="STEP 2" para="Purchase credits on SOWLOW using $SLW" />
                    <Cards title="STEP 3" para="Begin to bid on your favourite products listed on the website" />
                    <Cards title="STEP 4" para="The winner is announced at the end of the bid. The winner, which is the participant with the lowest unique bid, gets to win the valuable product with a ridiculously low amount." />
                </div>
            </div>
        </div>
    )
}
