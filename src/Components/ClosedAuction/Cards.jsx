import React from 'react';
import btc from '../../Images/btc1.png';
import closeimg from '../../Images/closeimg.png';

export default function Cards({img}) {
    return (
        <div className='auction-card-cont'>
            <div className="auction-title">
                Mac book
            </div>
            <div className="auction-card-img-cont">
                <img src={img} alt="" className="auction-img" />
            </div>
            <div className="win-cont">
                <div className="win-cont-1">
                    <div className="win-title">
                        WINNING BID
                    </div>
                    <div className="win-value">
                        10
                    </div>
                </div>
                <div className="win-cont-1">
                    <div className="win-title">
                        TOTAL SAVINGS
                    </div>
                    <div className="win-value">
                        10
                    </div>
                </div>
            </div>
            <div className="auction">
                <div className="close-img-cont">
                    <img src={closeimg} className='close-img' />
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
            </div>
            
        </div>
    )
}
