import React from "react";

const QuizCom = ({ data }) => {
  const {
    currentQuestion,
    questions,
    handleAnswerButtonClick,
    showScore,
    score,
  } = data;
  return (
    <>
      {showScore ? (
        <div className="scoreSection">
          <h3>
            You scored {score} out of {questions.length}{" "}
          </h3>
        </div>
      ) : (
        <div className="questionSection">
          <div className="questionCount">
            <div className="questionCount">
              <h3>
                Question {currentQuestion + 1} / {questions.length}
              </h3>
            </div>
            <div className="questionText">
              <p>{questions[currentQuestion].questionText}</p>
            </div>
          </div>
          <div className="answerSection">
            {questions[currentQuestion].answerOptions.map((item) => {
              return (
                <button
                  key={item.id}
                  type="button"
                  className="btn"
                  style={{ background: "#333", color: "#fff" }}
                  onClick={() => {
                    handleAnswerButtonClick(item.isCorrect);
                  }}
                >
                  {item.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default QuizCom;
