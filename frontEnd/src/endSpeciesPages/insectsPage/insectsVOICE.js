import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';


import {AiFillSound} from 'react-icons/ai';

export const InsectMainParagraphVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (`
        The International Union for Conservation of Nature (IUCN) states that around 33% of the insects species are threatened with extinction.
        Insects population are declineing eight times faster than mammals, birds and reptiles, according to a study conducted by academic journal Biological Conservation,  
        this will have a huge impact, because insects are pivotal to the functioning of an ecosystems.
        The main causes of this problem is because of intensive farming with pesticides and fertilisers, biological factors, infrastructure developments, deforestation,
        human interference with rivers and wetlands and, lastly, climate change.
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


export const InsectsDietVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (`
        Insects are also a source of food for many animals such as birds, amphibians, small mammals, bats, reptiles, and fishes.
        Without insects, these animals would disappear as they will have no food to eat.
        Not just animmals, but they also provide food to humans. 
        In some parts of Asia, Africa and Latin America, Crickets, ants and locusts, are a popular food,
            and this practice is spreading to Europe and North America.
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



export const InsectsPollinatorVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (`
        Almost every plants, both wild and cultivated, need natural pollinators to reproduce and survive. 
        Most insects fall within this group and among them are butterflies, beetles, flies and, most importantly, honey bees.
        87% of all plant species around tghe world require animal pollination, most of it delivered by insects.
        Meaning, without insects it is impossible to feed the global human population.
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



export const InsectsCleanFertelPestContVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (`
        Many insects, such as beetles, are scavengers and eat dead animals. 
        They do the same job as, scavengers birds, eating rotting dead bodies, preventing disease from spreading and returning nutrients to the soil.
        Insects like ladybirds, hoverflies, ground beetles and lacewings are important biocontrol agents thet controls insects pests.
        For eaxmple, lacewings kills up to 100 aphids a day, helping vegetables, fruits and plants in general.
        Woodboring beetles and wasps help to recycle the nutrients in decaying timber, while an army of tiny invertebrates including springtails, silverfish, worms and woodlice help to break down the leaves that fall every autumn.
        
        Animals dung would build up in our pastures were it not for the prompt arrival of dung beetles and flies, which swiftly recycle it, providing nutrients for the grass to grow. Animal corpses, which otherwise might take months to rot, are rapidly consumed by maggots and carrion beetles. 
        Ants and other burrowing insects help to erate the soil and disperse seeds.
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



export const InsectsEconomyVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (`
        Some insects species produce substances that form the basis of sectors of the economy, such as the honey and wax industries provided by bees. 
        Another example is the silkworm, which produces silk that is used to make clothes and many products that are used daily. 
        In addition, Jim McClelland, sustainable futurist, pointed out that the global edible insect market will be worth USD 7.96 million by 2030.
        Furthermore, approximately three-quarters of all crop types grown by humans require pollination by insects, a service estimated to
        be worth between $235 billions to $577 billions per year worldwide.
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