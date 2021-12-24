import React from 'react';
import btc from '../../Images/btc1.png';
import closeimg from '../../Images/closeimg.png';

export default function Cards({img,price,type}) {
    return (
        <div className='close-card-cont'>
            <div className="auction-title">
                {price}
            </div>
            <div className="auction-card-img-cont">
                <img src={type} alt="" className="auction-img" />
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
                {/* <div className="win-cont-1">
                    <div className="win-title">
                        TOTAL SAVINGS
                    </div>
                    <div className="win-value">
                        10
                    </div>
                </div> */}
            </div>
            <div className="auction">
                {/* <div className="close-img-cont">
                    <img src={closeimg} className='close-img' />
                </div> */}
                <div className="closed-auction-price">
                    <div className="price">
                        <b>Price :</b>
                        <img src={type} className='fee-img' />
                        {price}
                    </div>
                    <div className="bid-fee">
                        <b>Bid Fee :</b> 20 $OLO
                    </div>
                </div>
            </div>
            
        </div>
    )
}
