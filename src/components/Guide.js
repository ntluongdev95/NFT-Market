import React from 'react'
import '../styles/guide.scss'
function Guide() {
    return (
        <div className='guide__wrapper'>
            <h1 className='guide__title'>Create and sell your NFTs</h1>
            <div className='guide__box'>
                <div className='guide__steps'>
                    <img className='guide__image' src='https://opensea.io/static/images/icons/wallet.svg' alt='' />
                    <h3 className='guide__h3'>Set up your wallet</h3>
                    <p className='guide__p'>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the <span>wallets we support</span> .</p>
                </div>
                <div className='guide__steps'>
                    <img className='guide__image' src='https://opensea.io/static/images/icons/collection.svg' alt='' />
                    <h3 className='guide__h3'>Create your collection</h3>
                    <p className='guide__p'>Click <span>My Collections </span>and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
                </div>
                <div className='guide__steps'>
                    <img className='guide__image' src='https://opensea.io/static/images/icons/nft.svg' alt='' />
                    <h3 className='guide__h3'>Add your NFTs</h3>
                    <p className='guide__p'>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
                </div>
                <div className='guide__steps'>
                    <img className='guide__image' src='https://opensea.io/static/images/icons/sale.svg' alt='' />
                    <h3 className='guide__h3'>List them for sale</h3>
                    <p className='guide__p'>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>
                </div>
            </div>
        </div>
    )
}

export default Guide
