import { Question, Category, Difficulty } from '@/lib/questions';
import { Button } from '@/components/ui/button';

interface QuestionDisplayProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  category: Category;
  difficulty: Difficulty;
}

export default function QuestionDisplay({
  question,
  selectedOption,
  onSelectOption,
  category,
  difficulty,
}: QuestionDisplayProps) {
  const categoryLabel = category === 'python' ? 'Python' : 'Pandas';
  const difficultyColor =
    difficulty === 'beginner'
      ? 'bg-green-500/20 text-green-700 border-green-500/30'
      : difficulty === 'intermediate'
        ? 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30'
        : 'bg-red-500/20 text-red-700 border-red-500/30';

  return (
    <div className="space-y-6">
      {/* Category and Difficulty Tags */}
      <div className="flex gap-2">
        <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium">
          {categoryLabel}
        </span>
        <span
          className={`px-3 py-1 border rounded-full text-sm font-medium ${difficultyColor}`}
        >
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>

      {/* Question Text */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(index)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
              selectedOption === index
                ? 'border-primary bg-primary/10'
                : 'border-border bg-card hover:border-primary/50'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === index
                    ? 'border-primary bg-primary'
                    : 'border-border'
                }`}
              >
                {selectedOption === index && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <span className="text-foreground font-medium">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Topic Info */}
      <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
        <span className="font-semibold">Topic:</span> {question.topic.replace(/_/g, ' ')}
      </div>
    </div>
  );
}
