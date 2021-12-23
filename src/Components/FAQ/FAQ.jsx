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
                            
                            <QnA no="0" question="What is Multipad ?" 
                                answer="MultiPad is a community-governed, decentralized multi-chain powered launchpad, enabling startups to raise funds. We were inspired to solve two major problems in the launchpad space: low allocations and the inefficiency of first-come, first-served token sales. We will partner with projects and help them with marketing, go-to-market strategies, technical advice and assistance. We are “Committed to Community” and will treat every single stakeholder in MultiPad— strategic partners, individual investors and our project partners—fairly and equally."/>
                            
                            <QnA no="1" question="How are we committed to the community ?"
                                answer="Right from the beginning, where strategic investors and participants in the MultiPad public sale will pay the same token price of $0.05 for $MPAD. Our IDO system is designed to benefit every category of investor joining us, meaning long term holders, liquidity providers, small as well as big amount holders."/>
                            
                            <QnA no="2" question="What are the benefits of holding $MPAD ?"
                                answer="Holding (and staking) a minimum of 10000 $MPAD tokens will grant the opportunity to whitelist for every IDO on every chain launching on Multipad.The more tokens you hold, the greater your chances of gaining a spot on the eventual whitelist. If you win the whitelist lottery, you will get guaranteed allocations—no first-come, first-served. And if you don’t win? Our ‘Bad Luck Protection’ device will give you a bigger chance in the next lottery."/>
                            
                            <QnA no="3" question="Are there benefits for holding a big bag of $MPAD ?"
                                answer="Yes! Hold more than 200,000 $MPAD and you don’t even need to join the lottery—you are considered an ELITE and have a guaranteed whitelist spot for IDOs. This perk is also given to the top 20 ‘average liquidity providers’, calculated and revealed before each IDO."/>
                            
                            <QnA no="4" question="What platforms will you be on ?"
                                answer="Our native MPAD token will launch on Binance Smart Chain and will be fully supporting Polygon based IDO projects right from launch. We are further positioning ourselves to be an option for as many new projects as possible. Further integrations will be with Solana, Avalanche, Cardano and other upcoming blockchains."/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
