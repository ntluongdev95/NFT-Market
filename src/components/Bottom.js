import React from 'react'
import '../styles/bottom.scss'
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
function Bottom() {
    return (
        <div className='bottom__wrapper'>
            <div className='bottom__header'>
                <div className='bottom__header-left'>
                    <h2 className='bottom__h2'>Stay in the loop</h2>
                    <p className='bottom__p'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
                    <div className='bottom__input'>
                        <input type='text' placeholder='Your email address' />
                        <button className='bottom__button'>Sign up</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Bottom
