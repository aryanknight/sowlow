import React from 'react';
import Cards from './Cards';
import Blockchain from '../../Images/blockchain.png';
import Global from '../../Images/global.png';
import Transparency from '../../Images/transparency.png';
import Value from '../../Images/value.png'; 
import Triangle from '../../Images/triangle.png';
import Shape5 from '../../Images/shape-5.png';
import "./Overview.css";

export default function Overview() {
    return (
        <div className="container-medium">
            <div className="overview" id="overview">
                
                <div className="overview-left">
                    <img src={Shape5} id="overview-shape-5"/>
                    <div className='overview-cards' >
                        <Cards imgSrc={Blockchain} title="Blockchain Based" para="Blockchain based lowest unique bidding website." />
                    </div>
                    <div className='overview-cards' id="overview-card-1" >
                        <Cards style={{width:'100%'}} imgSrc={Value} title="High Value Products" para="Availability of a wide range of highly valuable products." />
                    </div>
                    <div className='overview-cards' >
                        <Cards imgSrc={Global} title="Across the Globe" para="Bid and win anywhere from the world. Distance is not a barrier" />
                    </div>
                    <div className='overview-cards' id="overview-card-1" >
                        <Cards imgSrc={Transparency} title="Transparency" para="Complete transparency of auction results and accessible to everyone." />
                    </div>
                    
                </div>
                <div className="overview-right">
                    <img src={Triangle} id="overview-tri"/>
                <div className="main-title">
                    Overview
                    <div className="bar">
                        <div className="bar-box"></div>
                    </div>
                </div>
                    <div className="overview-text">
                        <div className="overview-para">SOWLOW Is a blockchain website that auctions based on lowest unique bid. Unlike your regular auction websites where the highest bidder wins, SOWLOW rewards you for being the lowest-unique bidder at the end of every auction.</div>
                        <div className="overview-para">With SOWLOW, you can bid for BTC and ETH from wherever you are in the world. This simply means that distance is not a barrier.</div>
                        <div className="overview-para">SOWLOW game offers participants the opportunity to win high valued BTC and ETH for

                                                        Impossibly low prices. This is as simple as it sounds. Find BTC or ETH you like that are available for auction, bid low for them, then you get the chance to win big at the end of the auction if your bid is the lowest and unique. Sweet right?</div>
                        <div className="overview-para">The processes involved in winning on SOWLOW are made available to all.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
