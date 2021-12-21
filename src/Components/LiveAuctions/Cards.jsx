import React from 'react';
import btc from '../../Images/btc1.png';
import Lap1 from '../../Images/lap1.png';

export default function Cards({img}) {
    return (
        <div className='auction-card-cont'>
            <div className="auction-title">
                Mac book
            </div>
            <div className="auction-card-img-cont">
                <img src={img} alt="" className="auction-img" />
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
                    <img src={btc} className='fee-img' />
                    0.021 BTC
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
