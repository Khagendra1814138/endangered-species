import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';

export const TakeActionParaVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("You can help the endangered species from your house with just a click of a button. There" + 
    "re already many different reliable organizations out there working to conserve and protect the endangered species and their ecosystem. From" + 
    "organisations that plants trees, save endangered animals to cleaning plastic on the oceans and many more. Do" + 
    "your research and find the one that suits your interests and join them to continue supporting their work to support the endangered species. Below," +
    "there are list of trustworthy organisations recommendation");
  
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