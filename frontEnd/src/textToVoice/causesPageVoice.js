import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';

import './textToVoice.css';

import {AiFillSound} from 'react-icons/ai';




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




////////////// Plastic - Pollution //////////////////////////////////////////////////////////////////////////////
export const PlasticPollutionVoice = () => {
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


////////////// C h e m i c a l - P o l l u t i o n //////////////////////////////////////////////////////////////////////////////
export const ChemicalPollutionVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Chemical pollutents enters our water from Pestiside chemicals used by the farmers, industrial activities and our home. Chemical" +
    "pollution in river waters can lower the aquatic species fertility, damage to the immune systems or cause deformities, tumours and even death in any aquatic species that is exposed to it. Not" +
    "just animals but humans can also suffer some of these effects when our drinking water becomes polluted."
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



////////////// I n f r a s t r u c t u r e 's //////////////////////////////////////////////////////////////////////////////
export const InfrastructuresParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Building of infrastructures, such as road can alter ecological conditions, cut through natural habitats, which can lead to reduce populations of many wildlife species. For" +
    "example, building a roads through the Amazon forest can destroy habitat or cut off the migration route for endangered species. Building" +
    "of dams on the rivers can cut off fresh water from species that are already struggling through drouts and can stop native fishes species from migrating and breeding."
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



////////////// C l i m a t e - C h a n g e //////////////////////////////////////////////////////////////////////////////
export const ClimateChangeParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Climate change is one of the biggest threat to the endangered spcies. Because of climate change Sea levels are rising and oceans are becoming warmer, threatning the marine species. Intense" +
    "droughts threaten crops, wildlife and freshwater supplies. From polar bears in the Arctic becasue of melting ice to marine turtles off the coast of Africa, our planets life is at risk of extinction. Humans" +
    "activities like the burning of coal, oil and gas are the reason for this."
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



////////////// i l l e g a l - T r a d i n g //////////////////////////////////////////////////////////////////////////////
export const IllegalTradingParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    (" Did you know that the illegal wildlife trade is the fourth largest criminal industry in the world, after drugs, arms, and human trafficking. It" +
    "is estimated that it runs into billions of dollars. Poaching of Elephant for ivory and Tigers for their skins and bones are the most common examples. Also," +
    "hunting for pangoling scales and meat is another example common in Asia. There" +
    "are countless other species that are similarly overexploited, from marine turtles to timber trees and many more"
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



////////////// Habitai - Distruction //////////////////////////////////////////////////////////////////////////////
export const HabitatDistructionParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Habit distruction are another major threats to the endangered species. The" +
    "main cause for this is becuase of Agriculture such as palm oil farm, land conversion for development, water development, pollution and climate change. Also," +
    "natural disaster like wildfire can devistate the species homeland. Habitat distruction/loss can lead to loss of prey/food, water, cover, and places to raise young wildlife. Everyday" +
    "there are fewer places left that wildlife can call home."
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


////////////// Invasive - Species //////////////////////////////////////////////////////////////////////////////
export const InvasiveSpeciesParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("This is when a non-native species is accidently or intentionally introduced, and the species grow and reproduce rapidly, then spread across ecosystems aggressively. It" +
    "been estimated that around 42% of threatened or endangered species are at risk due to invasive species. Not," +
    "only animals but humans are also at risk from invasive species. For example, invasive species are destroying agriculture farms all around the world."
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



////////////// Over - Fishing //////////////////////////////////////////////////////////////////////////////
export const OverFishingParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Fishing is one of the most significant reason for declines in ocean species population. Global" +
    "sea food demand has increased rapidly and people are taking more fishes from the oceans, rivers and lakes than it can reproduce and sustain. For example," +
    "fishes like salmon, sturgeons, tunas and cods have undergone dramatic decline. Overfishing" +
    "can also lead to bycatch, which is the capture of unwanted species while fishing like sea turtles. This" +
    "is a serious threat to the endangered marine species that causes loss of billions of fishes"
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




////////////// Disease //////////////////////////////////////////////////////////////////////////////
export const DiseaseParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("When the ecosystem becomes unhealthy because of loss in biodiversity and threats such as climate change, pollution, habitat loss or invasive species, wildlife" +
    "species and the ecosystem become more vulnerable to emerging diseases. Diseases" +
    "carried by or caused by invasive species are threatning to the native species, as they might not have natural immunity. For example," +
    "Sea turtle around the world are becoming infected with Fibropapillomatosis disease, which causes tumors to appear on the skin or internally."
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



////////////// Oil and Gas Development //////////////////////////////////////////////////////////////////////////////
export const OilGasDevelopmentParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Many of our planet most diverse and ecologically important areas like the Arctic and Congo Basin hold large deposits of oil and gas. Oil" +
    "and gas exploration or extracting causes disruption of migratory pathways, degradation of important animal habitats, and oil spills can be harmful to these species. For example," +
    "whales and other marine species uses sounds to navigate, find mates, and find food. However, noise from oil and gas exploration and drilling could cause injury, confusion, and even death to these species."
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