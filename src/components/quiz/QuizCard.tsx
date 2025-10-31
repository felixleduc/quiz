import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuizQuestions from "./QuizQuestions";

export function QuizCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <p className="absolute z-0 -left-36 top-1/2 -translate-y-1/2 text-[400px] text-blue-100 font-bold select-none pointer-events-none">
        1
      </p>
      <Card className="relative z-10 !pt-0">
        <CardHeader className="bg-blue-500 py-6 overflow-hidden text-white text-xl font-semibold rounded-t-lg">
          <CardTitle>Question ?</CardTitle>
        </CardHeader>
        <CardContent>
          <QuizQuestions />
        </CardContent>
      </Card>
    </div>
  );
}
