import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

interface QuizDoneCardProps {
  score: number;
  nbQuestions: number;
  onRestartQuiz: () => void;
}

export function QuizDoneCard({
  score,
  nbQuestions,
  onRestartQuiz,
}: QuizDoneCardProps) {
  const hasPassingGrade = (score / nbQuestions) * 100 >= 60;

  return (
    <Card className="relative z-10 !pt-0 w-full mx-auto">
      <CardHeader className="bg-blue-500 py-6 overflow-hidden text-white text-xl font-semibold rounded-t-lg">
        <CardTitle>Tu as terminé le quiz !</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6">
        <p
          className={`text-4xl font-bold ${
            hasPassingGrade ? "text-green-600" : "text-red-600"
          }`}
        >
          Score: {score} / {nbQuestions}
        </p>
        <p className="text-lg text-center">
          {hasPassingGrade
            ? "Bravo, vous avez passé"
            : "Dommage, vous avez échoué"}
        </p>
        <Button
          className="!bg-blue-500 hover:!bg-blue-600 text-white !py-5 !my-4 !text-lg w-full !rounded-4xl"
          onClick={onRestartQuiz}
        >
          Recommencer le quiz
        </Button>
      </CardContent>
    </Card>
  );
}
