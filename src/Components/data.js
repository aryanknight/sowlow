import Nft1 from '../Images/nft1.jpg';
import Nft2 from '../Images/nft2.png';
import Nft3 from '../Images/nft3.png';
import Nft4 from '../Images/nft4.png';
import btc from '../Images/btc1.png';
import eth from '../Images/eth2.png';

let nftList = [
    {
        id:1,
        src:Nft1,
        type:'eth',
        price:'2.65 ETH'
    },
    {
        id:2,
        src:Nft2,
        type:'eth',
        price:'3.0 WETH'
    },
    {
        id:3,
        src:Nft3,
        type:'eth',
        price:'0.032 WETH'
    },
    {
        id:4,
        src:Nft4,
        type:'eth',
        price:'0.074 ETH'
    },
    {
        id:5,
        src:btc,
        type:'btc',
        price:'0.074 BTC'
    },
    {
        id:6,
        src:eth,
        type:'eth',
        price:'0.074 ETH'
    }
];

export default nftList;