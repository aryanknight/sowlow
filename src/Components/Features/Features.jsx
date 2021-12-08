import React from 'react';
import Cards from './Cards';
import './Features.css';

export default function Features() {
    return (
        <div className="features-cont">
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"20px"}}>
                    Features
                </div>
                <div className="feature">
                    <Cards para="Purchase credits with a $SLW token, which can be used to bid on SOWLOW"/>
                    <Cards para="A P2P marketplace to send and receive credits"/>
                    <Cards para="Stake $SLW"/>
                </div>
            </div>
        </div>
    )
}
