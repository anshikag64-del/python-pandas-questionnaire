'use client'

import { useState, useMemo } from 'react'
import { ChevronRight, CheckCircle2, XCircle, Award } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What does NumPy stand for?',
    options: [
      'Number Python',
      'Numerical Python',
      'Numeric Programming Language',
      'Network Python',
    ],
    correctAnswer: 1,
    explanation:
      'NumPy stands for Numerical Python, a library fundamental to scientific computing with Python.',
  },
  {
    id: 2,
    question: 'Which method removes duplicate rows from a Pandas DataFrame?',
    options: ['remove_duplicates()', 'drop_duplicates()', 'unique()', 'deduplicate()'],
    correctAnswer: 1,
    explanation: 'The drop_duplicates() method is used to remove duplicate rows from a DataFrame.',
  },
  {
    id: 3,
    question: 'What is the default behavior of pandas.merge() when no join key is specified?',
    options: [
      'Performs an inner join on common columns',
      'Performs an outer join on indices',
      'Raises an error',
      'Returns the first DataFrame',
    ],
    correctAnswer: 0,
    explanation:
      'By default, pandas.merge() performs an inner join on columns with the same names.',
  },
  {
    id: 4,
    question: 'How do you select a single column from a Pandas DataFrame named df?',
    options: ['df.column_name or df["column_name"]', 'df.get_column("column_name")', 'df[column_name]', 'df::column_name'],
    correctAnswer: 0,
    explanation:
      'You can use either dot notation (df.column_name) or bracket notation (df["column_name"]).',
  },
  {
    id: 5,
    question: 'What does df.iloc do in Pandas?',
    options: [
      'Selects by label',
      'Selects by integer position',
      'Filters by condition',
      'Selects specific data type',
    ],
    correctAnswer: 1,
    explanation:
      'iloc stands for integer location and is used to select data by integer positions, not labels.',
  },
  {
    id: 6,
    question: 'Which method groups data in a DataFrame by one or more columns?',
    options: ['group_by()', 'groupby()', 'group_data()', 'partition()'],
    correctAnswer: 1,
    explanation: 'The groupby() method is used to group data by one or more columns in a DataFrame.',
  },
  {
    id: 7,
    question: 'What is the result of df.apply(lambda x: x + 1) on a numeric DataFrame?',
    options: [
      'Adds 1 to each element',
      'Adds 1 to each column name',
      'Creates a new column',
      'Throws an error',
    ],
    correctAnswer: 0,
    explanation: 'The apply() method applies the lambda function to each element, adding 1 to all values.',
  },
  {
    id: 8,
    question: 'How do you handle missing values in Pandas?',
    options: [
      'Using fillna() or dropna()',
      'Using remove_null()',
      'Using clean_data()',
      'Missing values cannot be handled',
    ],
    correctAnswer: 0,
    explanation: 'Pandas provides fillna() to fill missing values and dropna() to remove rows with missing values.',
  },
  {
    id: 9,
    question: 'What is a Pandas Series?',
    options: [
      'A 2D labeled array with rows and columns',
      'A 1D labeled array with a single data type',
      'A file format for storing data',
      'A plotting function',
    ],
    correctAnswer: 1,
    explanation:
      'A Series is a 1D labeled array that can hold any data type and is similar to a column in a DataFrame.',
  },
  {
    id: 10,
    question: 'What does df.describe() return?',
    options: [
      'Column names and types',
      'Statistical summary (count, mean, std, etc.)',
      'First few rows of data',
      'Data shape information',
    ],
    correctAnswer: 1,
    explanation:
      'describe() returns a statistical summary including count, mean, standard deviation, min, quartiles, and max.',
  },
]

interface Answer {
  [key: number]: number
}

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answer>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (optionIndex: number) => {
    setAnswers({
      ...answers,
      [currentQuestion]: optionIndex,
    })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const score = useMemo(() => {
    let correct = 0
    questions.forEach((q) => {
      if (answers[q.id - 1] === q.correctAnswer) {
        correct++
      }
    })
    return correct
  }, [answers])

  const percentage = Math.round((score / questions.length) * 100)

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/5 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Quiz Complete!</h1>
            <p className="text-muted-foreground">Here&apos;s how you performed</p>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-32 h-32">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(from 0deg, oklch(0.4 0.22 258.8) 0deg, oklch(0.4 0.22 258.8) ${
                      percentage * 3.6
                    }deg, oklch(0.92 0 0) ${percentage * 3.6}deg)`,
                  }}
                />
                <div className="absolute inset-1 bg-card rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{percentage}%</div>
                    <div className="text-sm text-muted-foreground">Score</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">{score}</div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="bg-red-500/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-600">{questions.length - score}</div>
                <div className="text-sm text-muted-foreground">Incorrect</div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Review Your Answers</h2>
              {questions.map((q, index) => {
                const isCorrect = answers[index] === q.correctAnswer
                const userAnswer = answers[index]

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border-2 ${
                      isCorrect
                        ? 'border-green-200 bg-green-50 dark:bg-green-950/20'
                        : 'border-red-200 bg-red-50 dark:bg-red-950/20'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">
                          Q{index + 1}: {q.question}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Your answer: <span className="font-medium">{q.options[userAnswer]}</span>
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-muted-foreground">
                            Correct answer: <span className="font-medium">{q.options[q.correctAnswer]}</span>
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground mt-2 italic">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => {
                setCurrentQuestion(0)
                setAnswers({})
                setShowResults(false)
              }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  const q = questions[currentQuestion]
  const answered = currentQuestion in answers

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/5 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Python & Pandas</h1>
          </div>
          <p className="text-muted-foreground">Test your knowledge with this comprehensive questionnaire</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-primary">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">{q.question}</h2>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {q.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  answers[currentQuestion] === index
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50 hover:bg-primary/2'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index
                        ? 'border-primary bg-primary'
                        : 'border-border'
                    }`}
                  >
                    {answers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className={`font-medium ${answers[currentQuestion] === index ? 'text-primary' : 'text-foreground'}`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-3 justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={!answered}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Submit <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!answered}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Question Indicator */}
        <div className="flex justify-center gap-2 flex-wrap">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-10 h-10 rounded-lg font-medium transition-all ${
                index === currentQuestion
                  ? 'bg-primary text-primary-foreground'
                  : index in answers
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
