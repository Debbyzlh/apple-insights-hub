
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IdCard } from 'lucide-react';
import { CriteriaModal } from './CriteriaModal';

interface Client {
  id: number;
  name: string;
  overallScore: number;
  criteria: {
    [key: string]: {
      score: number;
      details: string;
    };
  };
  status: string;
  lastUpdated: string;
}

interface Tab5Props {
  selectedDate: Date;
}

export const Tab5 = ({ selectedDate }: Tab5Props) => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCriteria, setSelectedCriteria] = useState<{ name: string; score: number; details: string } | null>(null);

  const clients: Client[] = [
    {
      id: 1,
      name: 'Global Partners Inc',
      overallScore: 89,
      criteria: {
        'Strategic Alignment': { score: 91, details: 'Excellent strategic alignment with our business goals' },
        'Market Reach': { score: 87, details: 'Good market reach with potential for expansion' },
        'Technology Stack': { score: 90, details: 'Advanced technology stack with modern capabilities' },
        'Support Capability': { score: 88, details: 'Strong support capabilities with 24/7 availability' }
      },
      status: 'Under Review',
      lastUpdated: '2024-07-01'
    }
  ];

  const handleCriteriaClick = (name: string, score: number, details: string) => {
    setSelectedCriteria({ name, score, details });
    setModalOpen(true);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1 border-0 shadow-sm bg-white/60 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <IdCard className="h-5 w-5" />
            Tab 5 Partners
          </CardTitle>
          <p className="text-sm text-gray-500">
            {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {clients.map((client) => (
              <div
                key={client.id}
                onClick={() => setSelectedClient(client)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 backdrop-blur-sm ${
                  selectedClient?.id === client.id 
                    ? 'bg-blue-50/80 border border-blue-200/50 shadow-lg' 
                    : 'bg-white/40 hover:bg-white/60 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{client.name}</h3>
                  <span className={`text-2xl font-light ${getScoreColor(client.overallScore)}`}>
                    {client.overallScore}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{client.status}</span>
                  <span>{client.lastUpdated}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2 border-0 shadow-sm bg-white/60 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-lg font-medium">
            {selectedClient ? `${selectedClient.name} - Tab 5 Analysis` : 'Select a partner to view details'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedClient ? (
            <div className="space-y-6">
              <div className="text-center p-8 bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30">
                <div className={`text-6xl font-light mb-3 ${getScoreColor(selectedClient.overallScore)}`}>
                  {selectedClient.overallScore}
                </div>
                <p className="text-lg text-gray-600 font-medium">Overall Tab 5 Score</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-gray-900 mb-4">Criteria Breakdown</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(selectedClient.criteria).map(([criteriaName, data]) => (
                    <div
                      key={criteriaName}
                      onClick={() => handleCriteriaClick(criteriaName, data.score, data.details)}
                      className="p-4 bg-white/40 backdrop-blur-lg rounded-xl cursor-pointer transition-all duration-200 hover:bg-white/60 hover:shadow-lg border border-white/30 hover:border-white/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{criteriaName}</span>
                        <span className={`text-xl font-medium ${getScoreColor(data.score)}`}>
                          {data.score}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 hover:text-gray-700">Click for details</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 shadow-lg">
                  ✓ Approve Partner
                </Button>
                <Button variant="outline" className="flex-1 border-gray-200 hover:bg-gray-50 shadow-lg bg-white/60 backdrop-blur-lg">
                  Request Additional Info
                </Button>
                <Button variant="outline" className="flex-1 border-red-200 text-red-600 hover:bg-red-50 shadow-lg bg-white/60 backdrop-blur-lg">
                  ✗ Reject
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <IdCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Select a partner to view detailed analysis</p>
            </div>
          )}
        </CardContent>
      </Card>

      <CriteriaModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        criteria={selectedCriteria}
      />
    </div>
  );
};
