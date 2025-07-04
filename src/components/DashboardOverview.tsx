
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const DashboardOverview = () => {
  const metrics = [
    { title: 'Active Clients', value: '2,847', change: '+12%', trend: 'up' },
    { title: 'Compliance Score', value: '94.2%', change: '+2.1%', trend: 'up' },
    { title: 'Revenue', value: '$4.2M', change: '+8.5%', trend: 'up' },
    { title: 'Risk Level', value: 'Low', change: '-5%', trend: 'down' },
  ];

  const recentClients = [
    { name: 'TechCorp Industries', score: 96, status: 'Approved', date: '2024-07-01' },
    { name: 'Global Solutions Ltd', score: 88, status: 'Under Review', date: '2024-06-30' },
    { name: 'Innovation Partners', score: 92, status: 'Approved', date: '2024-06-29' },
    { name: 'Future Dynamics', score: 85, status: 'Pending', date: '2024-06-28' },
  ];

  return (
    <div className="space-y-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Recent Client Onboarding */}
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
