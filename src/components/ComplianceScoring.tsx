
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const ComplianceScoring = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      id: 1,
      name: 'Acme Corporation',
      overallScore: 94,
      categories: {
        'Financial Health': 96,
        'Regulatory Compliance': 92,
        'Data Security': 95,
        'Operational Risk': 93,
        'Legal Standing': 94
      },
      status: 'Approved',
      lastUpdated: '2024-07-02'
    },
    {
      id: 2,
      name: 'Beta Industries',
      overallScore: 87,
      categories: {
        'Financial Health': 89,
        'Regulatory Compliance': 85,
        'Data Security': 88,
        'Operational Risk': 86,
        'Legal Standing': 87
      },
      status: 'Under Review',
      lastUpdated: '2024-07-01'
    },
    {
      id: 3,
      name: 'Gamma Solutions',
      overallScore: 91,
      categories: {
        'Financial Health': 93,
        'Regulatory Compliance': 89,
        'Data Security': 92,
        'Operational Risk': 90,
        'Legal Standing': 91
      },
      status: 'Approved',
      lastUpdated: '2024-06-30'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light text-gray-900">Compliance Scoring</h2>
        <div className="flex items-center space-x-4">
          <Input 
            placeholder="Search clients..." 
            className="w-64 border-gray-200 focus:border-gray-400 focus:ring-0"
          />
          <Button variant="outline" className="border-gray-200 hover:bg-gray-50">
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Client List */}
        <Card className="lg:col-span-1 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium">New Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {clients.map((client) => (
                <div
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedClient?.id === client.id 
                      ? 'bg-blue-50 border border-blue-200' 
                      : 'bg-gray-50/50 hover:bg-gray-100/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{client.name}</h3>
                    <span className={`text-lg font-light ${getScoreColor(client.overallScore)}`}>
                      {client.overallScore}%
                    </span>
                  </div>
                  <Progress 
                    value={client.overallScore} 
                    className="h-2 mb-2"
                  />
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{client.status}</span>
                    <span>{client.lastUpdated}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed View */}
        <Card className="lg:col-span-2 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              {selectedClient ? `${selectedClient.name} - Detailed Analysis` : 'Select a client to view details'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedClient ? (
              <div className="space-y-6">
                {/* Overall Score */}
                <div className="text-center p-6 bg-gray-50/50 rounded-lg">
                  <div className={`text-4xl font-light mb-2 ${getScoreColor(selectedClient.overallScore)}`}>
                    {selectedClient.overallScore}%
                  </div>
                  <p className="text-gray-600">Overall Compliance Score</p>
                </div>

                {/* Category Breakdown */}
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900 mb-4">Category Breakdown</h3>
                  {Object.entries(selectedClient.categories).map(([category, score]) => (
                    <div key={category} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{category}</span>
                        <span className={`text-sm font-medium ${getScoreColor(score)}`}>
                          {score}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(score)}`}
                          style={{ width: `${score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Approve Client
                  </Button>
                  <Button variant="outline" className="flex-1 border-gray-200 hover:bg-gray-50">
                    Request Additional Info
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p>Select a client from the list to view detailed compliance analysis</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
