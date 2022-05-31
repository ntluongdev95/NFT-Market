import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/resources.scss'
function Resources() {
    return (
        <div className='resources'>
            <h1 className='resources__h1'>Resources for getting started</h1>
            <div className='resources__grid'>
                <div className='resources__card'>
                    <img className='resources__image' alt='' src='https://opensea.io/blog/wp-content/uploads/2022/02/image-13.png' className='resources__image' />
                    <div className='resources__title'>
                         <Link to='' >How to Easily Setup a MetaMask Wallet</Link>
                    </div>
                </div>
                <div className='resources__card'>
                    <img className='resources__image' alt='' src='https://opensea.io/blog/wp-content/uploads/2022/02/76edde93ea6402d5818fbc03767aeda0.jpg' className='resources__image' />
                    <div className='resources__title'>
                         <Link to='' >How to Fund MetaMask with ETH </Link>
                    </div>
                </div>
                <div className='resources__card'>
                    <img className='resources__image' alt=''  src='https://opensea.io/blog/wp-content/uploads/2022/01/image-10.png' className='resources__image' />
                    <div className='resources__title'>
                         <Link to='' >How to Find an NFT You Love</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources
