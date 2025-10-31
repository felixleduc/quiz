import { useState } from "react";
import "./App.css";
import quizData from "./assets/quiz.json";
import { QuizCard } from "./components/quiz/QuizCard";
import { QuizDoneCard } from "./components/quiz/QuizDoneCard";

function App() {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [actualQuestionId, setActualQuestionId] = useState<number>(0);

  const handleQuestionChange = () => {
    if (actualQuestionId === quizData.questions.length - 1) {
      setIsDone(true);
      return;
    }

    setActualQuestionId(actualQuestionId + 1);
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const handleRestartQuiz = () => {
    setActualQuestionId(0);
    setScore(0);
    setIsDone(false);
  };

  return (
    <main className="h-screen mx-auto flex items-center w-[300px] sm:w-[400px]">
      {!isDone ? (
        <QuizCard
          id={actualQuestionId + 1}
          title={quizData.questions[actualQuestionId].title}
          choices={quizData.questions[actualQuestionId].choices}
          answer={quizData.questions[actualQuestionId].answer}
          onQuestionChange={handleQuestionChange}
          onScoreIncrement={incrementScore}
        />
      ) : (
        <QuizDoneCard
          score={score}
          nbQuestions={quizData.questions.length}
          onRestartQuiz={handleRestartQuiz}
        />
      )}
    </main>
  );
}

export default App;
