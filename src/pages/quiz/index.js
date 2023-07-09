import React, { useEffect, useState } from "react";
import QuizCom from "../../components/quiz-com/QuizCom";

const QuizPage = ({setCommon}) => {
  useEffect(()=>{
    setCommon(true)
  }, [])
  const questions = [
    {
      id: 1,
      questionText: "What is the capital of France?",
      answerOptions: [
        { id: 1, answerText: "New York", isCorrect: false },
        { id: 2, answerText: "London", isCorrect: false },
        { id: 3, answerText: "Paris", isCorrect: true },
        { id: 4, answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { id: 1, answerText: "Jeff Bezos", isCorrect: false },
        { id: 2, answerText: "Elon Musk", isCorrect: true },
        { id: 3, answerText: "Bill Gates", isCorrect: false },
        { id: 4, answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      id: 3,
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { id: 1, answerText: "Apple", isCorrect: true },
        { id: 2, answerText: "Intel", isCorrect: false },
        { id: 3, answerText: "Amazon", isCorrect: false },
        { id: 4, answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      id: 4,
      questionText: "How many Harry Porter books are there?",
      answerOptions: [
        { id: 1, answerText: "1", isCorrect: false },
        { id: 2, answerText: "4", isCorrect: true },
        { id: 3, answerText: "6", isCorrect: false },
        { id: 4, answerText: "7", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <QuizCom
        data={{
          questions,
          currentQuestion,
          handleAnswerButtonClick,
          showScore,
          score,
        }}
      />
    </>
  );
};

export default QuizPage;
