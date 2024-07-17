import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many solutions are there to the equation $x_1 + x_2 + x_3 = 99$, where $x_1 \geq 0$, $x_2 \geq 0$,
		and $x_3 \geq 0$ are integers?
`;

const label1 = "${101 \\choose 2}$";
const label2 = "${101 \\choose 3}$";
const label3 = "${102 \\choose 2}$";
const label4 = "${102 \\choose 3}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};