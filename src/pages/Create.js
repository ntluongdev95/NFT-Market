import React, { useEffect, useRef, useState } from 'react'
import '../styles/create.scss'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector} from 'react-redux'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { create } from 'ipfs-http-client'
import { IconButton } from '@mui/material';
import {  toast } from 'react-toastify';
//import { blockchainAction } from '../redux/actions/blockchainAction';
const ipfsClient = create('https://ipfs.infura.io:5001/api/v0');
function Create() {
    const navigate = useNavigate();
    const dispatch =  useDispatch()
    const inputRef = useRef()
    const[name,setName] = useState('')
    const[price,setPrice] = useState()
    const[fileURL,setFileURL] = useState('')
    const[description,setDescription] = useState('')
    const[image,setImage]=useState({
        preview:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTFxxFbck10dtuPkgA8mtf2gHYU0-lZCjCg&usqp=CAU'
    })
     const handleChangeFile =async(e)=>{
        const file=e.target.files[0]
        console.log(file);
        file.preview=URL.createObjectURL(file)
        setImage(file)
        try {
           const addedFile = await ipfsClient.add(file) 
           const url = `https://ipfs.infura.io/ipfs/${addedFile.path}`
            setFileURL(url)
        } catch (error) {
            console.log(error);
        }
     }
     
     const handleUploadfile =()=>{
         inputRef.current.click()
     }
     useEffect(()=>{
        return ()=>{
            image && URL.revokeObjectURL(image.preview)
        }
     },[image])

    const{account,web3,contract_MM_Token,contract_MM_Market} = useSelector(state=>state.blockchain)
   /* useEffect(()=>{
        contract_Infura?.events.MarketItemCreated({
            filter:{},
            fromBlock:"latest"},(error)=>{
                if(error){
                    console.log(error);
                }else{
                 navigate('/explore')
                }
                
            })
     })*/
   /* useEffect(()=>{
        if(account && web3){
           web3.eth.personal.sign('hello worl',account,(data)=>{
               console.log(data);
           })
        }
    },[account,web3])*/
    
   async function listItem (url){    
       const tokenId = await contract_MM_Token?.methods.createToken(url).send({from:account})
      .then(receipt =>{
          return receipt.events.Transfer.returnValues.tokenId 
       })
       const priceToW = await web3?.utils.toWei(price,'ether')
       const listingPrice = await contract_MM_Market?.methods.getListingPrice().call()
       if(tokenId && listingPrice){
        await contract_MM_Market?.methods.createMarketItem(contract_MM_Token._address, tokenId,priceToW).send({
        from:account,
        value:String(listingPrice)
    })
    navigate('/explore')
    toast.success('Your NFT has listed on market')
}else{
        console.log('error');
    }
    } 
    const handleCreateNFT =async(e)=>{
        e.preventDefault()
        if(!name || !description || !fileURL || !price){
            alert('you have to file all filds') }
        const metaDataObject ={
            name,description,image:fileURL
        }
        try {
            const addedMetadata = await ipfsClient.add(JSON.stringify(metaDataObject))
            const url =  `https://ipfs.infura.io/ipfs/${addedMetadata.path}`
           listItem(url)
           
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className='create__wrapper'>
            <div className='create__layer'>
                <div className='create__form'>
                    <h1  className='create__h1'>Create New Item</h1>
                    <form onSubmit={handleCreateNFT} className='form__input'>
                        <div className='form__body'>
                            <div className='form__left'>
                                 <h1><span className='color'>Upload</span> file</h1>
                                 <div onClick={handleUploadfile} className='form__image-container'>
                                     <img className='form__img' src={image.preview} alt='' />
                                     <input ref={inputRef} className='form__input' type='file' onChange={handleChangeFile} />
                                     <div className='btn-wrapper'>
                                     <IconButton > <AddToPhotosIcon style={{fontSize:'2rem',color:'white'}} /> </IconButton>
                                     <h5>Choose your file</h5>
                                </div>
                                </div>
                            </div>
                            <div className='form__right'>
                                <div className='name__input'>
                                    <label>Name</label>
                                    <input type='text' name='name' value={name} placeholder='item name' onChange={(e)=>setName(e.target.value)} />
                                </div>
                                <div className='name__input'>
                                    <label>Price</label>
                                    <input type='text' name='price' value={price} placeholder='set price in ETH!' onChange={(e)=>setPrice(e.target.value)} />
                                </div>
                                <div className='name__input description'>
                                    <label>Description</label>
                                    <textarea name='description' value={description} row='16' type='text' onChange={(e)=>setDescription(e.target.value)}
                                     placeholder='Provided a detailed description of your item' />
                                </div>
                            </div>
                        </div>
                        <button  className='form__button'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create
