import React from 'react';
import Cards from './Cards';
import Stake from '../../Images/stake.png';
import P2P from '../../Images/p2p.png';
import Purchase from '../../Images/purchase.png';
import Shape1 from '../../Images/shape-1.png';
import Shape6 from '../../Images/shape-6.png';
import Triangle from '../../Images/triangle.png';
import './Features.css';

export default function Features() {
    return (
        <div className="features-cont" id="features">
            <img src={Shape1} id="features-sha-1" />
            <img src={Shape6} id="features-sha-2" />
            <img src={Triangle} id="features-tri"/>
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"20px"}}>
                    Features
                </div>
                <div className="feature">
                    <Cards img={Purchase} para="Purchase credits with a $SLW token, which can be used to bid on SOWLOW"/>
                    <Cards img={P2P} para="A P2P marketplace to send and receive credits"/>
                    <Cards img={Stake} para="Stake $SLW"/>
                </div>
            </div>
        </div>
    )
}
