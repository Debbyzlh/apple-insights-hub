
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const DashboardOverview = () => {
  const metrics = [
    { title: 'Account Risk Score', value: '2.3/10', change: '-0.5', trend: 'down' },
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

  return (
    <div className="space-y-8">
      {/* Performance Metrics Grid - 5 sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/70 border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 font-sf-hello">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-light text-gray-900 font-sf-hello">{metric.value}</span>
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

      {/* Recent Client Onboarding - Scrollable */}
      <Card className="border-0 bg-white/60 backdrop-blur-xl shadow-lg border border-white/20">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-900 font-sf-hello">Recent Client Onboarding</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto">
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
