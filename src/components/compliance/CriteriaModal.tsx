
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CriteriaModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  criteria: {
    name: string;
    score: number;
    details: string;
  } | null;
}

export const CriteriaModal = ({ open, onOpenChange, criteria }: CriteriaModalProps) => {
  if (!criteria) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white/90 backdrop-blur-xl border-white/40 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium font-sf-hello">{criteria.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-center p-6 bg-white/40 backdrop-blur-lg rounded-xl">
            <div className={`text-4xl font-light mb-2 ${getScoreColor(criteria.score)}`}>
              {criteria.score}
            </div>
            <p className="text-gray-600">Score</p>
          </div>
          <div className="p-4 bg-white/40 backdrop-blur-lg rounded-xl">
            <h4 className="font-medium text-gray-900 mb-2">Details</h4>
            <p className="text-gray-700">{criteria.details}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
