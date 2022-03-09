import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';

export const IndividualActionParagraph = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("There are already existing organizations like WWF, NRDC, Endangered, IUCN and many more... that are doing their part to protect endangered species. Their" +
    "mission is to find solutions that save the endangered species by applying the best science available and working closely with local communities. But" +
    "we should do our part as well to keep them from going extinct in order to protect the ecosystem. There" +
    "are many individual actions that you can take in order to make a positive impact on these endangered species");
  
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