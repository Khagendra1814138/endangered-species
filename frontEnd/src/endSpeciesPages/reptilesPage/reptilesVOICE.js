import React from 'react';
import { useState } from "react";
import { useSpeechSynthesis } from 'react-webspeech';


import {AiFillSound} from 'react-icons/ai';

export const ReptilesTopParagraphVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (`
    The International Union for Conservation of Nature (IUCN) research states that around 21% of all the reptiles species around the world are threaend with extinction.
    Worldwide, the greatest threat to the reptile species is their habitat destruction. This is mainly because of human activities such as logging, agraculture expansion, urban development and pollutions.
    Hunting for skins and meat are the main threats for crocodiles and illegal wildlife trades as pets are the main threats to exotic reptiles like turtles, lizards and snakes. 
    Furthermore, invasive species are destroiying the reptiles natural habitats and climate change also pose threats to the reptile species.
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





export const YangtzeGiantSoftsellVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (`
    One of the most critically endangered species of turtles in the world since the 1980s is the Yangtze giant softshell turtle. 
    It only survives in two lakes in northern Vietnam. Conservationists estimate that there are now only 3 remaining wild turtles in the world.
    These turtles are at in brink of extinction due to habitat loss, hunting for local consumption and pets, 
        and the use of their carapace and bones in alternative medicine.
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





export const TurtleImportanceVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (`
    Turtles are great scavengers and cleaner of the environment, eating up dead fish from lakes and rivers. 
    They do no harm and they do a lot of good..

    Turtles also provide homes for a lot of other species that lives on burrows. 
    For example, gopher tortoises shelter over 350 species, including burrowing owls, rabbits, and bobcats.
  
    Sea turtles egg shells left behind will decompose releasing vital nutrients such as nitrogen and phosphorous, 
        which directly benefits the dune vegetation allowing it to stay vibrant healthy. 
    Unhatched eggs left behind are also food for any beach scavengers, like crabs.

    During sea turtles migration they swim through parts of the sea that are nutrient poor. 
    The turtles hard shell "carapace" provides home to over a hundred different commensal species like barnacles and algae. 
    When migrating through barren areas of the sea, some fish in the area will feed of the algae, 
        barnacles and skeleton shrimp (epibionts) growing on their carapace. Therefore, sea turtles are both nutrient and energy transporters.

    Some sea turtles eats species such as crabs, star fish and jelly fish. 
    Meaning sea turtles help maintain a balanced food web. Sea turtles act to keep the population of jelly fish at a relatively stable level. 
    While searching for these preys, sea turtles sift through the sand and they stir up and aerate the sand, allowing nutrient distribution of the sediment.
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





export const CrocodileImportanceVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (`
    Crocodiles are one of the top preditors and does a great job in cleaning and maintaining a well balanced and functioning ecosystem. 
    For example, they eat dead animals and keep our waterways clean and healthy for many other species. This also helps humans as helthy rivers provides fresh fishes.
   
    Crocodiles regulate the populations of other animals, stopping them from overcrowding and degrading ecosystems. 
    Ecologists argue that the extinction of crocodiles could disrupt ecological processes and damage the ecosystem. 
    Due to crocodile population decrease in the Wetlands of Philippines, it suffer from pollution, flow modification, habitat degradation and invasive species.

    Crocodiles burrows when they are building their nest to lay their eggs, create shelters for other animals. 
    During the dry season, the presence of crocodiles prvents land animals from using and drinking the limited water supplies. 
    This protects aquatic life and systems.
  
    Farmers can make money from the hide of the crocodile. 
    Many people will pay large amounts of money to have crocodilian products, and Saltwater Crocodile leather products are the most prized.
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




export const LizardsImportanceVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (`
    Lizards species are very important part of the food webs in most ecosystems. 
    They fill a critical role as both predator and prey species. 
    They eat smaller insects and pests, which can benifit farmers, and they act as a source of food to larger predator like eagles and birds. 
    Herbivorous reptiles also disperse seeds and pollinate various plant species, including those that are becoming increasingly rare particularly on island habitats.
   
    Lizards have inspired researchers to create new technologies for humans. 
    For example, scientists have researched into how geckos feet stick even in the presence of moisture and has led to new surgical bandages, 
        adhesives for wet environments, new kinds of furniture and textiles, and even ways to climb up buildings. 
    This gecko tech may also help create traction for robots working in space or at disaster sites, as well as create better prosthetics.
   
    In Central and South America, green iguanas are raised on farms and are used as a source of meat.
    The local often referred to them as "bamboo chicken" or "chicken of the tree", because they are said to taste like chicken.
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




export const SnakeImportanceVOICE = () => {
    // const [text, setText] = useState
    const [text] = useState
    (`
    Some types of lizard species like the western fence lizard prevent Lyme disease.
    Studies have shown that reptiles and small mammels serve as hosts for the ticks. 
    But, researchers has found that a protein in the lizards blood kills the Lyme-causing bacteria in the ticks, making it harmless to humans. 
 
    Some lizards have toxic waste product called biliverdin in their blood, making their blood green, 
        which somehow the lizards are able to tolerate without being harm.
    Scientists and biologists suspects that it might have applications in humans for blood-related conditions such as malaria and jaundice.

    Few lizards are venomous, such as the Gila monster, Mexican beaded lizard, and the Komodo dragon. 
    Science may have found a use for their venomous compounds. 
    Recent research from Australia is exploring ways the venom affects certain proteins in the blood in order to treat blood clotting disorders.
    The Komodo Dragons venom has anticoagulant properties which have helped conditions that stem from blood clots, like strokes and pulmonary embolisms.

    Some snake venom affects blood pressure and blood clotting. 
    Scientists can use this snake venom to develop new drugs to treat illnesses. 
    In fact, the proteins in snake venom has been used to treat many conditions. 
    For example, cancer, pain, high blood pressure, heart attacks, strokes, Alzheimer's disease, and Parkinsons disease.
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