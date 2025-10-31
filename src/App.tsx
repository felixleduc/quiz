import "./App.css";
import quizData from "./assets/quiz.json";
import { QuizCard } from "./components/quiz/QuizCard";

function App() {
  return (
    <main>
      <div className="h-screen mx-auto flex items-center w-[400px]">
        <QuizCard />
      </div>
    </main>
  );
}

export default App;
