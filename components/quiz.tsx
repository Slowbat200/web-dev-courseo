import { useState } from 'react';

type QuizProps = {
  questions: { question: string; options: string[]; correctAnswer: string }[];
  onQuizComplete: (points: number) => void;
};

export const Quiz = ({ questions, onQuizComplete }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 10);
    }
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onQuizComplete(score);
    }
  };
  return (
    <div className='p-4 border rounded'>
      <h1 className='text-lg font-bold'>
        {questions[currentQuestionIndex].question}
      </h1>
      <div className='mt-4'>
        {questions[currentQuestionIndex].options.map((option) => (
          <button key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </button>
        ))}
      </div>
      <button onClick={handleNext} className='mt-4 p-2 bg-green-500 text-white rounded'>Next</button>
    </div>
  );
};
