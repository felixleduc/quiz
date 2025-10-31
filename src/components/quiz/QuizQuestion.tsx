import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import correctIcon from "@/assets/correct.png";
import wrongIcon from "@/assets/wrong.png";

interface QuizQuestionProps {
  choices: string[];
  answer: number;
  onQuestionChange: () => void;
  onScoreIncrement: () => void;
}

export default function QuizQuestion({
  choices,
  answer,
  onQuestionChange,
  onScoreIncrement,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [questionMessage, setQuestionMessage] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);

  const handleAnswerSubmit = () => {
    setHasAnswered(true);

    if (Number(selectedAnswer) === answer) {
      setQuestionMessage("Correct!");
      onScoreIncrement();
    } else {
      setQuestionMessage("Mauvaise réponse :(");
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setQuestionMessage(null);
      setHasAnswered(false);
      onQuestionChange();
    }, 2000);
  };

  return (
    <form className="space-y-4 flex flex-col items-center">
      <RadioGroup
        className="gap-4 w-full"
        value={selectedAnswer}
        onValueChange={(newAnswer) => setSelectedAnswer(newAnswer)}
      >
        {choices.map((choice, index) => {
          const qIndex = index + 1;

          const isCorrect = qIndex === answer;
          const isSelected = qIndex === Number(selectedAnswer);

          let variableStyle = "bg-white text-black";
          let icon = null;

          if (hasAnswered) {
            if (isCorrect) {
              variableStyle = "bg-green-100 text-green-900";
              icon = correctIcon;
            } else if (isSelected && !isCorrect) {
              variableStyle = "bg-red-100 text-red-900";
              icon = wrongIcon;
            } else {
              variableStyle = "bg-white text-black opacity-50";
            }
          } else if (isSelected) {
            variableStyle = "bg-blue-100";
          }

          return (
            <Label
              key={qIndex}
              htmlFor={qIndex.toString()}
              className={`border cursor-pointer rounded-md p-4 text-lg flex items-center justify-between ${variableStyle}`}
            >
              <div>
                <RadioGroupItem
                  id={qIndex.toString()}
                  value={qIndex.toString()}
                  className="sr-only"
                />
                {choice}
              </div>
              {icon && <img src={icon} alt="" className="w-4 h-4" />}
            </Label>
          );
        })}
      </RadioGroup>
      {!questionMessage ? (
        <Button
          type="submit"
          className="!bg-blue-500 hover:!bg-blue-600 disabled:!bg-blue-200 disabled:cursor-not-allowed text-white !py-5 !my-4 !text-lg w-full !rounded-4xl"
          disabled={!selectedAnswer}
          onClick={handleAnswerSubmit}
        >
          Envoyer
        </Button>
      ) : (
        <p className="my-4 text-lg">{questionMessage}</p>
      )}
    </form>
  );
}
