import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function QuizQuestions() {
  return (
    <form className="space-y-4 flex flex-col items-center">
      <RadioGroup className="gap-4 w-full">
        <Label
          htmlFor="option1"
          className="border cursor-pointer rounded-md p-4 text-lg [&:has(:checked)]:bg-blue-100"
        >
          <div>
            <RadioGroupItem id="option1" value="option1" className="sr-only" />
            Option 1
          </div>
        </Label>
        <Label
          htmlFor="option2"
          className="border cursor-pointer rounded-md p-4 text-lg [&:has(:checked)]:bg-blue-100"
        >
          <div>
            <RadioGroupItem id="option2" value="option2" className="sr-only" />
            Option 2
          </div>
        </Label>
        <Label
          htmlFor="option3"
          className="border cursor-pointer rounded-md p-4 text-lg [&:has(:checked)]:bg-blue-100"
        >
          <div>
            <RadioGroupItem id="option3" value="option3" className="sr-only" />
            Option 3
          </div>
        </Label>
      </RadioGroup>
      <Button
        type="submit"
        className="!bg-blue-500 text-white !py-5 !my-4 !text-lg w-full !rounded-4xl"
      >
        Submit
      </Button>
    </form>
  );
}
