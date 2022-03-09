import React from 'react';

import './socialShare.css';

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import {
FacebookIcon,
TwitterIcon,
WhatsappIcon,
} from "react-share";

// import {
//     FacebookShareCount,
//     HatenaShareCount,
//     OKShareCount,
//     PinterestShareCount,
//     RedditShareCount,
//     TumblrShareCount,
//     VKShareCount
//   } from "react-share";

const shareUrl="http://localhost:3000/";

// {/* <FacebookIcon size={32} round={true} /> */}

// https://www.npmjs.com/package/react-share   This is rthe link of the library

export const SocialShareFunction = () => {
    return( 
        <div className="socialShareContainer">
            <div className='socialLogoFacebook'>
                <FacebookShareButton url={shareUrl} quote={"Learn about endangered species all around the world?"} hashtag={"#EndageredSpecies"}> 
                    <FacebookIcon size={52}/> 
                </FacebookShareButton>
            </div>

            <div className='socialLogoTwitter'>
                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={52}/>
                </TwitterShareButton>
            </div>

            <div className='socialLogoWhatsapp'>
                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={52}/>
                </WhatsappShareButton>
            </div>
        </div>
    );
}