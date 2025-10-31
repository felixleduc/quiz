import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuizQuestion from "./QuizQuestion";

interface QuizCardProps {
  id: number;
  title: string;
  choices: string[];
  answer: number;
  onQuestionChange: () => void;
  onScoreIncrement: () => void;
}

export function QuizCard({
  id,
  title,
  choices,
  answer,
  onQuestionChange,
  onScoreIncrement,
}: QuizCardProps) {
  return (
    <div className="relative w-full mx-auto">
      <p className="absolute z-0 -left-36 top-1/2 -translate-y-1/2 text-[400px] text-blue-100 font-bold select-none pointer-events-none">
        {id}
      </p>
      <Card className="relative z-10 !pt-0">
        <CardHeader className="bg-blue-500 py-6 overflow-hidden text-white text-xl font-semibold rounded-t-lg">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <QuizQuestion
            choices={choices}
            answer={answer}
            onQuestionChange={onQuestionChange}
            onScoreIncrement={onScoreIncrement}
          />
        </CardContent>
      </Card>
    </div>
  );
}
