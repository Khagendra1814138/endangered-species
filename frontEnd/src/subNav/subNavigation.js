import React from 'react';

import './subNav.css';

import {Link} from 'react-router-dom';

import {FaArrowLeft} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';


export const HomeSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./SignUp" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo> 
                <label className= 'txt'> Go to Sign-Up </label>
            </Link>

            <Link exact to="./endangeredSpecies" className='nextSubNav'>
                <label className= 'txt2'> Go to Endnagered Species</label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const EndangeredSpeciesSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="/" className='previousSubNav'>
            <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo> 
                <label className= 'txt'> Go to Home </label>
            </Link>

            <Link exact to="./causes" className='nextSubNav'>
                <label className= 'txt2'> Causes Threatning the Species </label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const CausesSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./endangeredSpecies" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo> 
                <label className= 'txt'>  Go to Endangered Species </label>
            </Link>

            <Link exact to="./individualAction" className='nextSubNav'>
                <label className= 'txt2'> Go to Individual Action</label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const IndividualActonSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./causes" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo> 
                <label className= 'txt'>  Causes Threatning the Species </label>
            </Link>

            <Link exact to="./takeAction" className='nextSubNav'>
                <label className= 'txt2'> Go to Take Action </label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo> 
            </Link>
        </div>
    );
}


export const TakeActonSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./individualAction" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo>  
                <label className= 'txt'>  Go to Daily Individual Action</label>
            </Link>

            <Link exact to="./quiz" className='nextSubNav'>
                <label className= 'txt2'> Go to Quiz Page</label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const QuizSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./takeAction" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo> 
                <label className= 'txt'>  Go to Take Action</label>
            </Link>

            <Link exact to="./login" className='nextSubNav'>
                <label className= 'txt2'> Go to Sign-in</label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const SignInSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./quiz" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo> 
                <label className= 'txt'>  Go to Quiz Page</label>
            </Link>

            <Link exact to="./signUp" className='nextSubNav'>
                <label className= 'txt2'> Go to Sign-up</label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const SignUpSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./login" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo> 
                <label className= 'txt'>  Go to Sign-in Page</label>
            </Link>

            <Link exact to="./" className='nextSubNav'>
                <label className= 'txt2'> Go to Home</label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}















export const AmphibianPageSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./endSpeciesUk" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo> 
                <label className= 'txt'>  Endangered Species in UK </label>
            </Link>

            <Link exact to="./birds" className='nextSubNav'>
                <label className= 'txt2'> Endangered Bird Species</label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const BirdsPageSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./amphibians" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo>  
                <label className= 'txt'>  Endangered Amphibian Species</label>
            </Link>

            <Link exact to="./artic" className='nextSubNav'>
                <label className= 'txt2'> Endangered Artic Species</label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const ArticPageSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./birds" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo>  
                <label className= 'txt'>  Endangered Bird Species</label>
            </Link>

            <Link exact to="./aquatic" className='nextSubNav'>
                <label className= 'txt2'> Endangered Aquatic Species </label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const AquaticPageSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./artic" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo>  
                <label className= 'txt'> Endangered Artic Species</label>
            </Link>

            <Link exact to="./fungus" className='nextSubNav'>
                <label className= 'txt2'> Endangered Fungi Species</label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const FungiPageSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./aquatic" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo>  
                <label className= 'txt'>  Endangered Aquatic Species </label>
            </Link>

            <Link exact to="./plants" className='nextSubNav'>
                <label className= 'txt2'> Endangered Plant Species </label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const PlantPageSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./fungus" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo> 
                <label className= 'txt'>  Endangered Fungi Species</label>
            </Link>

            <Link exact to="./mammels" className='nextSubNav'>
                <label className= 'txt2'> Endangered Mammels Species </label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const MammelsPageSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./plants" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo> 
                <label className= 'txt'>  Endangered Plants Species</label>
            </Link>

            <Link exact to="./endSpeciesUK" className='nextSubNav'>
                <label className= 'txt2'> Endangered Species in UK</label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}

export const UkPageSuvNav = () => {
    return( 
        <div className="subNavFrame">
            <Link exact to="./mammels" className='previousSubNav'>
                <logo className='logo1'> <FaArrowLeft size="4em" color="orange"/> </logo> 
                <label className= 'txt'>  Endangered Mammels Species</label>
            </Link>

            <Link exact to="./amphibians" className='nextSubNav'>
                <label className= 'txt2'> Endangered Amphibians Species</label>
                <logo className='logo1'> <FaArrowRight size="4em" color="orange"/> </logo>
            </Link>
        </div>
    );
}