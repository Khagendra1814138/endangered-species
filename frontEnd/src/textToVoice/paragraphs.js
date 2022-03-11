import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';

export const HomeParagraphOneVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Did you know that over 900+ species of plants and animals have gone extinct over the five centuries. And" + 
    "more than 70 species are now considered as extinct in the wild! stated by the IUCN. Extinct" +
    "in the wild means that the species is the only living members kept in captivity or as a naturalized population outside its historic range due to massive habitat loss. The" +
    "UN report states that around 1 million animal and plant species are now threatened with extinction, many within decades."
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



    