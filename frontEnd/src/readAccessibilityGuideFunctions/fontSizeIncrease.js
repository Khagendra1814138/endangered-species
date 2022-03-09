import React from 'react';

import '../pages/publicMain.css';
import "./fontSizeIncrease.css";
import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';

export default function FontSizeIncreaser({ fontSize, setFontSize }){
	return(
		<div className='buttonsContainer'>
			<div className="fontSizeIncreasebuttonLabel"> Font Size </div>
			<button className="paraButton" onClick={() => setFontSize(fontSize = 18)}><FaMinusSquare size="3em" color="orange"/></button>
				<div className='fontSizeDisplay'>{Math.floor((fontSize/18) * 100)}%</div>
			<button className="paraButton" onClick={() => setFontSize(fontSize + 2)}><FaPlusSquare size="3em" color="orange"/></button>
		</div>
	)
};