import React from 'react';
import QnA from './QnA';
import './FAQ.css';

export default function FAQ() {

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
                            
                            <QnA no="4" question="How many times can I place my bids in a day?"
                                answer="You can bid as many times as you choose in a day. However, we do advise all our bidders to bid responsibly."/>

                            <QnA no="5" question="Can I take part in more than one auction at a time?"
                                answer="Registered users can take part in as many auctions they like."/>
                            
                            <QnA no="6" question="Example: Lowest & Unique bid?"
                                answer="Lowest & unique bid amount entered in the auction is that bid amount which has not been placed by any other person. For example, if bidders A, B and C place a bid of $2.25, bidder D places a bid of $3.15, and bidder E places a bid of $2.45, although $2.45 is not the lowest bid in the auction ($2.25 is lower), $2.45 is the lowest unique bid placed in this auction, because $3.15 is a unique bid but it is not lowest, therefore $2.45 is the Lowest & Unique bid (winning bid)."/>
                            
                            <QnA no="7" question="When does an auction end?"
                                answer="An auction automatically ends when a specified closing day, date and time has been reached."/>
                            
                            <QnA no="8" question="How will I know if my bid was successfully submitted?"
                                answer="The user will get an instant notification screen after the submission of the bids including details of the bid, unique Bid ID and real-time status."/>
                            
                            <QnA no="9" question=" How will I know if I did not win?"
                                answer="If you won then we will send you an e-mail or text informing you that you have won the auction. Once confirmed and verified as the winner, your username/name may also appear on the results pages as the winner of the auction."/>
                            
                            <QnA no="10" question="If I place the winning lowest unique bid, do I have to pay the winning bid amount?"
                                answer="No, you have not to pay any amount."/>
                            
                            <QnA no="11" question="Can I undo submitted Bids?"
                                answer="No, once you have submitted a Bid it cannot be undone."/>
                            
                            <QnA no="12" question="Is my personal information confidential with SOWLOW?"
                                answer="Yes. SOWLOW Comply with data protection & hence we are bound to keep User’s data confidential. We never disclose any of your information to a third party without the explicit permission of you."/>
                            
                            <QnA no="13" question="What should I do if I forget my username or password?"
                                answer="Click the 'Forgot Password' link on the website and you will get an email to your registered e-mail address. You can then reset your password and continue using the website. If you still experience problems, refused entry or the system fails, please email us at team@sowlow.co."/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
