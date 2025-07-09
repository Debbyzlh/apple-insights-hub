
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, Eye } from 'lucide-react';

export const DashboardOverview = () => {
  const metrics = [
    { title: 'Risky Accounts', value: '12', change: '+3', trend: 'up', isRisky: true },
    { title: 'SO/ST/SF Alignment', value: '94.7%', change: '+2.3%', trend: 'up' },
    { title: 'UB Rate', value: '12.8%', change: '+1.2%', trend: 'up' },
    { title: 'Market Purchase', value: '$8.4M', change: '+15.6%', trend: 'up' },
    { title: 'VAT vs SO', value: '96.2%', change: '+0.8%', trend: 'up' },
  ];

  const recentClients = [
    { name: 'TechCorp Industries', score: 96, status: 'Approved', date: '2024-07-09' },
    { name: 'Global Solutions Ltd', score: 88, status: 'Under Review', date: '2024-07-08' },
    { name: 'Innovation Partners', score: 92, status: 'Approved', date: '2024-07-08' },
    { name: 'Future Dynamics', score: 85, status: 'Pending', date: '2024-07-07' },
    { name: 'Digital Ventures Inc', score: 91, status: 'Approved', date: '2024-07-07' },
    { name: 'Enterprise Systems', score: 87, status: 'Under Review', date: '2024-07-06' },
    { name: 'CloudTech Solutions', score: 94, status: 'Approved', date: '2024-07-06' },
    { name: 'Data Analytics Pro', score: 89, status: 'Approved', date: '2024-07-05' },
    { name: 'Smart Business Hub', score: 83, status: 'Pending', date: '2024-07-05' },
    { name: 'NextGen Technologies', score: 95, status: 'Approved', date: '2024-07-04' },
    { name: 'Quantum Computing Ltd', score: 90, status: 'Approved', date: '2024-07-04' },
    { name: 'AI Solutions Group', score: 86, status: 'Under Review', date: '2024-07-03' },
    { name: 'Blockchain Dynamics', score: 93, status: 'Approved', date: '2024-07-03' },
    { name: 'Cybersecurity Plus', score: 88, status: 'Approved', date: '2024-07-02' },
    { name: 'Mobile First Corp', score: 84, status: 'Pending', date: '2024-07-02' },
    { name: 'Green Energy Tech', score: 91, status: 'Approved', date: '2024-07-01' },
    { name: 'Financial Systems Pro', score: 87, status: 'Under Review', date: '2024-07-01' },
    { name: 'Healthcare Innovations', score: 92, status: 'Approved', date: '2024-06-30' },
  ];

  const riskyAccounts = [
    {
      name: 'Suspicious Trading Corp',
      riskLevel: 'High',
      reasons: ['Unusual transaction patterns', 'Missing compliance documents', 'Frequent policy violations'],
      lastActivity: '2024-07-08'
    },
    {
      name: 'Red Flag Industries',
      riskLevel: 'Critical',
      reasons: ['Failed KYC verification', 'Connection to sanctioned entities', 'Suspicious fund sources'],
      lastActivity: '2024-07-07'
    },
    {
      name: 'Warning Signals Ltd',
      riskLevel: 'Medium',
      reasons: ['Late payment history', 'Inconsistent reporting', 'Location in high-risk jurisdiction'],
      lastActivity: '2024-07-06'
    },
    {
      name: 'Alert Systems Inc',
      riskLevel: 'High',
      reasons: ['Rapid account changes', 'Unusual beneficiary structures', 'PEP connections'],
      lastActivity: '2024-07-05'
    },
    {
      name: 'Flagged Ventures',
      riskLevel: 'Medium',
      reasons: ['Volume inconsistencies', 'Geographic risk factors', 'Regulatory warnings'],
      lastActivity: '2024-07-04'
    }
  ];

  const handleBlacklist = (clientName: string) => {
    console.log(`Adding ${clientName} to blacklist`);
    // Add blacklist logic here
  };

  const handleIgnore = (clientName: string) => {
    console.log(`Ignoring risk for ${clientName}`);
    // Add ignore logic here
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Critical': return 'text-red-700 bg-red-100/80 border-red-300';
      case 'High': return 'text-orange-700 bg-orange-100/80 border-orange-300';
      case 'Medium': return 'text-yellow-700 bg-yellow-100/80 border-yellow-300';
      default: return 'text-gray-700 bg-gray-100/80 border-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      {/* Performance Metrics Grid - 5 sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/70 border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 font-sf-hello flex items-center gap-2">
                {metric.isRisky && <AlertTriangle className="h-4 w-4 text-red-500" />}
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-light font-sf-hello ${
                  metric.isRisky ? 'text-red-600' : 'text-gray-900'
                }`}>
                  {metric.value}
                </span>
                <span className={`text-sm font-medium font-sf-hello ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Risky Accounts Section */}
      <Card className="border-0 bg-white/60 backdrop-blur-xl shadow-lg border border-white/20">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-900 font-sf-hello flex items-center gap-2">
            <Shield className="h-5 w-5 text-red-500" />
            Risky Accounts - Immediate Attention Required
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskyAccounts.map((account, index) => (
              <div key={index} className="p-6 bg-white/40 backdrop-blur-lg rounded-xl border border-white/30 hover:bg-white/60 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-gray-900 font-sf-hello text-lg">{account.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium font-sf-hello backdrop-blur-sm border ${getRiskColor(account.riskLevel)}`}>
                        {account.riskLevel} Risk
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 font-sf-hello mb-3">Last Activity: {account.lastActivity}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        Risk Factors:
                      </h4>
                      <ul className="space-y-1">
                        {account.reasons.map((reason, reasonIndex) => (
                          <li key={reasonIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></div>
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-2 border-t border-white/30">
                  <Button 
                    onClick={() => handleBlacklist(account.name)}
                    variant="destructive" 
                    className="flex-1 bg-red-600 hover:bg-red-700 shadow-lg"
                  >
                    Add to Blacklist
                  </Button>
                  <Button 
                    onClick={() => handleIgnore(account.name)}
                    variant="outline" 
                    className="flex-1 border-gray-200 hover:bg-gray-50 shadow-lg bg-white/60 backdrop-blur-lg"
                  >
                    Ignore Risk
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Client Onboarding - Now without scrollable container */}
      <Card className="border-0 bg-white/60 backdrop-blur-xl shadow-lg border border-white/20">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-900 font-sf-hello">Recent Client Onboarding</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentClients.map((client, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/40 backdrop-blur-lg rounded-xl hover:bg-white/60 transition-all duration-300 border border-white/30">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 font-sf-hello">{client.name}</h3>
                  <p className="text-sm text-gray-500 font-sf-hello">{client.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900 font-sf-hello">{client.score}%</div>
                    <Progress value={client.score} className="w-16 h-1" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-sf-hello backdrop-blur-sm ${
                    client.status === 'Approved' ? 'bg-green-100/80 text-green-800 border border-green-200/50' :
                    client.status === 'Under Review' ? 'bg-yellow-100/80 text-yellow-800 border border-yellow-200/50' :
                    'bg-gray-100/80 text-gray-800 border border-gray-200/50'
                  }`}>
                    {client.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
