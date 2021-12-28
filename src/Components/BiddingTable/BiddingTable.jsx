import { Paper } from '@mui/material';
import React from 'react';
import BiddingHistory, { ProductsWon } from './BiddingRow';
import './BiddingTable.css';

function createData(no, date,productID ,product, bidValue,bidID, status) {
    return { no, date,productID ,product, bidValue,bidID, status};
  }
  
  const rows = [
    createData(1, '11/12/2021 4:50:23 pm' , 23156, 'Bitcoin', 0.023,5648,'Close'),
    createData(2, '11/12/2021 4:50:23 pm' , 65456, 'Ethereum', 0.023,5648,'Live'),
    createData(3, '11/12/2021 4:50:23 pm' , 23156, 'Decentraland', 0.023,5648,'Close'),
    createData(4, '11/12/2021 4:50:23 pm' , 26453, 'IOTX', 0.023,5648,'Live'),
    createData(5, '11/12/2021 4:50:23 pm' , 24556, 'Bitcoin', 0.023,5648,'Close')
  ];

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
                        <Paper elevation={3}>
                        <div className='bidding-row-cont'>
                            <div className="bidding-row-cont-1">
                                <div className="bidding-row-sr"><b>Sr No</b></div>
                                <div className="bidding-row-date"><b>Date</b></div>
                                <div className="bidding-row-product-id"><b>Product Id</b></div>
                                <div className="bidding-row-product"><b>Product</b></div>
                            </div>

                            <div className="bidding-row-cont-2">
                                <div className="bidding-row-bid-val"><b>Bid Value</b></div>
                                <div className="bidding-row-bid-id"><b>Bid Id</b></div>
                                <div className="bidding-row-status"><b>Status</b></div>
                            </div>        
                        </div>
                        </Paper>
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
                        <Paper elevation={3}>
                            <div className='bidding-row-cont'>
                                <div className="bidding-row-cont-1">
                                    <div className="bidding-row-sr"><b>Sr No</b></div>
                                    <div className="bidding-row-date"><b>Date</b></div>
                                    <div className="bidding-row-product-id"><b>Product Id</b></div>
                                    <div className="bidding-row-product"><b>Product</b></div>
                                </div>

                                <div className="bidding-row-cont-2">
                                    <div className="bidding-pro-bid-val"><b>Bid Value</b></div>
                                    <div className="bidding-pro-bid-id"><b>Bid Id</b></div>
                                </div>        
                            </div>
                        </Paper>
                        <ProductsWon/>
                    </div>
                </div>
            </div>
        </div>
    )
}
