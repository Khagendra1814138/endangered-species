import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';

export const ArticParagraph1Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        It is estimated that one quarter of native mammals are now at risk of extinction in Britain. 
        The first official Red List for British Mammals, shows that 11 of 47 mammels native to Britian are classified as being risk of extinction.
        And 5 futher species are classified as "near threatened", which mean they will become endangered if action are not taken.
        The Red List of Britain most endangered birds has increased to 70 species out of 245 bird species.
        Not all the species listed below are endangered and its a mix of both endangered and nearly threatened species.
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


/////////////////////////  ///////////////////////////////////////////////////////
export const ArticParagraph2Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        These are the list of mammels species in the Uk that are listed as vulnerable, endangered or critically endangered.
        For example, the wildcat and the greater mouse-eared bat is listed as critically endangered. And the beaver, red squirrel and the water vole is listed as endangered.
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



/////////////////////////  ///////////////////////////////////////////////////////
export const ArticParagraph3Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        These are the list of mammels species in the Uk that are listed as vulnerable, endangered or critically endangered.
        For example, the wildcat and the greater mouse-eared bat is listed as critically endangered. And the beaver, red squirrel and the water vole is listed as endangered.
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