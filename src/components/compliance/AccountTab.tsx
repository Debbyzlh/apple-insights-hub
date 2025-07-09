
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

interface AccountTabProps {
  selectedDate: Date;
}

export const AccountTab = ({ selectedDate }: AccountTabProps) => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCriteria, setSelectedCriteria] = useState<{ name: string; score: number; details: string } | null>(null);

  const clients: Client[] = [
    {
      id: 1,
      name: 'TechCorp Industries',
      overallScore: 95,
      criteria: {
        'Financial Health': { score: 98, details: 'Excellent financial stability with consistent revenue growth and strong cash flow management' },
        'Compliance History': { score: 94, details: 'Outstanding compliance record with no major violations in the past 5 years' },
        'Market Position': { score: 92, details: 'Strong market position as a technology leader with competitive advantages' },
        'Risk Assessment': { score: 96, details: 'Low risk profile with diversified business model and stable customer base' }
      },
      status: 'Approved',
      lastUpdated: '2024-07-09'
    },
    {
      id: 2,
      name: 'Global Solutions Ltd',
      overallScore: 88,
      criteria: {
        'Financial Health': { score: 85, details: 'Good financial position with steady growth, some seasonal fluctuations' },
        'Compliance History': { score: 90, details: 'Generally compliant with minor issues resolved quickly' },
        'Market Position': { score: 89, details: 'Well-established market presence with room for expansion' },
        'Risk Assessment': { score: 88, details: 'Moderate risk due to market concentration but good management practices' }
      },
      status: 'Under Review',
      lastUpdated: '2024-07-08'
    },
    {
      id: 3,
      name: 'Innovation Partners',
      overallScore: 92,
      criteria: {
        'Financial Health': { score: 90, details: 'Strong financial metrics with investment in R&D showing future potential' },
        'Compliance History': { score: 95, details: 'Excellent compliance track record with proactive approach to regulations' },
        'Market Position': { score: 91, details: 'Innovative market approach with growing customer base' },
        'Risk Assessment': { score: 92, details: 'Well-managed risks with strong governance structure' }
      },
      status: 'Approved',
      lastUpdated: '2024-07-08'
    },
    {
      id: 4,
      name: 'Future Dynamics',
      overallScore: 85,
      criteria: {
        'Financial Health': { score: 82, details: 'Adequate financial health with recent improvements in profitability' },
        'Compliance History': { score: 87, details: 'Good compliance record with some historical issues now resolved' },
        'Market Position': { score: 86, details: 'Developing market position with growth potential' },
        'Risk Assessment': { score: 85, details: 'Manageable risk level with appropriate mitigation strategies' }
      },
      status: 'Pending',
      lastUpdated: '2024-07-07'
    },
    {
      id: 5,
      name: 'Digital Ventures Inc',
      overallScore: 91,
      criteria: {
        'Financial Health': { score: 93, details: 'Strong financial performance with consistent profitability' },
        'Compliance History': { score: 89, details: 'Good compliance standing with regular audits passed' },
        'Market Position': { score: 90, details: 'Growing market share in digital transformation sector' },
        'Risk Assessment': { score: 92, details: 'Low to moderate risk with strong operational controls' }
      },
      status: 'Approved',
      lastUpdated: '2024-07-07'
    },
    {
      id: 6,
      name: 'Enterprise Systems',
      overallScore: 87,
      criteria: {
        'Financial Health': { score: 84, details: 'Stable financial condition with consistent revenue streams' },
        'Compliance History': { score: 91, details: 'Strong compliance culture with regular training programs' },
        'Market Position': { score: 86, details: 'Established enterprise solutions provider with loyal client base' },
        'Risk Assessment': { score: 87, details: 'Moderate risk profile with good contingency planning' }
      },
      status: 'Under Review',
      lastUpdated: '2024-07-06'
    },
    {
      id: 7,
      name: 'CloudTech Solutions',
      overallScore: 94,
      criteria: {
        'Financial Health': { score: 96, details: 'Excellent financial health with rapid growth in cloud services' },
        'Compliance History': { score: 93, details: 'Strong compliance record with cloud security certifications' },
        'Market Position': { score: 94, details: 'Leading position in cloud infrastructure market' },
        'Risk Assessment': { score: 93, details: 'Well-managed technology and operational risks' }
      },
      status: 'Approved',
      lastUpdated: '2024-07-06'
    },
    {
      id: 8,
      name: 'Data Analytics Pro',
      overallScore: 89,
      criteria: {
        'Financial Health': { score: 87, details: 'Good financial performance with growing analytics business' },
        'Compliance History': { score: 92, details: 'Excellent data privacy compliance with GDPR certification' },
        'Market Position': { score: 88, details: 'Strong position in business intelligence and analytics' },
        'Risk Assessment': { score: 89, details: 'Low risk with robust data security measures' }
      },
      status: 'Approved',
      lastUpdated: '2024-07-05'
    },
    {
      id: 9,
      name: 'Smart Business Hub',
      overallScore: 83,
      criteria: {
        'Financial Health': { score: 80, details: 'Improving financial metrics after restructuring efforts' },
        'Compliance History': { score: 85, details: 'Compliance improvements noted with new management team' },
        'Market Position': { score: 84, details: 'Rebuilding market position with new service offerings' },
        'Risk Assessment': { score: 83, details: 'Moderate risk due to recent organizational changes' }
      },
      status: 'Pending',
      lastUpdated: '2024-07-05'
    },
    {
      id: 10,
      name: 'NextGen Technologies',
      overallScore: 95,
      criteria: {
        'Financial Health': { score: 97, details: 'Outstanding financial performance with innovative revenue models' },
        'Compliance History': { score: 94, details: 'Exemplary compliance record with industry best practices' },
        'Market Position': { score: 95, details: 'Market leader in emerging technologies with strong IP portfolio' },
        'Risk Assessment': { score: 94, details: 'Very low risk with diversified technology investments' }
      },
      status: 'Approved',
      lastUpdated: '2024-07-04'
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
            Account Clients
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
            {selectedClient ? `${selectedClient.name} - Account Analysis` : 'Select a client to view details'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedClient ? (
            <div className="space-y-6">
              <div className="text-center p-8 bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30">
                <div className={`text-6xl font-light mb-3 ${getScoreColor(selectedClient.overallScore)}`}>
                  {selectedClient.overallScore}
                </div>
                <p className="text-lg text-gray-600 font-medium">Overall Account Score</p>
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
                  ✓ Approve Client
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
              <p>Select a client to view detailed analysis</p>
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
