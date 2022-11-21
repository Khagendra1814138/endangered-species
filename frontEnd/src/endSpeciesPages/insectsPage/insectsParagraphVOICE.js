import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';


import {AiFillSound} from 'react-icons/ai';

export const InsectMainParagraphVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `This is the voice test for inset paragraph.
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