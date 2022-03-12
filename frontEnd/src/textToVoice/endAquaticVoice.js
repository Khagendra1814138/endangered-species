import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';

export const AquaticPara1Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
    The IUCN red list states that 37% of sharks and rays, 33% of coral reefs, 28% of Crustaceans and many more marine species are endangered with extinction.
    This is mainly because of human activities like overfishing, plastic pollution, climate change and ocean noise by ships, oil/gas industry and military sonar. 
    Loss of species are dangereous because it is a sign showing that the ocean ecosystem is unbalanced.
    So, saving the ocean species are important because it provides food, medicine, jobs and helps to keeps our planet balanced.
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




///////////////////Help Climate Change///////////////////////////////////////////////////////
export const AquaticPara2Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
    Ocean species are vital for human being because it balances earth temperature and as they obsorve Co2 from the atmosphere and traps/absorve the earth heat under water, reducing earth temperature.
    The Ocean is a house for many tiny plant-like organisms and they provides 50-85% of our planet Oxygen and therefore, we must protect the marine species at all cost.
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




///////////////////Provide Medicine///////////////////////////////////////////////////////
export const AquaticPara3Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
    Did you know that the ocean species provides medicine to treat cancer, arthritis, Alzheimer's deisease, and heart disease.
    For example, the antiviral drugs Ara-A and AZT and the anticancer agent Ara-C, were developed from extracts of sponges found on a Caribbean reef.
    Even now the NOAA scientists have been collecting and researching on sponges, corals, and other marine organisms to create new medicines.
    For example, horseshoe crabs, seaweeds and marine bacteria have also been found to have useful medical properties.
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




///////////////////Pest Provides foods and ingredients///////////////////////////////////////////////////////
export const AquaticPara4Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
    Today, marine animals are the main source of protein for billions of people worldwide, and this demand is expected to increase even more.
    Not only sea food but ocean also provides many different ingredients that are used on our foods like soyamilk and peanutbutter.
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





///////////////////Provides Jobs & Economy///////////////////////////////////////////////////////
export const AquaticPara5Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
    It is estimated that Fisheries and aquaculture currently employs aound 56 million people. 
    In addition, more people are employed in following activities, like handling, processing and distribution of sea foods. 
    The ocean provides healthy economy to many countries, especially, to developing countries, 
    which is home to more than 3 billion people who rely on the sea to support their livelihoods and families.
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
