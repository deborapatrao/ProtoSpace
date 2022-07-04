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
                <a href="ProtoSpace/client/src/pages/Footer/Social"><FacebookIcon /></a>
                <a href="ProtoSpace/client/src/pages/Footer/Social"><InstagramIcon /></a>
                <a href="ProtoSpace/client/src/pages/Footer/Social"><TwitterIcon /></a>
                <a href="ProtoSpace/client/src/pages/Footer/Social"><YouTubeIcon /></a>
            </div>
        </div>
    </>
}

export default SocialMedia;