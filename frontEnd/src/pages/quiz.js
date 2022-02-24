import React from 'react';
import { useState } from "react";

import './quiz.css';
import './publicMain.css';

import {BsBookHalf} from 'react-icons/bs';


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
			questionText: 'Question 5',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Question 6',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Question 7',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Question 8',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Question 9',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Question 10',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
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
										<box className='timer-count'> Timer </box>
										<span className='leftFrame'> {questions.length - currentQuestion} Left</span> 
									</div>
									<div className='question-text'>{questions[currentQuestion].questionText}</div>
								</div>
								<div className='answer-frame'>
									{questions[currentQuestion].answerOptions.map((answerOption) => (
										<button className="quizButton" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
									))}
								</div>
							</>
						)}
						<button className="resrartButton" onClick={refreshPage}>Restart</button>
					</box>
				</box>
			</div>
		</body>
	</div>

	);
};