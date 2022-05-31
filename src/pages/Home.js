import React, { useEffect } from 'react'
import '../styles/home.scss'
import Guide from '../components/Guide'
import Resources from '../components/Resources'
import Collection from '../components/Collection'
import Bottom from '../components/Bottom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import{Link} from 'react-router-dom'

function Home() {
    
    return (
        <div className='home'>
            <div className='home__layer'>
            <div className='home__left'>
                <h1 className='home__h1'>Discover, collect, and sell extraordinary NFTs</h1>
                <div className='home__span'>OpenSea is the world's first and largest NFT marketplace</div>
                <div className='home__buttons'>
                    <div className='home__button button1'>
                        <Link to='/explore'>Explore</Link>
                    </div>
                    <div className='home__button button2'>
                        <Link to='/create'>Create</Link>
                    </div>
                </div>
            </div>
            <div className='home__right'>
                <img src='https://open-see.vercel.app/head.png' className='home__image' alt='' />
            </div>
            </div>
             <Guide />
             <Resources />
             <Collection />
             <Bottom />
             <ToastContainer autoClose={3000} />
        </div>
    )
}

export default Home
