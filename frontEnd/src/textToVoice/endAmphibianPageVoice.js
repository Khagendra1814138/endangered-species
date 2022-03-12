import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';

export const AmphibianPara1Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `Did you know that Amphibians were the first vertebrates to colonise the land evolving around 370 million years ago. They have already survived four mass extinction events. The IUCN Red List states that around 40% of Amphibians species are already threatned with Extinction. 
    It is very important to stop this extinction because Amphibians like frogs, toad and salamander are critical part of the nature as they are both predetor and prey. Apmhibians species mainly eats insects pests, which can benifit Agriculture around the world. 
    They eat insects like musquitos, helping to reduce the spread of diseases like malaria.
    `
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





export const AmphibianPara2Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `Amphibians have moist, permeable skin, which makes them vulnerable to drought and toxic substances, 
    meaning they can be used as an indicator of the ecosystem health. For example, the health of important ecosystems such as forests and wetlands.
    Amphibians skin contains different types of peptides, which can perhaps offer possible medical cures for many varities of human diseases.
    `
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



export const AmphibianPara3Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `Amphibians species are already used in medicines to treat humans. For example, medicines like painkillers, high blood pressure medication and 
    even to block deadly disease like HIV transmission and treat anti-biotic resistant bacterial strains.
    Therefore, as this special species starts to disappear, so do the potential treatments and cures to human diseases.
    `
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



export const AmphibianPara4Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `One of the most fascinating thing about Amphibians are that most of them have ability to regrow their limbs.
    This ablility is currently being studied by scientists around the world to gain new knowledge on how to improve tissue regeneration and growth.
    `
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