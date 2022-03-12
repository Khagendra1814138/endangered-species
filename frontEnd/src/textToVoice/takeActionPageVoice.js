import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';

export const TakeActionParaVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `You can help the endangered species from your house with just a click of a button. 
    There are already many different reliable organizations out there working to conserve and protect the endangered species and their ecosystem. 
    From organisations that plants trees, save endangered animals to cleaning plastic on the oceans and many more. 
    Do your research and find the one that suits your interests and join them to continue supporting their work to support the endangered species. 
    Below, there are list of trustworthy organisations recommendation.`
    );
  
    const { speak, voices} = useSpeechSynthesis();
 
    return (
        <div>
            {/* <textarea value={text} onChange={(event) => setText(event.target.value)}/> */}
            <button className="textToVoiceBtn" onClick={() => speak({ text, voice:voices[2] })}>
                <div className="paraBtnIcon"><AiFillSound size="3em" color="orange"/></div>
                <div className="paraBtnLabel">Voice</div>
            </button>
        </div>
    );
}



////////////// Support World Wildlife Fund (WWF) //////////////////////////////////////////////////////////////////////////////
export const WWFParaVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `WWF is one of the most well-known conservation organization that fight against climate change and for wildlife conservation. 
    They have been doing this for decades. Theyhave made a huge positive impact to our natural world both in ocean and on the land. 
    They supports any endangered species that need protecting from the Antarctic to Mexico to Africa. 
    They help endnagered species like Tigers, Orangutans, Marine Turtles, Rhinos, Chimpanzees, Elephants, Leopards, Dolphins, Gorillas, Whales.`
    );

    const { speak, voices} = useSpeechSynthesis();
    return (
        <div>
            {/* <textarea value={text} onChange={(event) => setText(event.target.value)}/> */}
            <button className="textToVoiceBtn" onClick={() => speak({ text, voice:voices[2] })}>
                <div className="paraBtnIcon"><AiFillSound size="3em" color="orange"/></div>
                <div className="paraBtnLabel">Voice</div>
            </button>
        </div>
    );
}



////////////// Support World Wildlife Fund (WWF) //////////////////////////////////////////////////////////////////////////////
export const IUCNParaVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `The International Union for Conservation of Nature was the worlds first global environmental organisation 
    that works towards finding solutions to pressing environmental challenges. 
    There are over 185 countries that form the union and they have thousands of field projects around the globe. 
    The IUCN also work together to collect data on biodiversity and runs the Save Our Species project. 
    The aim of this project is to protect and support threatened and endagered species as well as their their habitats.`
    );

    const { speak, voices} = useSpeechSynthesis();
    return (
        <div>
            {/* <textarea value={text} onChange={(event) => setText(event.target.value)}/> */}
            <button className="textToVoiceBtn" onClick={() => speak({ text, voice:voices[2] })}>
                <div className="paraBtnIcon"><AiFillSound size="3em" color="orange"/></div>
                <div className="paraBtnLabel">Voice</div>
            </button>
        </div>
    );
}


////////////// Support One Tree Planted (OTP) //////////////////////////////////////////////////////////////////////////////
export const OTPParaVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `The One Tree Planted is a non-profit organisation that aims to focus on reforestation all around the world. 
    Theorganisation operates in six region across the world, including North America, Latin America, the Pacific, Europ, African and Asia. 
    OTPworks as the intermediary for tree planting by collecting donations then allocating the donation to its reforestation partners like NGO's, 
    small conservation organizations, watershed groups and local governmental agencies. Asof December, 2020, they have planted more than 10 million trees.`
    );

    const { speak, voices} = useSpeechSynthesis();
    return (
        <div>
            {/* <textarea value={text} onChange={(event) => setText(event.target.value)}/> */}
            <button className="textToVoiceBtn" onClick={() => speak({ text, voice:voices[2] })}>
                <div className="paraBtnIcon"><AiFillSound size="3em" color="orange"/></div>
                <div className="paraBtnLabel">Voice</div>
            </button>
        </div>
    );
}



////////////// Use Ecosia Search Engine //////////////////////////////////////////////////////////////////////////////
export const UseEcosiaParaVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `Ecosia is a search engine like google and it dontates 80% of its profit to nonprofit organisation that focuses on reforestation. 
    Ecosia operates all around the world including North America, South America, Europ, Africa, Asia and Australia. 
    It main income is though the advertisements payment. Ecosia has around 15 millions users and the users conducts around 10,000 search every minutes. 
    By July 2020, it has planted over 100 million trees, resulting in over 50,000 metric tonnes of CO2 being removed from the atmosphere each month.`            
    );

    const { speak, voices} = useSpeechSynthesis();
    return (
        <div>
            {/* <textarea value={text} onChange={(event) => setText(event.target.value)}/> */}
            <button className="textToVoiceBtn" onClick={() => speak({ text, voice:voices[2] })}>
                <div className="paraBtnIcon"><AiFillSound size="3em" color="orange"/></div>
                <div className="paraBtnLabel">Voice</div>
            </button>
        </div>
    );
}


////////////// Support The Ocean Cleanup (TOC) //////////////////////////////////////////////////////////////////////////////
export const TOCParaVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `They are a nonprofit engineering organization that develops technology to clean plastic pollution. 
    They have developed technologies, which helps to extract plastic pollution from the oceans and intercept plastic in rivers before it can reach the ocean. 
    They aims to launch around 60 such systems across the world. As of 2021, such asystem have been deployed in Jamica, Indonesia, Vietnam and more. 
    They aim to prevent 80% of riverine trash coming from 1000 rivers worldwide and remove 90% of floating ocean plastic by 2040.`           
    );

    const { speak, voices} = useSpeechSynthesis();
    return (
        <div>
            {/* <textarea value={text} onChange={(event) => setText(event.target.value)}/> */}
            <button className="textToVoiceBtn" onClick={() => speak({ text, voice:voices[2] })}>
                <div className="paraBtnIcon"><AiFillSound size="3em" color="orange"/></div>
                <div className="paraBtnLabel">Voice</div>
            </button>
        </div>
    );
}


////////////// Support Ocean Conservancy (OC) //////////////////////////////////////////////////////////////////////////////
export const OCParaVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `Ocean Conservancy is a non-profit organisation that aims to promote healthy and safe ocean ecosystems, and to oppose practices that threaten oceanic life. 
    Their program includes protection of special marine habitats such as the restoring of the coral reef through the coral tree nursaries, protection of marine species, sea turtles and their habitats. 
    Restoring sustainable fisheries, reducing the human impact on ocean ecosystems, international ocean cleanup to remove trash from the ocean, andprotecting artic marine species from an oill spill.`           
    );

    const { speak, voices} = useSpeechSynthesis();
    return (
        <div>
            {/* <textarea value={text} onChange={(event) => setText(event.target.value)}/> */}
            <button className="textToVoiceBtn" onClick={() => speak({ text, voice:voices[2] })}>
                <div className="paraBtnIcon"><AiFillSound size="3em" color="orange"/></div>
                <div className="paraBtnLabel">Voice</div>
            </button>
        </div>
    );
}
