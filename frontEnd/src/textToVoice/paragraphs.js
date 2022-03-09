import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';

export const HomeParagraphOneVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Did you know that over 900+ species of plants and animals are already extinct. and" + 
    " more than 80 species are now considered as extinct in the wild.");
  
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



//C A U S E S P A G E
export const CausesPageParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    "Wildlife in our planet is under threat from all sides, from facing down habitat loss and the impact of climate change. Some" + 
    "of the biggest threats that the endangered species faces includes illegal wildlife trade, habitat destruction, invasive species, pollution, and climate change."
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

export const CausesPagePlasticPollutionVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    "There are 500 times more pieces of microplastic in our ocean than there are stars in our galaxy! More" +
    "More than eight hundred million tonnes of plastic waste are thrown into our ocean every year, washing " + 
    "up on previously pristine parts of the planet.  This" + 
    "is causing threat to the survival of more than 600 species of marine species. For" +
    "example, species like fishes gets caught stuck on plastic nets or consumes them, leading to their death."
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
    