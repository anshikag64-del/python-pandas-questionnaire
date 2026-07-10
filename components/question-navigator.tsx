import { Question } from '@/lib/questions';

interface UserAnswer {
  questionId: number;
  selectedOption: number | null;
  answered: boolean;
}

interface QuestionNavigatorProps {
  randomizedQuestions: Question[];
  userAnswers: Map<number, UserAnswer>;
  currentQuestionIndex: number;
  onNavigate: (index: number) => void;
}

export default function QuestionNavigator({
  randomizedQuestions,
  userAnswers,
  currentQuestionIndex,
  onNavigate,
}: QuestionNavigatorProps) {
  const getQuestionStatus = (index: number): 'answered' | 'skipped' | 'unanswered' => {
    const q = randomizedQuestions[index];
    const answer = userAnswers.get(q.id);
    if (!answer) return 'unanswered';
    return answer.answered ? 'answered' : 'skipped';
  };

  const stats = {
    answered: Array.from(userAnswers.values()).filter((a) => a.answered).length,
    skipped: Array.from(userAnswers.values()).filter((a) => !a.answered).length,
    unanswered:
      randomizedQuestions.length -
      Array.from(userAnswers.values()).length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="font-semibold text-foreground mb-3">Progress</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Answered</span>
            <span className="font-semibold text-green-600">{stats.answered}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Skipped</span>
            <span className="font-semibold text-yellow-600">{stats.skipped}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Not Reached</span>
            <span className="font-semibold text-gray-600">{stats.unanswered}</span>
          </div>
        </div>
      </div>

      {/* Question Grid */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="font-semibold text-foreground mb-3">Question Map</h3>
        <div className="grid grid-cols-10 gap-2 max-h-96 overflow-y-auto">
          {randomizedQuestions.map((_, index) => {
            const status = getQuestionStatus(index);
            const isCurrentQuestion = index === currentQuestionIndex;

            const statusStyles = {
              answered: 'bg-green-500 hover:bg-green-600',
              skipped: 'bg-yellow-500 hover:bg-yellow-600',
              unanswered: 'bg-muted hover:bg-muted/80',
            };

            return (
              <button
                key={index}
                onClick={() => onNavigate(index)}
                className={`
                  w-8 h-8 rounded flex items-center justify-center text-xs font-semibold
                  transition-all border
                  ${
                    isCurrentQuestion
                      ? 'border-foreground ring-2 ring-primary shadow-md'
                      : 'border-border'
                  }
                  ${statusStyles[status]}
                  ${status === 'unanswered' ? 'text-muted-foreground' : 'text-white'}
                `}
                title={`Q${index + 1}: ${status}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-card border border-border rounded-lg p-4 text-sm">
        <h4 className="font-semibold text-foreground mb-2">Legend</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <span className="text-muted-foreground">Answered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-yellow-500"></div>
            <span className="text-muted-foreground">Skipped</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-muted"></div>
            <span className="text-muted-foreground">Not Reached</span>
          </div>
        </div>
      </div>
    </div>
  );
}
