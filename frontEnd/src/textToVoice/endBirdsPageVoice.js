import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';

export const BirdsPara1Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `The IUCN states that 13% of birds are endangered with extinction.
    You may not know but the bird species are one of the most important animals to the environment.
    Birds plays important role in the functioning of the worlds ecosystem, which can directly impact human health, 
    food production and the economy as well as millions of other species.
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



///////////////////Pest Control///////////////////////////////////////////////////////
export const BirdsPara2Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `One of the best natural pest controllers are birds as their diet mainly consists of bugs and insects.
    This can be very benifical to agriculture around the world. Recent study shown that birds eats 400-500 million tons of insects per year.
    In china, 2/3 of House Swift birds diet consists of agricultural pests.
    In forests accross America, Evening Grosbeak are the main birds that controls Spruce Budworm outbrakes.
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


///////////////////Pollinator///////////////////////////////////////////////////////
export const BirdsPara3Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `Not only bees and butterflies, but birds are also great pollinators. For example, hummingbirds and honeyeaters birds makes big contribution, espically in high altitudes or hot climates area.
    Quarter of Salivia species in South Africa are pollinated by birds. Not only plants but bird pollinators also benifit us directly.
    Around 5% of plants that are used for medicines or foods are pollinated by birds.
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


///////////////////Spread seeds, helps coral reef and cleans nature///////////////////////////////////////////////////////
export const BirdsPara4Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `Plants seed are one of the main food source for birds. When birds travel, they take the eaten seed with them and spreads them through their droppings.
    Bringing plants back to perhaps destroyed ecosystem, and even carry plants acrross the ocean to new land.
    Vultures are the best and most efficent scavengers that takes care of the dead animals, preventing the spread of diseases like rabies and tuberculosis.
    Seabirds plays an important role in cycling nutrients and helping to fertilise marine ecosystems such as coral reefs.
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