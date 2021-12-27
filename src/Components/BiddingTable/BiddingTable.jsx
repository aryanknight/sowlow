import React from 'react';
import BiddingHistory from './BiddingRow';
import './BiddingTable.css';

export default function BiddingTable() {
    return (
        <div className="bidding-table-cont" id="bidding-table">
            <div className="container-medium">
                <div className="main-title" style={{marginTop:"18vh"}}>
                    Bidding History
                    <div className="bar">
                        <div className="bar-box"></div>
                    </div>
                </div>
                <div className="bidding-table">
                    <div className="bidding-table-cont-1" style={{marginTop:'40px'}}>
                        {/* <div className='bidding-row-cont'>
                            <div className="bidding-row-head-1">Sr No</div>
                            <div className="bidding-row-head-2">Date</div>
                            <div className="bidding-row-head-3">Product Id</div>
                            <div className="bidding-row-head-3">Product</div>
                            <div className="bidding-row-head-2">Bid Value</div>
                            <div className="bidding-row-head-3">Bid Id</div>
                            <div className="bidding-row-head-1">Status</div>
                        </div> */}
                        <BiddingHistory/>
                    </div>
                </div>
                <div className="main-title" style={{marginTop:"10vh"}}>
                    Products Won
                    <div className="bar">
                        <div className="bar-box"></div>
                    </div>
                </div>
                <div className="bidding-table">
                    <div className="bidding-table-cont-1" style={{marginTop:'40px'}}>
                        <BiddingHistory/>
                    </div>
                </div>
            </div>
        </div>
    )
}
