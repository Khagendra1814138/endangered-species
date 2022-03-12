import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';

export const PlantsPara1Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Did you know that more than 15 Billions of plants are chopped down each year! And a single tree can absorbe up to
        48 Pounds of carbon dioxide (Co2) every year, making them the best natural carbon scrubber machine.
        Since plants absorbe Co2 they are also responisble for cooling our planet temperature and helping to fight cliate change. 
        From photosynthis, plants releases Oxygen and trees reduces and filters 7-24% particulate matters making the air fresh and clean for us.
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




///////////////////Materials///////////////////////////////////////////////////////
export const PlantsPara2Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Plants provides many material that is essential for us and are used everyday. 
        For example, most used materials include wood, paper, toilet paper, cotton, rubber, cosmetics, soap, shampoo and more...
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




/////////////////// Medicine///////////////////////////////////////////////////////
export const PlantsPara3Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        As you may already know, plants are the main source of medicines and plays important role in the discovery and reasearch of new drugs.
        Plants like neem tree, sandalwood tree, basil plant are used in most of the medicines.
        It is estimated that between 50,000 - 80,000 flowering plants are used in medicine worldwide.
        Some of the most common medicine and drugs that comes from plants are aspirin, morphine, chemotherapy, and there are many more.
        Not only health but plants also has economic benifit.
        Therefore, loss of plants means loss of medicines and drugs.
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




///////////////////Provides foods and Shelter///////////////////////////////////////////////////////
export const PlantsPara4Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Plants are the main source of food for us and other species. 
        Without plants there will be not food because all carbon in proteins, fats and carbohydrates is made from photosynthesis in plants.
        Even meat products are from animals are because of plants.
        Furthermore, large trees provides shelter for many endangered animals species like birds and mammels.
        And small plant provides shelter for insects and other small species.
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





///////////////////Filters water & Regulate Water cycle///////////////////////////////////////////////////////
export const PlantsPara5Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Plants plays important role in filtering water. They filter out minerals, carbon dioxide, ammonia, nitrates and nitrites, 
        which helps to keep the water clear and clean. This is benifical for aquatic species like fish as it keeps the pond clean.
        In addition, plants are responisble for keeping the water cycle running by cleaning and distributing the water supply. 
        Through the transpiration process, the water is moved from the soil to the roots, up their bodies, 
        and back into the atmosphere. The water is collected on the cloud and then returns to the earth through rain.
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


/////////////////// Helps the environment & Soil improves soil quality ///////////////////////////////////////////////////////
export const PlantsPara6Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Plants protects the land and soil from washing asway because of their roots and the micro organism that lives around them.
        When a plant leaf falls on the ground or when a plant dies, it decomposes, fertilising the soil.
        Meaning plants helps to improve the soil quality and can prevent landslide, flood and soil erosion.
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