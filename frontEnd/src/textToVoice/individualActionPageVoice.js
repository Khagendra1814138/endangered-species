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
    "we should do our part as well to protect the endangered species from extinction and doing so can protect our ecosystem. There" +
    "are many individual actions that we can take everyday to make a positive impact on these endangered species. We" + 
    "can take small steps everyday that can reduce our carbon footprint such as reducing your fossil fuel emmission and electric enengy consumption"
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



////////////// Share Information //////////////////////////////////////////////////////////////////////////////
export const ShareInformationParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("One of the biggest steps you can take is by becoming a messenger for those without a voice. Be" +
    "a supporter for endangered species. Spread your message to your family and friends, and show them how they can contribute. Use" +
    "social media to share existing guids and educate your friends and family. Try to reach as many people as you can. The" +
    "power to help the endangered species is in your hands. Just by doing few small things can make a huge difference.");

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



////////////// P u r c h a s i n g - H a b i t //////////////////////////////////////////////////////////////////////////////
export const PurchasingHabitParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Avoid products that are made from endangered species like fur from tigers, sea otters and crocodile skin. And" +
    "medicinal products made from rhinos, tiger or pangolin. Dont" +
    "buy endangered species like parrots, macaws, cockatoos, turtles, lizards and plants like orchids, cacti and cycads. If" +
    "you are not sure about the product or the company, always do your research and learn about the companies before buying the products. Also," +
    "dont buy items made of wood from rainforest trees or endangered trees."
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



////////////// Recycle Reuse and Dispose//////////////////////////////////////////////////////////////////////////////
export const RecycleReuseDisposeParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Buy less plastic products. Always take your bags to the store, reuse containers and plastic bags and carefully dispose of any lightweight plastics. Animals" +
    "gets tangled in these products, end up in the ocean consumed by small fish and it can kill off beneficial microorganisms. Always" +
    "recycle plastics, paper, metal cans and glass. When taking your trash out, make sure that the bag is sealed safely so the" +
    "dangerous compounds like bleach, batteries, pesticides, and other chemical are disposed properly at a specialized facility."
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



////////////// Support Organisation //////////////////////////////////////////////////////////////////////////////
export const SupportOrganisationParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("As mentioned already, there are many different organizations focused on protecting the endangered species and protecting their native habitats. For example," +
    "organizations like the WWF, The Nature Conservancy, One Tree Planted, IUCN and countless others that are dedicated to the conservation of our endangered species and protecting vulnerable wild spaces. Do" +
    "your own research and find an organization that you feel is doing good work, and donate what you can to further the cause of that organisation."
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



////////////// Reduce Dairy Products //////////////////////////////////////////////////////////////////////////////
export const ReduceDairyMeatProductsParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Animal farming is the main cause of over water consumption, pollution, global warming and deforestation. Livestock" +
    "produces higher greenhouse gases on our atmosphere than consumption of fossil fuels. For example," +
    "farming industry is the cause of deforestation, soil erosion, habitat loss, species extinction and more. To" + 
    "raise animals for food, large amounts of food, water, energy, and land are required. Therefore," + 
    "by changing your diet to more plant-based food, you aid the endangered species and rescue of our planet."
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



////////////// Smart Transport //////////////////////////////////////////////////////////////////////////////
export const SmartTransportParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Try using your vehicle less often and when you are traveling try to Carpool or shareride when you can. Always" +
    "consider using public transportation instead of driving; that way, you are lowering your carbon footprint. Even" +
    "better if you travel by walking or riding bicycle as it can benifit your health as well. If" + 
    "you are driving then make sure that you are driving smart instead of wasting gas. Like go for a regular check-up of your car to make sure it does not consume extra fuel. If" + 
    "you can, switch your fossil fuel car to electric powered car."
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



////////////// Reduce Energy Consumption //////////////////////////////////////////////////////////////////////////////
export const ReduceEnergyConsumptionParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("It is estimated that Approximately 40% of global CO2 emissions are emitted from electricity as it involves burning of fossil fuels. So," +
    "by limiting your household energy consumption, you are limiting the amount of C02 being put into the environment by power plants. You" +
    "can contribute to tackle this issue by lowering your heater temperature, turn off or use less electronic devices when not nessary like your TV etc. If" + 
    "necessary switch your energy supplier to green energy supplier. Also, you can install solar power to your household."
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


////////////// Keep your garden healthy //////////////////////////////////////////////////////////////////////////////
export const KeepGardenHealthyParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("In your garden, avoid using pesticides and herbicides as toxic chemicals can be consumed and can migrate up the foodchain, resulting in the harming and killing of species. Planting" +
    "native plants can helps attract pollinators like bees and other insects, which is a important foundations for a healthy ecosystem. Planting" +
    "the native species can also help balance the damage done by invasive or non-native species. By" + 
    "helping the native plants in your area, you are providing a valuable service to the endangered species."
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


////////////// Use Your Voice //////////////////////////////////////////////////////////////////////////////
export const UseYourVoiceParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Use you voice to pressure your civil servants. We" +
    "cannot just rest or rely on the scientific community alone to defend the endangered species. Voters and consumers must take a stand to support them as well. This" +
    " means you should writing letters and emails or singing petitions to your local goverment to take action against the threats to the endangered species."
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

////////////// T r a v e l - C o m p a s s i o n a t e l y //////////////////////////////////////////////////////////////////////////////
export const TravelCompassionatlyParagraphVoice = () => {
    // const [text, setText] = useState
    const [text] = useState
    ("Sometimes when we travel, we dont realize that the souvenirs or oranament we are buying are under threat. So," +
    "always avoid supporting the illegal markets. For example, dont buy tortoise-shell, ivory, and corals or other illegal related souvenirs. Also," +
    "dont participate in activities that exploits endangered/threatned species. For example," +
    "animal selfie, trophy hunting or animal rides."
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