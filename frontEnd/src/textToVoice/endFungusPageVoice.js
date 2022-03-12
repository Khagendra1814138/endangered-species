import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';

export const FungusPara1Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Fungi are one of the most important species in our planet. They may not look that useful but fungi have a crucial role to keep our planet ecosystem balanced and are essential for circle of life.
        Also, they provide food, medicine, textiles/materials, recycles waste, cleans deadly chemicals and can even control pests and be used as a bio fuel. 
        Furthermore, scientists are still researching and finding countless potential solutions, which can be benifical to humans.
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




///////////////////Provides food///////////////////////////////////////////////////////
export const FungusPara2Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Fungi provides sources of food for us human everyday and event to other animals species in the form of mushrooms.
        Not only mushrooms, but fungi are found and used in many food and drink products.
        For example, they are found in foods like cheese, beer, wine, cakes, bread, soyabean product and many more.
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




///////////////////Provide Medicine and Pest control///////////////////////////////////////////////////////
export const FungusPara3Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Fungi are found in many medicine that treats human and animal diseases because they naturally produce antibiotics to kill or inhibit the growth of bacteria.
        Some medicines and drugs that are made of fungi are Penicillian, Paclitaxel (treat cancer), and other medicine that treats Malaria, diabetes... the lists goes on.
        Some gungi like the Chinese caterpillar fungus, which parasitise insects, can be benifical to farmers for controlling insect pests.
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




///////////////////Recycle and Plant Growth///////////////////////////////////////////////////////
export const FungusPara4Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Fungi are the best natural recyclers. When you see a food starting to mold, it is the fungi that is slowely recycling those waste foods.
        They are resposible for breaking down organic matters and releasing carbon, oxygen, nitrogen, and phosphorus into the soil and the atmosphere.
        Fungi are vitally important for the groth of plants and farm land because of the mycorrhizal relationship between fungi and plant roots.
        Around 80–90% of trees and grasses would not survive without fungi.
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





///////////////////The Future of Fungi///////////////////////////////////////////////////////
export const FungusPara5Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Researchers and company are already creating materials using fungi to make products.
        For example, building materials like fungus bricks to build houses, which are more portable, durable and have better compression properties than fibre board.
        Also, fungus building materials are flame retardant, which means it slows the groth of fire.
        Furthermore, mycelium products are biodegradable, thus reducing pollution on our planet.
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


///////////////////WaterFilter///////////////////////////////////////////////////////
export const FungusPara6Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Mushrooms are being tested and researched by scientists for their ability to filter water chemical and pathogens. 
        Meaning, clean water can benifit millions of people around the world who do not have access to fresh water, which can then can prevent waterborne illnesses like typhoid, cholera, dysentery, gastroenteritis, and hepatitis.
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