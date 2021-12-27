import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function BiddingHistory() {
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr No</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Product ID</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Bid Value</TableCell>
            <TableCell align="right">Bid ID</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color:'#8094ae'}}>{row.no}</TableCell>
              <TableCell align="right" style={{color:'#8094ae'}}>{row.date}</TableCell>
              <TableCell align="right" style={{color:'#8094ae'}}>{row.productID}</TableCell>
              <TableCell align="right" style={{color:'#8094ae'}}>{row.product}</TableCell>
              <TableCell align="right" style={{color:'#8094ae'}}>{row.bidValue}</TableCell>
              <TableCell align="right" style={{color:'#8094ae'}}>{row.bidID}</TableCell>
              {row.status=='Live' ? (<TableCell align="right" style={{color:'#1ee0ac'}}>{row.status}</TableCell>) : (<TableCell align="right" style={{color:'#e85347'}}>{row.status}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}


export function ProductsWon() {
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr No</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Product ID</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Bid Value</TableCell>
            <TableCell align="right">Bid ID</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color:'#8094ae'}}>{row.no}</TableCell>
              <TableCell align="right" style={{color:'#8094ae'}}>{row.date}</TableCell>
              <TableCell align="right" style={{color:'#8094ae'}}>{row.productID}</TableCell>
              <TableCell align="right" style={{color:'#8094ae'}}>{row.product}</TableCell>
              <TableCell align="right" style={{color:'#8094ae'}}>{row.bidValue}</TableCell>
              <TableCell align="right" style={{color:'#8094ae'}}>{row.bidID}</TableCell>
              {row.status=='Live' ? (<TableCell align="right" style={{color:'#1ee0ac'}}>{row.status}</TableCell>) : (<TableCell align="right" style={{color:'#e85347'}}>{row.status}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}