import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DoneIcon from '@mui/icons-material/Done';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios'
import '../styles/explore.scss'
function Purchased() {
    const{contract_MM_Market,contract_MM_Token,web3,account} = useSelector(state=>state.blockchain)
    const[myNFTS,setMyNFTS] = useState([])
    useEffect(async()=>{
        if(account){
        const nfts = await contract_MM_Market?.methods.myNFTItems().call()
        console.log(nfts);
}
    },[account])
    
    return ( 
        <div className='explore__wrapper'>
            <div className='explore__header'>
                <div className='header__banner'></div>
                <div className='header__info'>
                    <div className='image__logo'>
                        <img src='https://lh3.googleusercontent.com/1LvJD420yvelZntqhS0Bp9hc3Px25wKFKZ1kD5hq5jB5Dvl4Q7OnLWEzytzoCg6zUhkl63ev3WNr4BsDPWO6yRL8h4Ce4nRFN9kI=s0' alt='' />
                    </div>
                    <div className='header__account'>
                        <div className='account__name'>Unnamed</div>
                        <div className='tick__icon'><DoneIcon style={{color:'white'}}/></div>
                    </div>
                    <div className='account__btn'>
                        <img className='eth__logo' src='data:image/png;base64,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' alt='' />
                        <div className='account__number'>{`${account?.substring(0,5)}...${account?.substring(account.length -4)}`}</div>
                    </div>
                </div>
            </div>
            <div className='nft__list'>
                <div className='nft__left'></div>
                <div className='nft__right'>
                    <div className='nft__right-top'>
                        <div className='nft__search'>
                            <SearchIcon />
                            <input className='nft__input' placeholder='Search' />
                        </div>
                        <div className='nft__filter'>
                            <span className='title'>All items</span>
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className='nft__filter'>
                            <span className='title'>Filter</span>
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>
                    <div className='nft__grid'>
                        {myNFTS?.map(nft=>(
                    <div  key={nft.tokenId}  className='nft__card'>
                        <div className='image__container'>
                            <img className='nft__image' alt='' src={nft.image} />
                        </div>
                        <div className='info__container'>
                            <div className='nft__info'>
                               <div className='nft__id'>#{nft.tokenId}</div>
                               <div className='nft__price'>
                                    <small style={{color:'grey'}}> Last</small> <img src='data:image/png;base64,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' />
                                    <span> {nft.price}</span>
                               </div>
                            </div>
                            <div className='nft__name'>{nft.name} </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>  
            </div>
        </div>
    )
}

export default Purchased
