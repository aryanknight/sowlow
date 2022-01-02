import React from 'react';
import { Link } from 'react-router-dom';
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart
    } = useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called")
    });
  
    return (
        <div className="timer-cont">
        <div className="timer-cont-1">
            <div className="timer-title">
                Days
            </div>
            <div className="timer-value">
                {days}
            </div>
        </div>
        <div className="timer-cont-1">
            <div className="timer-title">
                Hours
            </div>
            <div className="timer-value">
                {hours}
            </div>
        </div>
        <div className="timer-cont-1">
            <div className="timer-title">
                Mins
            </div>
            <div className="timer-value">
                {minutes}
            </div>
        </div>
        <div className="timer-cont-1">
            <div className="timer-title">
                Secs
            </div>
            <div className="timer-value">
                {seconds}
            </div>
        </div>
    </div>
    );
  }


export default function Cards({img,price,type,date,id=5}) {
    const time = new Date();
    var startDate = new Date(); // Current date now.
    var endDate = new Date(2022 , 0 , 31 , 0, 0, 0, 0); // end time
    var timeDiff = (endDate-startDate)/1000; 
    time.setSeconds(time.getSeconds() + timeDiff);
    return (
        <div className='auction-card-cont' style={{backgroundColor:'white'}}>
            <div className="auction-title">
                {price}
            </div>
            <div className="auction-card-img-cont">
                <img src={img} alt="" className="auction-img" />
            </div>
            
            <MyTimer expiryTimestamp={time} />
            
            <div className="auction-price">
                <div className="price">
                    <b>Price :</b>
                    <img src={type} className='fee-img' />
                    {price}
                </div>
                <div className="bid-fee">
                    <b>Bid Fee :</b> 20 SOLO
                </div>
            </div>
            <Link to={"/bid-now/"+id}>
            <div className="auction-btn">
                BID NOW
            </div>
            </Link>
        </div>
    )
}


export function CardScroll({img,price,type,date,id=5}) {
    const time = new Date();
    var startDate = new Date(); // Current date now.
    var endDate = new Date(2021 , 11 , 31 , 0, 0, 0, 0); // end time
    var timeDiff = (endDate-startDate)/1000; 
    time.setSeconds(time.getSeconds() + timeDiff);
    return (
        <div className='upcoming-card-cont' style={{backgroundColor:'white'}}>
            <div className="auction-title">
                {price}
            </div>
            <div className="auction-card-img-cont">
                <img src={type} alt="" className="upcoming-img" />
            </div>
            
            <MyTimer expiryTimestamp={time} />
            
            <div className="auction-price">
                <div className="price">
                    <b>Price :</b>
                    <img src={type} className='fee-img' />
                    {price}
                </div>
                <div className="bid-fee">
                    <b>Bid Fee :</b> 20 SOLO
                </div>
            </div>
            <Link to={`/bid-now/${id}`}>
            <div className="auction-btn">
                BID NOW
            </div>
            </Link>
        </div>
    )
}
