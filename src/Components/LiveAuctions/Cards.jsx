import React from 'react';

export default function Cards({img,price,type}) {
    return (
        <div className='auction-card-cont'>
            <div className="auction-title">
                {price}
            </div>
            <div className="auction-card-img-cont">
                <img src={type} alt="" className="auction-img" />
            </div>
            <div className="timer-cont">
                <div className="timer-cont-1">
                    <div className="timer-title">
                        Days
                    </div>
                    <div className="timer-value">
                        10
                    </div>
                </div>
                <div className="timer-cont-1">
                    <div className="timer-title">
                        Hours
                    </div>
                    <div className="timer-value">
                        10
                    </div>
                </div>
                <div className="timer-cont-1">
                    <div className="timer-title">
                        Mins
                    </div>
                    <div className="timer-value">
                        10
                    </div>
                </div>
                <div className="timer-cont-1">
                    <div className="timer-title">
                        Secs
                    </div>
                    <div className="timer-value">
                        10
                    </div>
                </div>
            </div>
            
            <div className="auction-price">
                <div className="price">
                    <b>Price :</b>
                    <img src={type} className='fee-img' />
                    {price}
                </div>
                <div className="bid-fee">
                    <b>Bid Fee :</b> 20 $OLO
                </div>
            </div>
            <div className="auction-btn">
                BID NOW
            </div>
        </div>
    )
}
