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
              <Link to='/causes' className='footer-nav-links'> Threats to the Species </Link>
              <Link to='/individualAction' className='footer-nav-links'> Individual Action </Link>
              <Link to='/takeAction' className='footer-nav-links'> Take Action </Link>
              <Link to='/signUp' className='footer-nav-links'> Sign Up </Link>
              <Link to='/logIn' className='footer-nav-links'> Log In</Link>
            </li>
            <line className = "lineDown"></line>
            <li className='footerNavlink'>
              <Link to='/quiz' className='footer-nav-links'> Take Quiz </Link>
              <Link to='/worldMap' className='footer-nav-links'> World Map </Link>
              <Link to='/amphibians' className='footer-nav-links'> Endangered Amphibians </Link>
              <Link to='/birds' className='footer-nav-links'> Endangered Birds </Link>
              <Link to='/artic' className='footer-nav-links'> Endangered Artic </Link>
              <Link to='/aquatic' className='footer-nav-links'> Endangered Aquatic </Link>
              <Link to='/fungus' className='footer-nav-links'> Endangered Fungi </Link>
            </li>
            <line className = "lineDown"></line>
            <li className='footerNavlink'>
              <Link to='/plants' className='footer-nav-links'> Endangered Plants </Link>
              <Link to='/mammels' className='footer-nav-links'> Endangered Mammels </Link>
              <Link to='/endSpeciesUk' className='footer-nav-links'> Endangered Species UK </Link>
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