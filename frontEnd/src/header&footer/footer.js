import React from 'react';

import './footer.css';

import {Link} from 'react-router-dom';

import {FaBook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';

export const Footer = () => {
    return( 
        <footer className = "footerMainFrame">
          <logo>
            <Link to='/' className='footer-logo'> <FaBook size="3em" color="#1888ff"/> </Link>
          </logo>
          <box className = "pageLinkBox">
            <li className='footerNavlink'>
              <Link to='/' className='footer-nav-links'> Home </Link>
              <Link to='/endangeredSpecies' className='footer-nav-links'> Endangered Species </Link>
              <Link to='/' className='footer-nav-links'> Threats to the Species </Link>
              <Link to='/' className='footer-nav-links'> Individual Action </Link>
              <Link to='/' className='footer-nav-links'> Take Action </Link>
              <Link to='/' className='footer-nav-links'> Sign Up </Link>
              <Link to='/' className='footer-nav-links'> Endangered Species UK </Link>
            </li>
            <line className = "lineDown"></line>
            <li className='footerNavlink'>
              <Link to='/' className='footer-nav-links'> Amphibians </Link>
              <Link to='/' className='footer-nav-links'> Birds </Link>
              <Link to='/' className='footer-nav-links'> Artic </Link>
              <Link to='/' className='footer-nav-links'> Aquatic </Link>
              <Link to='/' className='footer-nav-links'> Fungi </Link>
              <Link to='/' className='footer-nav-links'> Plants </Link>
              <Link to='/' className='footer-nav-links'> Mammels </Link>
            </li>
          </box>
          <box className = "socialLinkBox">
            <label className='socailMediaLabel'>FOLLOW US</label>
            <logo className = "socialMediaLogo">
              <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank"> 
                <FaInstagram size="2em" color="lightblue"/> 
              </Link>
            </logo>
            <logo className = "socialMediaLogo">
              <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank"> 
                <FaFacebookSquare size="2em" color="lightblue"/> 
              </Link>
            </logo>
            <logo className = "socialMediaLogo">
              <Link to={{ pathname: "https://twitter.com/home" }} target="_blank"> 
                <FaTwitterSquare size="2em" color="lightblue"/> 
              </Link>
            </logo>
          </box>
        </footer>
    );
}