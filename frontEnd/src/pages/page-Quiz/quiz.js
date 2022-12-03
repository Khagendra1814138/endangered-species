import React from 'react';
import { useState } from "react";

import './quiz.css';
import '../publicMain.css';



import {QuizSuvNav} from "../../subNav/subNavigation";

import {BsBookHalf} from 'react-icons/bs';
import {RiRestartFill} from 'react-icons/ri';


export const QuizPage = () => {
	
	const refreshPage = ()=>{
		window.location.reload();
	}

	const questions = [
		{
			questionText: 'Q1.) How many endangered species are already threaten with exitnction?',
			answerOptions: [
				{ answerText: '1.) 20,000 plus', isCorrect: false },
				{ answerText: '2.) 35,000 plus', isCorrect: false },
				{ answerText: '3.) 40,000 plus', isCorrect: true },
				{ answerText: '4.) 30,000 plus', isCorrect: false },
			],
		},
		{
			questionText: 'Q2.) How many trees are cut down every year?',
			answerOptions: [
				{ answerText: '1.) 5 Billions', isCorrect: false },
				{ answerText: '2.) 15 Billions ', isCorrect: true },
				{ answerText: '3.) 13 Billions', isCorrect: false },
				{ answerText: '4.) 20 Billions', isCorrect: false },
			],
		},
		{
			questionText: 'Q3.) How much carbon does a tree absorbe per year?',
			answerOptions: [
				{ answerText: '1.) 48 pound', isCorrect: true },
				{ answerText: '2.) 50 pound', isCorrect: false },
				{ answerText: '3.) 40 pound', isCorrect: false },
				{ answerText: '4.) 38 pound', isCorrect: false },
			],
		},
		{
			questionText: 'Q4.) Which of the species is considered as extinct?',
			answerOptions: [
				{ answerText: '1.) Golden Toad', isCorrect: true },
				{ answerText: '2.) Tasmanian Tiger', isCorrect: true },
				{ answerText: '3.) Western Black Rhino', isCorrect: true },
				{ answerText: '4.) All of the Above', isCorrect: true },
			],
		},
		{
			questionText: 'Q5.) What is the percentage of Endangered Amphibians?',
			answerOptions: [
				{ answerText: '1.) 45%', isCorrect: false },
				{ answerText: '2.) 40%', isCorrect: true },
				{ answerText: '3.) 37%', isCorrect: false },
				{ answerText: '4.) 42%', isCorrect: false },
			],
		},
		{
			questionText: 'Q6.) How many tons of insects does birds eat per year?',
			answerOptions: [
				{ answerText: '1.) 410-490 million tons of insects)', isCorrect: false },
				{ answerText: '2.) 300-500 million tons of insects)', isCorrect: false },
				{ answerText: '3.) 400-500 million tons of insects)', isCorrect: true },
				{ answerText: '4.) 300-400 million tons of insects)', isCorrect: false },
			],
		},
		{
			questionText: 'Q7.) What is the percentage of medicines or foods that are pollinated by birds.?',
			answerOptions: [
				{ answerText: '1.) 15%', isCorrect: false },
				{ answerText: '2.) 10%', isCorrect: false },
				{ answerText: '3.) 6%', isCorrect: false },
				{ answerText: '4.) 5%', isCorrect: true },
			],
		},
		{
			questionText: 'Q8.) Which disease is cured by medicine made from the Ocean.?',
			answerOptions: [
				{ answerText: '1.) Cancer', isCorrect: true },
				{ answerText: '2.) Tuberculosis', isCorrect: false },
				{ answerText: '3.) Sugar', isCorrect: false },
				{ answerText: '4.) Alzheimers', isCorrect: true },
			],
		},
		{
			questionText: 'Q9.) What is the most popular medicine made from fungus?',
			answerOptions: [
				{ answerText: '1.) Paracetamol', isCorrect: false },
				{ answerText: '2.) Penicillian', isCorrect: true },
				{ answerText: '3.) Aspirin', isCorrect: false },
				{ answerText: '4.) Metformin', isCorrect: false },
			],
		},
		{
			questionText: 'Q10.) What is the name of the most trafficked animal?',
			answerOptions: [
				{ answerText: '1.) Pangolins', isCorrect: true },
				{ answerText: '2.) African Elephants', isCorrect: false },
				{ answerText: '3.) Tigers', isCorrect: false },
				{ answerText: '4.) Hawksbill Turtle', isCorrect: false },
			],
		},
	];


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const checkAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};



	const [darkMode, setDarkMode] = useState(false);
	return (
	<div className={darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
		<body className='pageBodyFrame'>
			<div className='QuizPagecontainer'>
				<image className="quizIcon"> <BsBookHalf size="10em" color="#1888ff"/> </image>

{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
		<div className="darkModeSwitchContainer">
          <span style={{ color: darkMode ? "grey" : "orange" }}>☀︎</span>  
            <div className="switch-checkbox">
              <label className="switch"> 
                <input type="checkbox" onChange={() => setDarkMode(!darkMode)} /> 
                <span className="slider round" > </span>
              </label>
            </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

				<div className = "mainSubHeadFrame">
					<subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Lets test your knowledge</subhead>
				</div>

				<box className = "QuizBox">
					<box className = "quizFrame">
						{showScore ? (<div className='scoreDisplayFrame'> You scored {score} out of {questions.length} </div>) : (
							<>
								<div className='question-frame'>
									<div className='question-count'>
										<span className='leftFrame'> {currentQuestion} Done </span>
										{/* <box className='timer-count'> Timer </box> */}
										<span className='leftFrame'> {questions.length - currentQuestion} Left</span> 
									</div>
									<div className='question-text'>{questions[currentQuestion].questionText}</div>
								</div>
								<div className='answer-frame'>
									{questions[currentQuestion].answerOptions.map((answerOption) => (
										<button className="quizButton" onClick={() => checkAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
									))}
								</div>
							</>
						)}
						<button className="restartButton" onClick={refreshPage}> 
							<box className="restartButtonIcon"><RiRestartFill size="2em" color="white"/></box>
							<label className='restartButtonLabel'>Restart</label>
						</button>
					</box>
				</box>
			</div>
		</body>
		<QuizSuvNav/>
	</div>

	);
};