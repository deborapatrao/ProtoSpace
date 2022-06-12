import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMedia = props => {
    return <>
        <div className="social-container">
            <div>Follow Us</div>
            <div className="social-icons">
                <a href=""><FacebookIcon /></a>
                <a href=""><InstagramIcon /></a>
                {/*<a href=""><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>  // Can I use  fontawesome? */}
                <a href=""><TwitterIcon /></a>
                <a href=""><YouTubeIcon /></a>
            </div>
        </div>
    </>
}

export default SocialMedia;