'use client';

import { useEffect, useState } from 'react';
import { questions, Question, Category, Difficulty } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import QuestionDisplay from './question-display';
import ResultsBreakdown from './results-breakdown';
import QuestionNavigator from './question-navigator';

interface UserAnswer {
  questionId: number;
  selectedOption: number | null;
  answered: boolean;
}

export default function LargeQuestionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Map<number, UserAnswer>>(new Map());
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);

  // Initialize and randomize questions on mount
  useEffect(() => {
    // Fisher-Yates shuffle
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setRandomizedQuestions(shuffled);

    // Load saved progress from localStorage
    const saved = localStorage.getItem('questionnaire_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUserAnswers(new Map(Object.entries(parsed)));
        setQuizStarted(true);
      } catch (e) {
        console.error('Failed to load saved progress');
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (quizStarted && userAnswers.size > 0) {
      localStorage.setItem(
        'questionnaire_progress',
        JSON.stringify(Object.fromEntries(userAnswers))
      );
    }
  }, [userAnswers, quizStarted]);

  if (!quizStarted) {
    return <QuizStartScreen onStart={() => setQuizStarted(true)} />;
  }

  if (randomizedQuestions.length === 0) {
    return <div className="p-8 text-center">Loading questions...</div>;
  }

  if (showResults) {
    return (
      <ResultsBreakdown
        randomizedQuestions={randomizedQuestions}
        userAnswers={userAnswers}
        onRetake={() => {
          setShowResults(false);
          setCurrentQuestionIndex(0);
          setUserAnswers(new Map());
          localStorage.removeItem('questionnaire_progress');
          // Reshuffle questions
          const shuffled = [...questions].sort(() => Math.random() - 0.5);
          setRandomizedQuestions(shuffled);
        }}
      />
    );
  }

  const currentQuestion = randomizedQuestions[currentQuestionIndex];
  const currentAnswer = userAnswers.get(currentQuestion.id);
  const selectedOption = currentAnswer?.selectedOption ?? null;

  const answeredCount = Array.from(userAnswers.values()).filter(
    (a) => a.answered
  ).length;
  const skippedCount = Array.from(userAnswers.values()).filter(
    (a) => !a.answered
  ).length;
  const unansweredCount = randomizedQuestions.length - answeredCount - skippedCount;

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = new Map(userAnswers);
    newAnswers.set(currentQuestion.id, {
      questionId: currentQuestion.id,
      selectedOption: optionIndex,
      answered: true,
    });
    setUserAnswers(newAnswers);
  };

  const handleSkip = () => {
    const newAnswers = new Map(userAnswers);
    newAnswers.set(currentQuestion.id, {
      questionId: currentQuestion.id,
      selectedOption: null,
      answered: false,
    });
    setUserAnswers(newAnswers);
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < randomizedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const canProceed = selectedOption !== null;

  const handleNext = () => {
    if (canProceed) {
      goToNextQuestion();
    }
  };

  const handleSubmit = () => {
    // Mark all unanswered as skipped
    const newAnswers = new Map(userAnswers);
    randomizedQuestions.forEach((q) => {
      if (!newAnswers.has(q.id)) {
        newAnswers.set(q.id, {
          questionId: q.id,
          selectedOption: null,
          answered: false,
        });
      }
    });
    setUserAnswers(newAnswers);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Python & Pandas Quiz
              </h1>
              <p className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of {randomizedQuestions.length}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-sm text-center">
                <div className="font-semibold text-foreground">{answeredCount}</div>
                <div className="text-muted-foreground">Answered</div>
              </div>
              <div className="text-sm text-center">
                <div className="font-semibold text-foreground">{skippedCount}</div>
                <div className="text-muted-foreground">Skipped</div>
              </div>
              <div className="text-sm text-center">
                <div className="font-semibold text-foreground">{unansweredCount}</div>
                <div className="text-muted-foreground">Remaining</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{
                width: `${((answeredCount + skippedCount) / randomizedQuestions.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Question Area */}
        <div className="lg:col-span-2">
          <QuestionDisplay
            question={currentQuestion}
            selectedOption={selectedOption}
            onSelectOption={handleSelectOption}
            category={currentQuestion.category}
            difficulty={currentQuestion.difficulty}
          />

          {/* Navigation Buttons */}
          <div className="mt-8 flex gap-4">
            <Button
              variant="outline"
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="flex-1"
            >
              ← Previous
            </Button>
            <Button
              variant="outline"
              onClick={handleSkip}
              className="flex-1"
            >
              Skip
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="flex-1"
            >
              Next →
            </Button>
          </div>

          {currentQuestionIndex === randomizedQuestions.length - 1 && (
            <Button
              onClick={handleSubmit}
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-white"
              size="lg"
            >
              Submit Quiz
            </Button>
          )}
        </div>

        {/* Question Navigator Sidebar */}
        <div className="lg:col-span-2">
          <QuestionNavigator
            randomizedQuestions={randomizedQuestions}
            userAnswers={userAnswers}
            currentQuestionIndex={currentQuestionIndex}
            onNavigate={goToQuestion}
          />
        </div>
      </div>
    </div>
  );
}

function QuizStartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg border border-border p-8 max-w-2xl w-full shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Python & Pandas Master Questionnaire
          </h1>
          <p className="text-muted-foreground text-lg">
            Test your knowledge with 500 comprehensive questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="font-semibold text-foreground mb-2">250 Python Questions</h3>
            <p className="text-sm text-muted-foreground">
              Covering basics, functions, OOP, modules, file I/O, and advanced concepts
            </p>
          </div>
          <div className="p-6 bg-accent/5 rounded-lg border border-accent/20">
            <h3 className="font-semibold text-foreground mb-2">250 Pandas Questions</h3>
            <p className="text-sm text-muted-foreground">
              Series, DataFrames, indexing, cleaning, grouping, merging, and time series
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3">
            <div className="text-primary font-bold mt-1">✓</div>
            <div>
              <p className="font-semibold text-foreground">Random Question Order</p>
              <p className="text-sm text-muted-foreground">
                Questions are randomized each time to prevent memorization
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-primary font-bold mt-1">✓</div>
            <div>
              <p className="font-semibold text-foreground">Save Progress</p>
              <p className="text-sm text-muted-foreground">
                Your progress is automatically saved locally
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-primary font-bold mt-1">✓</div>
            <div>
              <p className="font-semibold text-foreground">Detailed Analytics</p>
              <p className="text-sm text-muted-foreground">
                See your performance breakdown by category, difficulty, and topic
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={onStart}
          className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
          size="lg"
        >
          Start Quiz →
        </Button>
      </div>
    </div>
  );
}
