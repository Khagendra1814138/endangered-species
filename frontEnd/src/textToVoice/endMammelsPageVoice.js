import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';
import './textToVoice.css';
import {AiFillSound} from 'react-icons/ai';
export const MammelsParagraph1Voice = () => {
    const [text] = useState
    (`
        The IUCN states that 26% of mammels are endangered and faces extinction soon if action are not taken.
        Animals like land mammels are important because they play crucial rule in the foodchain and losing one animal species can have disastrous impacts on the rest of the ecosystem.
        For example, tiger species population are decreasing recently and most times, tigers are an apex preditor and is at the top of the foodchain.
        When the top preditor dies off, the prey like deers will start to over populate. More herbivores mean fewer plants, fewer plants mean less food and oxygen for other species, and so on.
    `);
  
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




///////////////////  ///////////////////////////////////////////////////////
export const MammelsParagraph2Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Small mammels like the endangered species above are also important for the ecosystem as they play their part on the foodchain as well.
        Sadly, even these small mammels are endangered and faces extinction... For example, there are 8 species of pangolin and all 8 species are listed as "critically endangered" by the IUCN.
        Pangolins are the most trafficked mammels around the world, and over the past decade, 
        more than million pangolins have been illegally taken from the wild to feed demand in China and Vietnam.
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




///////////////////  ///////////////////////////////////////////////////////
export const MammelsParagraph3Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Even the largest mammels on our planet faces extinction if we dont help them. 
        There are two species of elephants and they are the African and the Asian elephants.
        The African elephant are normally larger and has bigger ears comparing to the Asian elephants.
        It is estimated that around 90% of African elephant have been wiped out in the past centuary.
        This is because they are hunted by poachers for their ivory.
        Similary, the Asian elephant have also lost huge population. It is estimated that past three generation, their population has declined by 50%.
        This is mainly due to their habitat distruction and human expansion, leading to change in their habitat and dangerous contact with human. 
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




///////////////////  ///////////////////////////////////////////////////////
export const MammelsParagraph4Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        There are 5 different species of Rhinoceros. Two African species, the white and the black Rhinoceros. And three Asian species, greater one-horned, Sumatran and Javan Rhinoceros.
        It is estimated that there are fewer than 70 Javan and 100 Sumatran rhinos left in the wild, meaning their populations are truly under threat of extinction.
        Similarly, to the Elephants the Rhinoceros threats are mainly illegal poachers hunting for their horn and their habitat distruction.
        Although the white and the great one-horned rhnio population increase, they are still vulnerable.
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





///////////////////  ///////////////////////////////////////////////////////
export const MammelsParagraph5Voice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (
    `
        Most of the mammels species are in endangered because of their habitat loss like deforestation; population growth, hunting for meat/skin and illegal wildlife trades.
        And now, climate change is another huge issue that is started to effect the mammels species.
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


