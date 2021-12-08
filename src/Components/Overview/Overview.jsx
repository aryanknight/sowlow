import React from 'react';
import Cards from './Cards';
import Blockchain from '../../Images/blockchain.png';
import Global from '../../Images/global.png';
import Transparency from '../../Images/transparency.png';
import Value from '../../Images/highvalueproducts.png'; 
import "./Overview.css";

export default function Overview() {
    return (
        <div className="container-medium">
            <div className="overview">
                
                <div className="overview-left">
                    <Cards imgSrc={Blockchain} title="Blockchain Based" para="Blockchain based lowest unique bidding website." />
                    <Cards imgSrc={Value} title="High Value Products" para="Availability of a wide range of highly valuable products." />
                    <Cards imgSrc={Global} title="Across the Globe" para="Bid and win anywhere from the world. Distance is not a barrier" />
                    <Cards imgSrc={Transparency} title="Transparency" para="Complete transparency of auction results and accessible to everyone." />
                    
                </div>
                <div className="overview-right">
                <div className="main-title">
                    Overview
                </div>
                    <div className="overview-text">
                        <div className="overview-para">SOWLOW Is a blockchain website that auctions based on lowest unique bid. Unlike your regular auction websites where highest bidder wins, SOWLOW rewards you for being the lowest-unique bidder at the end of every auction.</div>
                        <div className="overview-para">With SOWLOW, you can bid for valuable products/goods from wherever you are in the world. This simply means that distance is not a barrier.</div>
                        <div className="overview-para">SOWLOW game offers participants the opportunity to win amazing valued goods for
                                                        Impossibly low prices. This is as simple as it sounds. Find products you like that are available for auction, bid low for them, then you get the chance to win big at the end of the auction if your bid is the lowest and unique. Sweet right?</div>
                        <div className="overview-para">The processes involved in winning on SOWLOW are made available to all.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
