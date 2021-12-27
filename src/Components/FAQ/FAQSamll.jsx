import React from 'react';
import QnA from './QnA';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './FAQ.css';
import { Link } from 'react-router-dom';

export default function FAQSmall() {

    return (
        <div className='faq'>
            <div className="container-medium">
                <div className="faq-cont">
                    <div className="main-title abc" style={{marginTop:"14vh",marginBottom:'20px'}}>
                        FAQ
                        <div className="bar">
                            <div className="bar-box"></div>
                        </div>
                    </div>

                    <div className="faq-cont-1">
                        <div className="faq-box">
                            
                            <QnA no="0" question="What is SOWLOW ?" 
                                answer="MA blockchain based auction platform that rewards you for being the lowest unique bidder. whereby bidders can win a range of high value crypto currency at discounts of 90% or more on the actual market price."/>
                            
                            <QnA no="1" question="What is a lowest unique bid auction?"
                                answer="A lowest unique auction is one in which people can win products by placing the “lowest unique bid”, which could be as low as 1 cent. It is based on Skillful Bidding with a handful of strategy, logic and understanding by placing the lowest and unique bid which no one else has placed by the time the auction closes."/>
                            
                            <QnA no="2" question="What is being auctioned on SOWLOW?"
                                answer="The products on offer can include crypto currencies like BTC(Bitcoin), ETH(Ethereum) and many more."/>
                            
                            <QnA no="3" question="How Can I start bidding on the online bidding site, auction site?"
                                answer="“Registration” in SOWLOW is absolutely free. To take part in auctions, you may need to buy some SOLO from XXX exchange. Once you have SOLO in your wallet you can choose any of the listed items (BTC or ETH) and start bidding."/>
        
                            
                            <div className="view-more" >
                                <Link to="/faq">
                                    <div className="view-more">
                                    View More <ArrowForwardIcon style={{marginLeft:'10px'}}/>
                                    </div>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
