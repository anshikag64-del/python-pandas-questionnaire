'use client';

import { Question, Difficulty, Category } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface UserAnswer {
  questionId: number;
  selectedOption: number | null;
  answered: boolean;
}

interface ResultsBreakdownProps {
  randomizedQuestions: Question[];
  userAnswers: Map<number, UserAnswer>;
  onRetake: () => void;
}

export default function ResultsBreakdown({
  randomizedQuestions,
  userAnswers,
  onRetake,
}: ResultsBreakdownProps) {
  const [expandedCategory, setExpandedCategory] = useState<Category | null>('python');
  const [expandedDifficulty, setExpandedDifficulty] = useState<Difficulty | null>(
    'beginner'
  );

  // Calculate score
  const correctAnswers = randomizedQuestions.filter((q) => {
    const answer = userAnswers.get(q.id);
    return answer?.answered && answer.selectedOption === q.correctAnswer;
  });

  const score = Math.round((correctAnswers.length / randomizedQuestions.length) * 100);
  const totalAnswered = Array.from(userAnswers.values()).filter((a) => a.answered).length;

  // Breakdown by category
  const pythonQuestions = randomizedQuestions.filter((q) => q.category === 'python');
  const pandasQuestions = randomizedQuestions.filter((q) => q.category === 'pandas');

  const pythonCorrect = pythonQuestions.filter((q) => {
    const answer = userAnswers.get(q.id);
    return answer?.answered && answer.selectedOption === q.correctAnswer;
  }).length;

  const pandasCorrect = pandasQuestions.filter((q) => {
    const answer = userAnswers.get(q.id);
    return answer?.answered && answer.selectedOption === q.correctAnswer;
  }).length;

  const pythonScore = pythonQuestions.length > 0
    ? Math.round((pythonCorrect / pythonQuestions.length) * 100)
    : 0;

  const pandasScore = pandasQuestions.length > 0
    ? Math.round((pandasCorrect / pandasQuestions.length) * 100)
    : 0;

  // Breakdown by difficulty
  const difficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced'];

  const difficultyStats = difficulties.map((difficulty) => {
    const questionsAtLevel = randomizedQuestions.filter(
      (q) => q.difficulty === difficulty
    );
    const correctAtLevel = questionsAtLevel.filter((q) => {
      const answer = userAnswers.get(q.id);
      return answer?.answered && answer.selectedOption === q.correctAnswer;
    }).length;
    return {
      difficulty,
      total: questionsAtLevel.length,
      correct: correctAtLevel,
      score:
        questionsAtLevel.length > 0
          ? Math.round((correctAtLevel / questionsAtLevel.length) * 100)
          : 0,
    };
  });

  // Breakdown by topic within each category
  const topicStats = (category: Category) => {
    const qsInCategory = randomizedQuestions.filter((q) => q.category === category);
    const topicMap = new Map<string, { correct: number; total: number }>();

    qsInCategory.forEach((q) => {
      const topic = q.topic;
      if (!topicMap.has(topic)) {
        topicMap.set(topic, { correct: 0, total: 0 });
      }
      const stats = topicMap.get(topic)!;
      stats.total++;

      const answer = userAnswers.get(q.id);
      if (answer?.answered && answer.selectedOption === q.correctAnswer) {
        stats.correct++;
      }
    });

    return Array.from(topicMap.entries()).map(([topic, stats]) => ({
      topic: topic.replace(/_/g, ' '),
      ...stats,
      score: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
    }));
  };

  const pythonTopics = topicStats('python');
  const pandasTopics = topicStats('pandas');

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Quiz Complete!</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Here&apos;s your detailed performance breakdown
          </p>

          {/* Overall Score */}
          <div className="inline-block">
            <div className="flex items-end justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="4"
                      strokeDasharray={`${(score / 100) * 351.86} 351.86`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">{score}%</div>
                      <div className="text-sm text-muted-foreground">Overall</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium text-foreground">
                  {correctAnswers.length} of {totalAnswered} answered correctly
                </div>
              </div>

              <div className="space-y-4 text-left">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">
                    Correct Answers
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    {correctAnswers.length}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">
                    Total Questions
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {randomizedQuestions.length}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">
                    Accuracy Rate
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {totalAnswered > 0
                      ? Math.round((correctAnswers.length / totalAnswered) * 100)
                      : 0}
                    %
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown Sections */}
        <div className="space-y-6 mb-8">
          {/* By Category */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Performance by Category</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <CategoryScore
                name="Python"
                correct={pythonCorrect}
                total={pythonQuestions.length}
                score={pythonScore}
              />
              <CategoryScore
                name="Pandas"
                correct={pandasCorrect}
                total={pandasQuestions.length}
                score={pandasScore}
              />
            </div>
          </div>

          {/* By Difficulty */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Performance by Difficulty</h2>
            <div className="space-y-3">
              {difficultyStats.map((stat) => (
                <DifficultyRow key={stat.difficulty} {...stat} />
              ))}
            </div>
          </div>

          {/* Topics Breakdown */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Performance by Topic</h2>

            {/* Python Topics */}
            <div className="mb-6">
              <button
                onClick={() =>
                  setExpandedCategory(expandedCategory === 'python' ? null : 'python')
                }
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
              >
                <span className="font-semibold text-foreground">Python Topics ({pythonTopics.length})</span>
                <span className="text-muted-foreground">
                  {expandedCategory === 'python' ? '▼' : '▶'}
                </span>
              </button>
              {expandedCategory === 'python' && (
                <div className="space-y-2 mt-2 pl-4 border-l border-muted">
                  {pythonTopics.map((topic) => (
                    <TopicRow key={topic.topic} {...topic} />
                  ))}
                </div>
              )}
            </div>

            {/* Pandas Topics */}
            <div>
              <button
                onClick={() =>
                  setExpandedCategory(expandedCategory === 'pandas' ? null : 'pandas')
                }
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
              >
                <span className="font-semibold text-foreground">Pandas Topics ({pandasTopics.length})</span>
                <span className="text-muted-foreground">
                  {expandedCategory === 'pandas' ? '▼' : '▶'}
                </span>
              </button>
              {expandedCategory === 'pandas' && (
                <div className="space-y-2 mt-2 pl-4 border-l border-muted">
                  {pandasTopics.map((topic) => (
                    <TopicRow key={topic.topic} {...topic} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mb-12">
          <Button
            onClick={onRetake}
            className="bg-primary hover:bg-primary/90 text-white px-8"
            size="lg"
          >
            Retake Quiz
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            size="lg"
          >
            Start Fresh
          </Button>
        </div>

        {/* Recommendations */}
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Recommendations</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {score >= 80 && (
              <li>✓ Excellent performance! You have strong knowledge of Python and Pandas.</li>
            )}
            {score >= 60 && score < 80 && (
              <li>
                → Good work! Focus on the topics where you scored lower for improvement.
              </li>
            )}
            {score < 60 && (
              <li>→ Keep practicing! Review the concepts you found challenging.</li>
            )}
            {pythonScore < pandasScore && (
              <li>
                → Consider reviewing Python fundamentals to strengthen your foundation.
              </li>
            )}
            {pandasScore < pythonScore && (
              <li>
                → Dedicate more time to Pandas-specific operations and data manipulation.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CategoryScore({
  name,
  correct,
  total,
  score,
}: {
  name: string;
  correct: number;
  total: number;
  score: number;
}) {
  return (
    <div className="p-4 rounded-lg bg-muted/50 border border-border">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <span className="text-2xl font-bold text-primary">{score}%</span>
      </div>
      <div className="w-full bg-border rounded-full h-2 mb-2">
        <div
          className="h-full bg-primary rounded-full transition-all"
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="text-sm text-muted-foreground">
        {correct} of {total} correct
      </p>
    </div>
  );
}

function DifficultyRow({
  difficulty,
  correct,
  total,
  score,
}: {
  difficulty: Difficulty;
  correct: number;
  total: number;
  score: number;
}) {
  const difficultyColor =
    difficulty === 'beginner'
      ? 'text-green-600'
      : difficulty === 'intermediate'
        ? 'text-yellow-600'
        : 'text-red-600';

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
      <div className="flex-1">
        <p className={`font-semibold ${difficultyColor}`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </p>
        <p className="text-xs text-muted-foreground">{total} questions</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-32 bg-border rounded-full h-2">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${score}%` }}
          />
        </div>
        <div className="text-right">
          <p className="font-bold text-foreground">{score}%</p>
          <p className="text-xs text-muted-foreground">
            {correct}/{total}
          </p>
        </div>
      </div>
    </div>
  );
}

function TopicRow({
  topic,
  correct,
  total,
  score,
}: {
  topic: string;
  correct: number;
  total: number;
  score: number;
}) {
  return (
    <div className="flex items-center justify-between py-2 px-3 rounded hover:bg-muted/30 transition-colors">
      <p className="text-sm text-muted-foreground flex-1">{topic}</p>
      <div className="flex items-center gap-3">
        <div className="w-20 bg-border rounded-full h-1.5">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${score}%` }}
          />
        </div>
        <p className="text-sm font-semibold text-foreground w-12 text-right">
          {score}%
        </p>
      </div>
    </div>
  );
}
