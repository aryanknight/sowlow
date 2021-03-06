import { Paper, TextField } from '@mui/material';
import React from 'react';
import Btc from '../../Images/btc1.png';
import { useParams } from 'react-router-dom';
import nftList from '../data.js';
import './BidNow.css';

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
        <div className="bid-now-timer-cont">
            <div className="remaining-time" id="rem1" >
                Bidding Time :
            </div>
            <div className="remaining-time" id="rem2">
                Bidding Time
            </div>
            <div className="bid-timer-cont">
                <div className="bid-timer-cont-1">
                    <div className="bid-timer-title">
                        Days
                    </div>
                    <div className="bid-timer-value">
                        {days}
                    </div>
                </div>
                <div className="bid-timer-cont-1">
                    <div className="bid-timer-title">
                        Hours
                    </div>
                    <div className="bid-timer-value">
                        {hours}
                    </div>
                </div>
                <div className="bid-timer-cont-1">
                    <div className="bid-timer-title">
                        Mins
                    </div>
                    <div className="bid-timer-value">
                        {minutes}
                    </div>
                </div>
                <div className="bid-timer-cont-1">
                    <div className="bid-timer-title">
                        Secs
                    </div>
                    <div className="bid-timer-value">
                        {seconds}
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default function BidNow() {

    const time = new Date();
    var startDate = new Date(); // Current date now.
    var endDate = new Date(2022 , 0 , 31 , 0, 0, 0, 0); // end time
    var timeDiff = (endDate-startDate)/1000; 
    time.setSeconds(time.getSeconds() + timeDiff);
    const {id}=useParams();

    const [nftData,setNftData] = React.useState({})

    React.useEffect(()=>{
        setNftData (nftList.find(nft => nft.id==id));
    },[]);

    return (
        <div className="bid-now-cont" id="bid-now">
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"18vh"}}>
                    Bid Now
                    <div className="bar">
                        <div className="bar-box"></div>
                    </div>
                </div>
                <div className="bid-now">
                    
                        <Paper elevation={3}>
                            <div className="bid-now-cont-1" style={{marginTop:'40px'}}>
                                <div className="bid-now-left">
                                    <img src={nftData?.src} alt="" className="bid-now-img" />
                                </div>
                                <div className="bid-now-right">
                                    <div className="bid-now-head">
                                        {nftData?.price}
                                    </div>
                                    <div className="bid-now-fees-cont">
                                        <div className="bid-now-fee">
                                            <b>Bidding Fee : &nbsp;</b> 20 SOLO
                                        </div>
                                        <div className="bid-now-price">
                                            <b>Price : &nbsp;</b> {nftData?.price}
                                        </div>
                                    </div>

                                    <MyTimer expiryTimestamp={time} />
                                    {/* <div className="currently-bid-head">
                                        Currently Winning
                                    </div>
                                    <div className="r">
                                        Lorem ipsum
                                    </div> */}

                                    <div className="bid-now-text-cont">
                                        <div className="currently-bid-head">
                                            Bidding Price
                                        </div>
                                        <TextField placeholder='0.21 BTC' fullWidth/>
                                        <button className="bid-now-button">
                                            Bid Now
                                        </button>
                                    </div>
                                </div>
                            </div>    
                        </Paper>
                   
                </div>
                
            </div>
        </div>
    )
}